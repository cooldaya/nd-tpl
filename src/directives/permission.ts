// directives/permission.ts
import type { App, DirectiveBinding } from 'vue'
import { useAuthStore } from '@/stores/auth'

export const permissionDirective = {
  install(app: App) {
    const authStore = useAuthStore()
    // 注册全局方法，template 中可以直接调用
    app.config.globalProperties.pHasPerm = (code: string) => {
      // 逻辑：判断 code 是否在用户权限列表中
      return authStore.hasPerm(code)
    }
    app.directive('has', {
      mounted(el: HTMLElement, binding: DirectiveBinding) {
        const { value } = binding

        if (value) {
          // 如果用户没有该权限，则直接移除 DOM 元素
          if (!authStore.hasPerm(value)) {
            el.parentNode?.removeChild(el)
          }
        } else {
          throw new Error(`need permission code! Like v-has="101" or v-has="'user:add'"`)
        }
      },
    })
  },
}
