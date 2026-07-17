import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueRouter from 'vue-router/vite' // 注意：从 vue-router/vite 导入
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import vitePluginCustomOutDir from './plugins/vite-plugin-custom-outdir' // 引入插件
import { transformPermission } from './plugins/vite-plugin-permission' // 引入权限转换插件
import { visualizer } from 'rollup-plugin-visualizer'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'
import { projectConfig } from './project-config'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  server: {
    port: 19842,
    hmr: true,
    host: '0.0.0.0',
    proxy: {
      '/netcore/api': {
        target: projectConfig.backEndUrl,
        changeOrigin: true,
      },
    },
  },
  plugins: [
    VueRouter({
      // routesFolder, extensions, dts 等都可以在这里配
      exclude: ['**/comps/**', '**/components/**'],
    }),
    transformPermission(),
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
    vitePluginCustomOutDir(),
    visualizer({
      open: true, // 打包完成后自动打开浏览器看报告
      filename: 'stats.html',
      gzipSize: true,
      brotliSize: true,
    }),
    chunkSplitPlugin({
      strategy: 'default', // 保持核心依赖聚合
      customSplitting: {
        'lib-maplibre': [/maplibre-gl/],
        'lib-xlsx': [/xlsx/],
        'lib-element-plus': [/element-plus/],
        'lib-hls': [/hls.js/],
        'lib-jsencrypt': [/jsencrypt/],
        'lib-axios': [/axios/],
        'lib-localforage': [/localforage/],
        'lib-echarts': [/echarts/],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./', import.meta.url)), // 指向项目根
      '@imgs': fileURLToPath(new URL('./src/assets/imgs', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/styles/element-variables.scss" as *;`,
      },
    },
  },
})
