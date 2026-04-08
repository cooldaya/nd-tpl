<script setup lang="ts">
definePage({
  name: 'data-board',
  meta: {
    title: '一张图',
  },
})
</script>

<template>
  <div class="nd-wh-full">
    <div class="absolute inset-0 z-10">
      <!-- 地图模块 -->
      <LibreMap />
    </div>
    <div class="absolute inset-0 z-20 pointer-events-none">
      <!-- 数据看板模块 -->
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
