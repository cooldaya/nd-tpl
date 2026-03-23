<script setup lang="ts">
import { useDateFormat, useNow } from '@vueuse/core'

const currentNow = useNow()
const dateFormatted = useDateFormat(currentNow, 'YYYY-MM-DD dddd')
const timeFormatted = useDateFormat(currentNow, 'HH:mm:ss')
</script>

<template>
  <div class="w-full h-25.25 bg-[url('@imgs/dashboard/common/p1-1.png')] nd-bg-fill">
    <div class="h-12 outline-1 px-5 flex items-center justify-between basis-0">
      <div class="relative flex items-center h-full text-gray-200 flex-1">
        <span>天气模块</span>
        <span>{{ dateFormatted }}</span>
        <span>{{ timeFormatted }}</span>
      </div>
      <div class="flex-1 flex items-center justify-center pt-3">
        <span class="text-[30px] font-zygb nd-text-lg bg-linear-to-b from-[#d5fdf4] to-[#d5fdf4]"
          >石柱-小水电站生态流量监测系统</span
        >
      </div>
      <div class="flex-1 flex items-center justify-end">1</div>
    </div>
    <div>1</div>
  </div>
</template>

<style lang="scss" scoped></style>
