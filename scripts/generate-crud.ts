import axios from 'axios'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import ejs from 'ejs'
import { kebabCase, camelCase, upperFirst } from 'lodash-es'
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

async function generate() {
  const args = process.argv.slice(2)
  if (args.length < 1) {
    console.error(
      'Usage: pnpm ts-node ... scripts/generate-crud.ts <EntityName> [OutputFileName] [PageTitle] [OutputPath]',
    )
    process.exit(1)
  }

  const entityName = toPascalCase(args[0])
  const outputFileName = args[1] || args[0]
  const pageTitle = args[2] || args[0]
  const outputPathBase = args[3]
    ? path.resolve(__dirname, '../src/pages/modules', args[3])
    : process.env.INIT_CWD || process.cwd()

  try {
    console.log(`Fetching swagger from ${SWAGGER_URL}...`)
    const res = await axios.get(SWAGGER_URL)
    const swagger = res.data
    const schemas = swagger.components.schemas

    const voSchema = schemas[`${entityName}VO`]

    if (!voSchema) {
      console.error(`Error: Schema ${entityName}VO not found in swagger.`)
      process.exit(1)
    }

    const properties = (voSchema.properties || {}) as Record<string, SwaggerProperty>
    const columns = Object.entries(properties)
      .map(([key, value]) => {
        // Skip common technical fields if needed, but for now we include all
        const condition1 = [
          'id',
          'createTime',
          'updateTime',
          'isDeleted',
          'createdPerson',
          'updatedPerson',
          'createdAt',
          'updatedAt',
        ].includes(key)
        if (condition1) return null

        return {
          label: value.description || key,
          prop: key,
          component: 'el-input',
          add: true,
          edit: true,
          search: true,
          detail: true,
        }
      })
      .filter(Boolean)

    if (!fs.existsSync(outputPathBase)) {
      fs.mkdirSync(outputPathBase, { recursive: true })
    }

    const dataDir = path.join(outputPathBase, 'curd-datas')
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }

    const templatesDir = path.join(__dirname, 'templates')
    const dataName = kebabCase(outputFileName)

    const dataTsContent = await ejs.renderFile(path.join(templatesDir, 'data.ts.ejs'), {
      entityName,
      columns,
    })

    const vueContent = await ejs.renderFile(path.join(templatesDir, 'vue.vue.ejs'), {
      pageTitle,
      entityName,
      dataName,
    })

    const dataTsPath = path.join(dataDir, `${dataName}-data.ts`)
    const vuePath = path.join(outputPathBase, `${dataName}.vue`)

    fs.writeFileSync(dataTsPath, dataTsContent)
    fs.writeFileSync(vuePath, vueContent)

    console.log(`Successfully generated using EJS:
- ${dataTsPath}
- ${vuePath}`)
  } catch (error) {
    console.error('Error generating files:', error)
  }
}

generate()
