import { createRouter, createWebHistory } from 'vue-router'
import { handleHotUpdate } from 'vue-router/auto-routes'
import { useGuards } from '@/router/guards'
import { generatedRoutes } from '@/router/gen-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: generatedRoutes.publicRoutes,
})

useGuards(router)
//这将在运行时更新路由而无需重新加载页面
if (import.meta.hot) {
  handleHotUpdate(router)
}

export default router
