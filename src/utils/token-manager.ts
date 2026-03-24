import { localStore } from './local-store'
import type { LoginResultVO } from '@/api/generated/data-contracts'
import { decryptJWT } from '@/utils/js-sign'

const tokenKeys = {
  accessToken: 'access_token',
  refreshToken: 'refresh_token',
}

const tokenManager = {
  getAccessToken() {
    return localStore.getItem<string>(tokenKeys.accessToken)
  },

  setAccessToken(token: string) {
    localStore.setItem(tokenKeys.accessToken, token)
  },

  getRefreshToken() {
    return localStore.getItem(tokenKeys.refreshToken)
  },

  setRefreshToken(token: string) {
    localStore.setItem(tokenKeys.refreshToken, token)
  },

  clear() {
    localStore.removeItem(tokenKeys.accessToken)
    localStore.removeItem(tokenKeys.refreshToken)
  },

  setTokens(loginInfo: LoginResultVO) {
    this.setAccessToken(loginInfo.accessToken || '')
    this.setRefreshToken(loginInfo.refreshToken || '')
  },
  async currenttokenIsExpired() {
    const currentToken = await this.getAccessToken()
    if (!currentToken) return true
    const jwt = decryptJWT(currentToken)
    return Date.now() >= jwt.exp * 1000
  },
}

export { tokenManager }
