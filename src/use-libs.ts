import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import ElementPro from 'element-pro-components'
import 'element-pro-components/lib/styles/index'
import router from './router'

import type { App } from 'vue'

export function useLibs(app: App) {
  app.use(createPinia())
  app.use(router)
  app.use(ElementPlus)
  app.use(ElementPro)
}
