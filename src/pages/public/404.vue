<script setup lang="ts">
import { useRoute } from 'vue-router'
definePage({
  name: '404',
})
const route = useRoute()
</script>

<template>
  <div class="not-found">
    <h1>404 Not Found</h1>
    <p>当前路径：{{ route.path }}</p>
    <RouterLink to="/">返回首页</RouterLink>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  padding: 2rem;
}
</style>
