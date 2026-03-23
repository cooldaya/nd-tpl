<script setup lang="ts">
import PageHeader from './PageHeader.vue'
</script>

<template>
  <div class="nd-wh-full bg-[url('@imgs/dashboard/common/p1-2.png')] nd-bg-fill">
    <PageHeader />
    <div class="min-h-0 flex-1">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
