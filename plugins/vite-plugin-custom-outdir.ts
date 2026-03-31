import type { Plugin } from 'vite'
import path from 'path'

interface Options {
  prefix?: string // 可选：手动指定前缀，如果不传则默认使用项目文件夹名
}

export default function vitePluginCustomOutDir(options: Options = {}): Plugin {
  return {
    name: 'vite-plugin-custom-outdir',
    config(config, { command }) {
      if (command === 'build') {
        // 1. 获取项目文件夹名称
        // process.cwd() 获取当前工作目录的绝对路径
        // path.basename 会提取路径的最后一部分，即文件夹名
        const projectFolderName = path.basename(process.cwd())

        // 2. 确定前缀（如果用户传了 prefix 就用用户传的，否则用文件夹名）
        const prefix = options.prefix || projectFolderName

        // 3. 生成时间戳：YYYYMMDDHHmmss
        const now = new Date()
        const timestamp = [
          now.getFullYear(),
          String(now.getMonth() + 1).padStart(2, '0'),
          String(now.getDate()).padStart(2, '0'),
          '_',
          String(now.getHours()).padStart(2, '0'),
          String(now.getMinutes()).padStart(2, '0'),
          String(now.getSeconds()).padStart(2, '0'),
        ].join('')

        // 4. 拼接最终目录名称
        const newOutDir = `dist/${prefix}-${timestamp}`

        // 5. 返回修改后的配置
        return {
          build: {
            outDir: newOutDir,
          },
        }
      }
    },
  }
}
