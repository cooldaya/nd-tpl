import { localStore } from './local-store'
import { decryptJWT } from '@/utils/js-sign'
import type { SecurityDataType } from '@/api/types'
import { gApi } from '@/api/gapi'
import router from '@/router' // 指向你的 router 实例文件
import { ElMessage } from 'element-plus'
import type { AxiosResponse } from 'axios'

const securityDataKey = 'securityData'

enum HeaderTokenKeyType {
  Authorization = 'authorization',
  XAuthorization = 'x-authorization',
}

class SecurityDataManager {
  private securityData: SecurityDataType | null = null
  private isRefreshing = false

  setSecurityData(securityData: SecurityDataType) {
    this.securityData = securityData
    gApi.http.setSecurityData(securityData)
    localStore.setItem(securityDataKey, securityData)
  }

  async getSecurityData() {
    if (!this.securityData) {
      this.securityData = await localStore.getItem<SecurityDataType>(securityDataKey)
    }
    return this.securityData
  }

  clear() {
    localStore.removeItem(securityDataKey)
    this.securityData = null
  }

  async currentAccessTokenIsExpired() {
    try {
      const securityData = await this.getSecurityData()
      if (!securityData) return true
      const jwt = decryptJWT(securityData.accessToken)
      return Date.now() >= jwt.exp * 1000
    } catch (error) {
      console.error(error)
      return true
    }
  }

  async initSecurityData() {
    const securityData = await localStore.getItem<SecurityDataType>(securityDataKey)
    if (!securityData) return null
    this.setSecurityData(securityData)
    return securityData
  }

  async getSecurityHeaders(): Promise<Record<string, string>> {
    if (this.isRefreshing) {
      await new Promise((resolve) => setTimeout(resolve, 100))
      // 递归调用，直到isRefreshing为false
      return this.getSecurityHeaders()
    }
    const securityData = await this.getSecurityData()
    if (!securityData) {
      throw new Error('Security data not found')
    }
    const currenttokenIsExpired = await this.currentAccessTokenIsExpired()
    if (currenttokenIsExpired) {
      const refreshToken = securityData.refreshToken
      this.changeRefreshing(true)
      return {
        [HeaderTokenKeyType.Authorization]: `Bearer ${securityData.accessToken}`,
        [HeaderTokenKeyType.XAuthorization]: `Bearer ${refreshToken}`,
      }
    } else {
      return {
        [HeaderTokenKeyType.Authorization]: `Bearer ${securityData.accessToken}`,
      }
    }
  }

  changeRefreshing(isRefreshing: boolean) {
    this.isRefreshing = isRefreshing
  }

  checkAndSaveNewSecurityData(response: AxiosResponse) {
    if (!response.config.headers[HeaderTokenKeyType.XAuthorization]) return
    if (response.data.statusCode !== 200) {
      // 刷新token失败
      this.clear()
      ElMessage.error(response.data.message)
      this.changeRefreshing(false)
      return setTimeout(() => {
        router.push({ name: 'login' })
      }, 1000)
    }
    this.setSecurityData({
      accessToken: response.headers[HeaderTokenKeyType.Authorization],
      refreshToken: response.headers[HeaderTokenKeyType.XAuthorization],
    })
    this.changeRefreshing(false)
  }
}
const securityDataManager = new SecurityDataManager()
export { securityDataManager, HeaderTokenKeyType }
