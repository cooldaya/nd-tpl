// vite.config.ts 引入所需
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 权限转换插件函数
export const transformPermission = () => {
  return {
    name: 'vite-plugin-transform-permission',
    enforce: 'pre' as const, // 必须在 vue 插件之前执行，处理原始模板
    transform(code: string, id: string) {
      // 只处理 .vue 文件
      if (!id.endsWith('.vue')) return
      
      // 正则解析：匹配 p-has="xxx" 
      // 替换为 v-if="hasPerm('xxx')"
      // [^"]+ 表示匹配非引号的任意字符
      const transformedCode = code.replace(
        /p-has="([^"]+)"/g, 
        (match, p1) => `v-if="pHasPerm('${p1}')"`
      )

      return {
        code: transformedCode,
        map: null // 简单替换不需要 sourcemap
      }
    }
  }
}
