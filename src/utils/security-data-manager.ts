import { localStore } from './local-store'
import { decryptJWT } from '@/utils/js-sign'
import type { SecurityDataType } from '@/api/types'
import { gApi } from '@/api/gapi'

const securityDataKey = 'securityData'

class SecurityDataManager {
  private securityData: SecurityDataType | null = null
  private isRequesting = false

  setSecurityData(securityData: SecurityDataType) {
    this.securityData = securityData
    gApi.http.setSecurityData(securityData)
    localStore.setItem(securityDataKey, securityData)
  }

  getSecurityData() {
    return this.securityData
  }

  clear() {
    localStore.removeItem(securityDataKey)
    this.securityData = null
  }

  currentAccessTokenIsExpired() {
    try {
      const securityData = this.getSecurityData()
      if (!securityData) return true
      const jwt = decryptJWT(securityData.accessToken)
      return Date.now() >= jwt.exp * 1000
    } catch (error) {
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
    const securityData = this.getSecurityData()
    if (!securityData) {
      throw new Error('Security data not found')
    }
    const currenttokenIsExpired = await this.currentAccessTokenIsExpired()
    if (currenttokenIsExpired) {
      const refreshToken = securityData.refreshToken
      return {
        'X-Authorization': `Bearer ${refreshToken}`,
      }
    } else {
      return {
        Authorization: `Bearer ${securityData.accessToken}`,
      }
    }
  }
}
const securityDataManager = new SecurityDataManager()
export { securityDataManager }
