import { markRaw, reactive } from 'vue'
import { defineStore } from 'pinia'
import { omit } from 'lodash-es'
import type { LoginResultVO, LoginResultUserAO } from '@/api/generated/data-contracts'
import { securityDataManager } from '@/utils/security-data-manager'

export const useAuthStore = defineStore('auth', () => {
  const authRefData = reactive<{
    resources: string[]
    roles: LoginResultUserAO['roles']
    userInfo: Omit<LoginResultUserAO, 'resources' | 'roles'> | null
  }>({
    resources: [],
    roles: [],
    userInfo: null,
  })

  const handles = {
    async initLoginInfo(loginInfo: LoginResultVO) {
      console.log({
        loginInfo,
      })
      securityDataManager.setSecurityData({
        accessToken: loginInfo.accessToken as string,
        refreshToken: loginInfo.refreshToken as string,
      })

      authRefData.resources = markRaw(loginInfo.user?.resources || [])
      authRefData.roles = markRaw(loginInfo.user?.roles || [])
      authRefData.userInfo = omit(loginInfo.user, ['resources', 'roles'])
    },
  }

  return {
    initLoginInfo: handles.initLoginInfo,
    authRefData,
  }
})
