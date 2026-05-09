import { HttpClient } from './generated/http-client'
import { Api } from './generated/Api'
import { ElMessage } from 'element-plus'
import type { SecurityDataType } from './types'
import { securityDataManager } from '@/utils/security-data-manager'
import { projectConfig } from '~/project-config'

const customHttpClient = new HttpClient<SecurityDataType>({
  baseURL: projectConfig.backEndUrl,
  timeout: 10000,
  headers: {
    'X-Custom-Header': 'value',
  },
  securityWorker: async () => {
    // 自定义认证逻辑
    const headers = await securityDataManager.getSecurityHeaders()
    return {
      headers,
    }
  },
})

// 使用单客户端模式创建 API 实例
const gApi = new Api(customHttpClient)

// 直接访问 axios 实例进行高级配置
gApi.http.instance.interceptors.request.use(
  (config) => {
    // 请求拦截器
    // console.log('Request:', config)
    return config
  },
  (error) => Promise.reject(error),
)

gApi.http.instance.interceptors.response.use(
  (response) => {
    // 如果请求头带有刷新token
    securityDataManager.checkAndSaveNewSecurityData(response)
    // 响应拦截器
    if (response.data.statusCode !== 200) {
      ElMessage.error(response.data.message)
      throw new Error(response.data.message)
    }
    return response
  },
  (error) => Promise.reject(error),
)

export { gApi }
