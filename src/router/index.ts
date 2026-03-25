import { createRouter, createWebHistory } from 'vue-router'
import { routes, handleHotUpdate } from 'vue-router/auto-routes'
import NProgress from 'nprogress'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

console.log(routes)

// 这将在运行时更新路由而无需重新加载页面
if (import.meta.hot) {
  handleHotUpdate(router)
}

router.beforeEach((to, from) => {
  NProgress.start() // 开始
})

router.afterEach(() => {
  NProgress.done() // 结束
})

export default router
