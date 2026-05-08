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
  backEndUrl: 'http://122.9.157.65:9600/netcore',
  swaggerUrl: '',
  customAuthHeaderKey: 'tngq-access-token',
  // swaggerUrl: 'http://113.249.105.12:9931/netcore/swagger/Default/swagger.json',
}

projectConfig.swaggerUrl = `${projectConfig.backEndUrl}/swagger/Default/swagger.json`

export { projectConfig }
