<script setup lang="ts">
import { projectConfig } from '~/project-config'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <div class="nd-wh-full flex flex-col">
    <div class="h-20 flex items-center justify-between px-5 border-b border-[#a0a2a4]">
      <div class="font-zygb text-2xl">
        <span class="text-(--el-color-primary)">{{ projectConfig.title }} </span>
        <span class="text-[#606266]">- {{ projectConfig.subTitle }}</span>
      </div>
      <div>
        <UserPopperAvatar color="var(--el-color-primary)" />
      </div>
    </div>
    <pro-layout v-bind="$attrs" class="min-h-0 flex-1">
      <!-- 1. 动态透传所有外部传入的插槽（排除掉我们自己在下面重写的 header-left） -->
      <template v-for="(_, name) in $slots" #[name]="slotProps" :key="name">
        <slot :name="name" v-bind="slotProps || {}"></slot>
      </template>
    </pro-layout>
  </div>
</template>

<style lang="scss" scoped></style>
