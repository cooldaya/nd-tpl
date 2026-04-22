type ProjectConfig = {
  name: string
  title: string
  subTitle: string
  backEndUrl: string
  swaggerUrl: string
}


const projectConfig: ProjectConfig = {
  name: 'nd-tpl',
  title: '石柱',
  subTitle: '小水电站生态流量监测系统',
  backEndUrl: 'http://113.249.105.12:8074/netcore',
  swaggerUrl:''
  // swaggerUrl: 'http://113.249.105.12:9931/netcore/swagger/Default/swagger.json',
}

projectConfig.swaggerUrl = `${projectConfig.backEndUrl}/swagger/Default/swagger.json`

export { projectConfig }
