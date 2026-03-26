import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { pick } from 'lodash-es'
import type { LoginResultVO } from '@/api/generated/data-contracts'
import { securityDataManager } from '@/utils/security-data-manager'

export const useAuthStore = defineStore('auth', () => {
  const refData = reactive({})

  const handles = {
    async initLoginInfo(loginInfo: LoginResultVO) {
      console.log({
        loginInfo,
      })
      securityDataManager.setSecurityData({
        accessToken: loginInfo.accessToken as string,
        refreshToken: loginInfo.refreshToken as string,
      })
    },
  }

  return {
    ...pick(handles, ['initLoginInfo']),
  }
})
