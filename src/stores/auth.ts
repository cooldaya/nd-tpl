import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { pick } from 'lodash-es'
import type { LoginResultVO } from '@/api/generated/data-contracts'
import { tokenManager } from '@/utils/token-manager'

export const useAuthStore = defineStore('auth', () => {
  const refData = reactive({})

  const handles = {
    async initLoginInfo(loginInfo: LoginResultVO) {
      console.log({
        loginInfo,
      })
      tokenManager.setTokens(loginInfo)
    },
  }

  return {
    ...pick(handles, ['initLoginInfo']),
  }
})
