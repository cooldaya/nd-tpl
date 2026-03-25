import { HttpClient } from './generated/http-client'
import { Api } from './generated/Api'
import { tokenManager } from '@/utils/token-manager'
import router from '@/router'
import { ElMessage } from 'element-plus'

interface SecurityDataType {
  accessToken: string
  refreshToken: string
}

const customHttpClient = new HttpClient<SecurityDataType>({
  baseURL: 'http://113.249.105.12:9931/netcore',
  timeout: 10000,
  headers: {
    'X-Custom-Header': 'value',
  },
  securityWorker: async (securityData) => {
    // 自定义认证逻辑
    const headers: Record<string, string> = {}
    const currenttokenIsExpired = await tokenManager.currenttokenIsExpired()
    if (currenttokenIsExpired) {
      const refreshToken = await tokenManager.getRefreshToken()
      if (refreshToken) {
        headers['X-Authorization'] = `Bearer ${refreshToken}`
      } else {
        router.push({
          name: 'login',
        })
      }
    } else {
      const accessToken = await tokenManager.getAccessToken()
      headers['Authorization'] = `Bearer ${accessToken}`
    }

    return {
      headers,
    }
  },
})
// 设置认证数据
customHttpClient.setSecurityData({
  accessToken: 'your-token',
  refreshToken: 'refresh-token',
})

// 使用单客户端模式创建 API 实例
const gApi = new Api(customHttpClient)

// 直接访问 axios 实例进行高级配置
gApi.http.instance.interceptors.request.use(
  (config) => {
    // 请求拦截器
    console.log('Request:', config)
    return config
  },
  (error) => Promise.reject(error),
)

gApi.http.instance.interceptors.response.use(
  (response) => {
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
