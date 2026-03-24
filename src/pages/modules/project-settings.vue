<script setup lang="ts">
import { routes } from 'vue-router/auto-routes'
import type { RouteRecordRaw } from 'vue-router'
import { formatRoutes } from '@/utils/route-tool'

definePage({
  name: 'project-settings',
  meta: {
    title: '项目管理',
  },
})

const rawRoutes = (routes
  .find((item) => item.path === '/modules')
  ?.children?.find((item) => item.name === 'project-settings')?.children || []) as RouteRecordRaw[]

const projectSettingsRoutes = formatRoutes(rawRoutes, '/modules/project-settings')
</script>

<template>
  <pro-layout class="docs-layout" :routes="projectSettingsRoutes" />
</template>

<style lang="scss" scoped></style>
