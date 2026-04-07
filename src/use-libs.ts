import './assets/styles/base.scss'
import './assets/styles/main.css'
import { createPinia } from 'pinia'
import 'nprogress/nprogress.css'
import 'element-pro-components/lib/styles/index'
import ElementPlus from 'element-plus'
import ElementPro from 'element-pro-components'
import './assets/styles/element.scss' // 这个放置位置，会影响element-pro-components的样式覆盖
import router from './router'
import { permissionDirective } from '@/directives/permission'
import type { App } from 'vue'

export function useLibs(app: App) {
  app.use(createPinia())
  app.use(router)
  app.use(ElementPlus)
  app.use(ElementPro)
  app.use(permissionDirective)
}
