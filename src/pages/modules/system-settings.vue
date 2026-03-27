<script setup lang="ts">
import { routes } from 'vue-router/auto-routes'
import type { RouteRecordRaw } from 'vue-router'
import { formatRoutes } from '@/utils/route-tool'
import SettingsPageLayout from '@/layouts/SettingsPageLayout.vue'

definePage({
  name: 'system-settings',
  meta: {
    title: '系统设置',
  },
})

const rawRoutes = (routes
  .find((item) => item.path === '/modules')
  ?.children?.find((item) => item.name === 'system-settings')?.children || []) as RouteRecordRaw[]

const systemSettingsRoutes = formatRoutes(rawRoutes, '/modules/system-settings')
</script>

<template>
  <SettingsPageLayout :routes="systemSettingsRoutes">
    <template #header-left>
      <NavMultiTabs />
    </template>
  </SettingsPageLayout>
</template>

<style lang="scss" scoped></style>
