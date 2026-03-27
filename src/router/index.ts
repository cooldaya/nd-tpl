import { createRouter, createWebHistory } from 'vue-router'
import { routes, handleHotUpdate } from 'vue-router/auto-routes'
import NProgress from 'nprogress'
import { securityDataManager } from '@/utils/security-data-manager'
import { gApi } from '@/api/gapi'
import { useAuthStore } from '@/stores/auth'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// 这将在运行时更新路由而无需重新加载页面
if (import.meta.hot) {
  handleHotUpdate(router)
}

router.beforeEach(async (to) => {
  NProgress.start() // 开始
  const toLoingPage = () => ({ name: 'login' })

  if (to.fullPath.startsWith('/public')) return
  const authStore = useAuthStore()
  if (authStore.authRefData.isLogIn) return
  const securityData = await securityDataManager.initSecurityData()
  // 检查以前是否登录过，就会有token，初始化
  if (!securityData) {
    return toLoingPage()
  }
  // 有token信息，就通过token信息获取获取用户信息
  try {
    const res = await gApi.apiAuthCheckloginPost()
    if (!res.data) return toLoingPage()

    // 初始化登录信息
    await authStore.initLoginInfo({
      user: res.data,
      ...securityData,
    })
    return true
  } catch (error) {
    // 获取用户信息失败，清除token信息
    console.log(error)
    securityDataManager.clear()
    return toLoingPage()
  }
})

router.afterEach(() => {
  NProgress.done() // 结束
})

export default router
