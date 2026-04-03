<script setup lang="ts">
import { useRouter } from 'vue-router'
definePage({
  meta: {
    white: true,
  },
})

const router = useRouter()
router.replace({
  name: 'dashboard-main',
})
</script>

<template>
  <!-- 这里可以放一个全局 Loading 动画 -->
  <div class="loading-container">系统初始化中...</div>
</template>

<style lang="scss" scoped></style>
