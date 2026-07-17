type ProjectConfig = {
  name: string
  title: string
  subTitle: string
  backEndUrl: string
  swaggerUrl: string
  customAuthHeaderKey: string
}

const projectConfig: ProjectConfig = {
  name: 'nd-tpl',
  title: '潼南',
  subTitle: '灌区',
  backEndUrl: 'http://59.110.20.206:7177/netcore', //
  swaggerUrl: '',
  customAuthHeaderKey: 'authorization',
  // swaggerUrl: 'http://113.249.105.12:9931/netcore/swagger/Default/swagger.json',
}

projectConfig.swaggerUrl = `${projectConfig.backEndUrl}/swagger/Default/swagger.json`
// projectConfig.swaggerUrl = `http://127.0.0.1:8080/swagger-local.json`

export { projectConfig }
