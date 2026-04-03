import { markRaw, reactive, shallowRef } from 'vue'
import { defineStore } from 'pinia'
import { omit } from 'lodash-es'
import { securityDataManager } from '@/utils/security-data-manager'
import { ADMINISTRATOR_NAME } from '@/utils/consts'
import { generatedRoutes } from '@/router/gen-routes'
import { filterAsyncRoutes } from '@/utils/permission'
import type { RouteRecordRaw } from 'vue-router'
import type { LoginResultVO, LoginResultUserAO } from '@/api/generated/data-contracts'
import router from '@/router'

export const useAuthStore = defineStore('auth', () => {
  const authRefData = reactive<{
    resources: Set<string>
    roles: LoginResultUserAO['roles']
    userInfo: Omit<LoginResultUserAO, 'resources' | 'roles'> | null
    isLogIn: boolean
    isRoutesLoaded: boolean
  }>({
    resources: new Set(),
    roles: [],
    userInfo: null,
    isLogIn: false,
    isRoutesLoaded: false,
  })

  const authFilteredRoutes = shallowRef<RouteRecordRaw[]>([])

  const handles = {
    async initLoginInfo(loginInfo: LoginResultVO) {
      debugger
      if (authRefData.isLogIn) return
      try {
        authRefData.isLogIn = true
        securityDataManager.setSecurityData({
          accessToken: loginInfo.accessToken as string,
          refreshToken: loginInfo.refreshToken as string,
        })

        authRefData.resources = loginInfo.user?.resources
          ? new Set(loginInfo.user.resources)
          : new Set()

        authRefData.roles = markRaw(loginInfo.user?.roles || [])
        authRefData.userInfo = omit(loginInfo.user, ['resources', 'roles'])
        await handles.initAuthFilteredRoutes()
      } catch (error) {
        console.error(error)
      }
    },
    async initAuthFilteredRoutes() {
      if (authRefData.isRoutesLoaded) return
      authRefData.isRoutesLoaded = true
      // 过滤路由
      const filteredRoutes =
        authRefData.userInfo?.loginname === ADMINISTRATOR_NAME
          ? generatedRoutes.needAuthRoutes
          : filterAsyncRoutes(generatedRoutes.needAuthRoutes, authRefData.resources)
      filteredRoutes.forEach((route) => {
        router.addRoute(route)
      })
      // 添加通配页面
      router.addRoute(generatedRoutes.wildcardRoute)
      authFilteredRoutes.value = filteredRoutes
      authRefData.isRoutesLoaded = true
    },
    resetAuthStatus() {
      authRefData.isLogIn = false
      authRefData.isRoutesLoaded = false
      authRefData.userInfo = null
      authRefData.resources = new Set()
      securityDataManager.clear()
    },
  }

  return {
    initLoginInfo: handles.initLoginInfo,
    authRefData,
    authFilteredRoutes,
  }
})
