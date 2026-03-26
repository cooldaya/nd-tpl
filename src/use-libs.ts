import { createPinia } from 'pinia'
import 'nprogress/nprogress.css'
import 'element-pro-components/lib/styles/index'
import ElementPlus from 'element-plus'
import ElementPro from 'element-pro-components'
import router from './router'
import type { App } from 'vue'

export function useLibs(app: App) {
  app.use(createPinia())
  app.use(router)
  app.use(ElementPlus)
  app.use(ElementPro)
}
