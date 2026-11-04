#!/usr/bin/env node
/**
 * 一键打包 + 部署到本地 nginx
 * 用法：npm run deploy
 * 自定义目标目录：DEPLOY_TARGET=D:\other\path npm run deploy
 *
 * 说明：走 build-only（跳过 vue-tsc 类型检查），因为仓库存在既有 TS 错误。
 */
import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const DIST_DIR = path.join(ROOT, 'dist')
const OUT_PREFIX = 'nd-tpl-'

const TARGET = path.resolve(
  process.env.DEPLOY_TARGET || 'D:\\apps\\envs\\nginx-1.31.8\\html\\nd-tpl',
)
const TMP = `${TARGET}.tmp`
const BAK = `${TARGET}.bak`

const URL_PATH = '/' + path.basename(TARGET) + '/'

function log(step, msg) {
  console.log(`\x1b[36m[${step}]\x1b[0m ${msg}`)
}

function fail(msg) {
  console.error(`\x1b[31m[ERROR]\x1b[0m ${msg}`)
  process.exit(1)
}

function detectPackageManager() {
  const ua = process.env.npm_config_user_agent || ''
  if (ua.startsWith('pnpm')) return 'pnpm'
  if (ua.startsWith('yarn')) return 'yarn'
  return 'npm'
}

function runBuild() {
  const pm = detectPackageManager()
  log('1/3', `构建中（${pm} run build-only）...`)
  const res = spawnSync(pm, ['run', 'build-only'], { cwd: ROOT, stdio: 'inherit', shell: true })
  if (res.status !== 0) fail('构建失败，已中止部署')
}

function latestBuildDir() {
  if (!fs.existsSync(DIST_DIR)) fail(`dist 目录不存在：${DIST_DIR}`)
  const dirs = fs
    .readdirSync(DIST_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && d.name.startsWith(OUT_PREFIX))
    .map((d) => d.name)
    .sort()
  if (!dirs.length) fail(`dist 下没有 ${OUT_PREFIX}<时间戳> 产物`)
  return path.join(DIST_DIR, dirs[dirs.length - 1])
}

function walk(dir) {
  let count = 0
  let bytes = 0
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      const sub = walk(full)
      count += sub.count
      bytes += sub.bytes
    } else {
      count += 1
      bytes += fs.statSync(full).size
    }
  }
  return { count, bytes }
}

function deploy(src) {
  const { count, bytes } = walk(src)
  log(
    '2/3',
    `复制 ${count} 个文件（${(bytes / 1048576).toFixed(2)} MB）：${path.relative(ROOT, src)} → ${TARGET}`,
  )

  fs.rmSync(TMP, { recursive: true, force: true })
  fs.cpSync(src, TMP, { recursive: true })

  if (!fs.existsSync(path.join(TMP, 'index.html'))) {
    fs.rmSync(TMP, { recursive: true, force: true })
    fail('产物缺少 index.html，已中止')
  }

  fs.rmSync(BAK, { recursive: true, force: true })
  const hasOld = fs.existsSync(TARGET)
  if (hasOld) fs.renameSync(TARGET, BAK)

  try {
    fs.renameSync(TMP, TARGET)
  } catch (err) {
    if (hasOld && !fs.existsSync(TARGET)) fs.renameSync(BAK, TARGET)
    fail(`替换目标目录失败：${err.message}`)
  }

  return { count, bytes, hasOld }
}

runBuild()
const src = latestBuildDir()
const { count, bytes, hasOld } = deploy(src)

log('3/3', '完成')
console.log(`
  产物：${path.relative(ROOT, src)}（${count} 个文件 / ${(bytes / 1048576).toFixed(2)} MB）
  目标：${TARGET}
  访问：http://localhost${URL_PATH}
  ${hasOld ? `回滚：删掉 ${path.basename(TARGET)}，把 ${path.basename(BAK)} 改名为 ${path.basename(TARGET)}` : '（首次部署，无旧版本备份）'}
`)
