import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueRouter from 'vue-router/vite' // 注意：从 vue-router/vite 导入
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      // routesFolder, extensions, dts 等都可以在这里配
      exclude: ['**/comps/**'],
    }),
    vue(),
    // vueDevTools(),
    // 1. 自动导入组件
    Components({
      dts: true,
      resolvers: [
        // 2. 自动注册图标组件，约定前缀为 i，例如 <i-ep-add-location />
        IconsResolver({
          prefix: 'i',
          enabledCollections: ['ep', 'ant-design'],
        }),
      ],
    }),
    // 3. 图标插件配置
    Icons({
      autoInstall: true, // 自动安装缺少的图标集,import EpUserFilled from '~icons/ep/user-filled' 这种方式导入时
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./', import.meta.url)), // 指向项目根
      '@imgs': fileURLToPath(new URL('./src/assets/imgs', import.meta.url)),
    },
  },
})
