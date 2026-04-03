<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import EpArrowLeft from '~icons/ep/arrow-left'
import EpHomeFilled from '~icons/ep/home-filled'

const router = useRouter()
const route = useRoute()

// 逻辑：返回上一页
const goBack = () => {
  router.back()
}

// 逻辑：返回首页
const goHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
    <div class="max-w-md w-full text-center">
      <!-- 视觉主体：大数字与动画 -->
      <div class="relative">
        <h1 class="text-9xl font-black text-gray-200 select-none tracking-tighter">404</h1>
        <p
          class="absolute inset-0 flex items-center justify-center text-2xl font-bold text-primary italic transform -rotate-2"
        >
          Oops! 页面走丢了
        </p>
      </div>

      <!-- 路径反馈：使用 Element Plus 的 Tag 展示 -->
      <div class="mt-8 space-y-4">
        <h2 class="text-2xl font-semibold text-gray-800">抱歉，找不到您要查看的页面</h2>
        <p class="text-gray-500 text-sm leading-relaxed">
          您尝试访问的路径为
          <el-tag type="info" size="small" effect="plain" class="mx-1 font-mono">
            {{ route.path }}
          </el-tag>
          可能由于 URL 输入错误或页面已迁移。
        </p>
      </div>

      <!-- 操作区域：语义化解耦 -->
      <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <el-button
          type="primary"
          size="large"
          round
          :icon="EpHomeFilled"
          @click="goHome"
          class="w-full sm:w-auto shadow-lg hover:transform hover:-translate-y-0.5 transition-all"
        >
          返回首页
        </el-button>

        <el-button size="large" round :icon="EpArrowLeft" @click="goBack" class="w-full sm:w-auto">
          返回上一页
        </el-button>
      </div>

      <!-- 辅助链接 -->
      <div class="mt-12">
        <p class="text-gray-400 text-xs">
          如果您认为这是服务器错误，请联系
          <a href="#" class="underline hover:text-primary">技术支持</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 定义主题色，建议在 tailwind.config.js 中配置，此处通过 CSS 变量快速实现 */
:deep(.text-primary) {
  color: var(--el-color-primary);
}

/* 简单的浮动动画 */
h1 {
  animation: floating 3s ease-in-out infinite;
}

@keyframes floating {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
