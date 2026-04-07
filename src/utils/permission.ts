// src/utils/permission.ts
import type { RouteRecordRaw } from 'vue-router'
import { AUTHROTEPATH } from '@/utils/consts'

/**
 * 核心原理：递归过滤路由树
 * @param routes 扫描出的原始路由表
 * @param userRoles 用户当前拥有的角色
 */
export function filterAsyncRoutes(
  routes: RouteRecordRaw[],
  userResources: Set<string>,
): RouteRecordRaw[] {
  const res: RouteRecordRaw[] = []
  routes.forEach((route) => {
    const tmp = { ...route }
    if (hasPermission(userResources, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, userResources)
      }
      res.push(tmp)
    }
  })

  return res
}

function hasPermission(userResources: Set<string>, route: RouteRecordRaw) {
  if (route.path === AUTHROTEPATH) return true
  if (route?.meta?.white) {
    return true
  }
  if (route.name) {
    return userResources.has(route.name as string)
  }
  if (route.path) {
    return userResources.has(route.path)
  }

  return false
}
