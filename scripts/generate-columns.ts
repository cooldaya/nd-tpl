import axios from 'axios'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import ejs from 'ejs'
import { camelCase, upperFirst } from 'lodash-es'
import { projectConfig } from '../project-config.ts'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const SWAGGER_URL = projectConfig.swaggerUrl

function toPascalCase(str: string) {
  return upperFirst(camelCase(str))
}

interface SwaggerProperty {
  description?: string
  type?: string
  $ref?: string
}

interface ColumnItem {
  label: string
  prop: string
  component: string
  add: boolean
  edit: boolean
  search: boolean
  detail: boolean
}

/** 过滤掉通用技术字段和以 id 结尾的字段 */
function shouldSkipField(key: string) {
  const techFields = [
    'id',
    'createTime',
    'updateTime',
    'isDeleted',
    'createdPerson',
    'updatedPerson',
    'createdAt',
    'updatedAt',
  ]
  return techFields.includes(key) || key.toLowerCase().endsWith('id')
}

async function generate() {
  const args = process.argv.slice(2)

  if (args.length < 1) {
    console.error('Usage: pnpm tsx scripts/generate-columns.ts <EntityName1> [EntityName2] ...')
    console.error('Example: pnpm tsx scripts/generate-columns.ts User Role')
    process.exit(1)
  }

  const entityNames = args.map(toPascalCase)

  // 输出到脚本执行时的工作目录下的 columns.ts
  const resolvedOutput = path.resolve(process.env.INIT_CWD || process.cwd(), 'columns.ts')

  console.log(`Fetching swagger from ${SWAGGER_URL}...`)

  let swagger: { components?: { schemas?: Record<string, { properties?: Record<string, SwaggerProperty> }> } }
  try {
    const res = await axios.get(SWAGGER_URL)
    swagger = res.data
  } catch (error) {
    console.error('Error fetching swagger:', error)
    process.exit(1)
  }

  const schemas = swagger.components?.schemas ?? {}

  const entities: Array<{ entityName: string; varName: string; columns: ColumnItem[] }> = []

  for (const entityName of entityNames) {
    const voSchema = schemas[`${entityName}VO`]

    if (!voSchema) {
      console.warn(`Warning: Schema "${entityName}VO" not found in swagger, skipping.`)
      continue
    }

    const properties = (voSchema.properties ?? {}) as Record<string, SwaggerProperty>

    const columns: ColumnItem[] = Object.entries(properties)
      .filter(([key]) => !shouldSkipField(key))
      .map(([key, value]) => ({
        label: value.description || key,
        prop: key,
        component: 'el-input',
        add: true,
        edit: true,
        search: true,
        detail: true,
      }))

    const varName = `${entityName.charAt(0).toLowerCase()}${entityName.slice(1)}Columns`
    entities.push({ entityName, varName, columns })
    console.log(`  ✓ ${entityName}: ${columns.length} columns`)
  }

  if (entities.length === 0) {
    console.error('Error: No valid schemas found, nothing to generate.')
    process.exit(1)
  }

  const templatePath = path.join(__dirname, 'templates', 'columns.ts.ejs')
  const content = await ejs.renderFile(templatePath, { entities })

  // 确保输出目录存在
  const outputDir = path.dirname(resolvedOutput)
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  fs.writeFileSync(resolvedOutput, content, 'utf-8')
  console.log(`\nSuccessfully generated: ${resolvedOutput}`)
}

generate()
