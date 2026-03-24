
import type { RouteRecordRaw } from 'vue-router'
const formatRoutes = (routesList: RouteRecordRaw[], parentPath: string): RouteRecordRaw[] => {
  return routesList.map((route) => {
    const currentPath = route.path.startsWith('/')
      ? route.path
      : `${parentPath}/${route.path}`.replace(/\/+/g, '/')
    return {
      ...route,
      path: currentPath,
      children: route.children ? formatRoutes(route.children, currentPath) : undefined,
    } as RouteRecordRaw
  })
}



export {
  formatRoutes
}
