import { AUTHROTEPATH, WILDCARD_PATH } from '@/utils/consts'
import { routes } from 'vue-router/auto-routes'

function genRoutes() {
  const wildcardRoute = routes.find((route) => route.path === WILDCARD_PATH)!
  const needAuthRoutes = routes.filter((route) => route.path === AUTHROTEPATH)
  const publicRoutes = routes.filter((route) => ![AUTHROTEPATH, WILDCARD_PATH].includes(route.path))
  return { needAuthRoutes, publicRoutes, wildcardRoute }
}

const generatedRoutes = genRoutes()
export { generatedRoutes }
