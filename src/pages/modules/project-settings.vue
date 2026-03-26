<script setup lang="ts">
import { routes } from 'vue-router/auto-routes'
import type { RouteRecordRaw } from 'vue-router'
import { formatRoutes } from '@/utils/route-tool'
import { projectConfig } from '~/project-config'

definePage({
  name: 'project-settings',
  meta: {
    title: '项目管理',
  },
  redirect: {
    name: 'workbench',
  },
})

const hiddenRouteNames = ['workbench', 'account-settings']

const rawRoutes = (routes
  .find((item) => item.path === '/modules')
  ?.children?.find((item) => item.name === 'project-settings')?.children || []) as RouteRecordRaw[]

const projectSettingsRoutes = formatRoutes(rawRoutes, '/modules/project-settings').filter(
  (item) => {
    return !hiddenRouteNames.includes(item.name as string)
  },
)
</script>

<template>
  <div class="nd-wh-full flex flex-col">
    <div class="h-20 flex items-center justify-between px-5 border-b border-[#a0a2a4]">
      <div class="font-zygb text-2xl">
        <span class="text-[#4b86eb]">{{ projectConfig.title }} </span>
        <span class="text-[#606266]">- {{ projectConfig.subTitle }}</span>
      </div>
      <div>
        <UserPopperAvatar color="#4b86eb" />
      </div>
    </div>
    <pro-layout :routes="projectSettingsRoutes" class="min-h-0 flex-1">
      <template #header-left>
        <NavMultiTabs />
      </template>
    </pro-layout>
  </div>
</template>

<style lang="scss" scoped></style>
