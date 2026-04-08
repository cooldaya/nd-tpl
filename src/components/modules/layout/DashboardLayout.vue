<script setup lang="ts"></script>

<template>
  <div class="nd-wh-full bg-[url('@imgs/dashboard/common/p1-2.png')] nd-bg-fill flex flex-col">
    <DashboardHeader class="absolute top-0 w-full z-20" />
    <div class="min-h-0 flex-1">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
