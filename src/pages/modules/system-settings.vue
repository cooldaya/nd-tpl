<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { computed } from 'vue'

import { formatRoutes } from '@/utils/route-tool'
import SettingsPageLayout from '@/layouts/SettingsPageLayout.vue'

definePage({
  name: 'system-settings',
  meta: {
    title: '系统设置',
  },
  redirect: {
    name: 'dept-manage',
  },
})

const authStore = useAuthStore()

const systemSettingsRoutes = computed(() => {
  const rawRoutes =
    authStore.authFilteredRoutes
      .find((item) => item.path === '/modules')
      ?.children?.find((item) => item.name === 'system-settings')?.children || []
  return formatRoutes(rawRoutes, '/modules/system-settings')
})

console.log({ systemSettingsRoutes })
</script>

<template>
  <SettingsPageLayout :routes="systemSettingsRoutes">
    <template #header-left>
      <NavMultiTabs />
    </template>
  </SettingsPageLayout>
</template>

<style lang="scss" scoped></style>
