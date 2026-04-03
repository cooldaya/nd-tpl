<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { computed } from 'vue'
import { formatRoutes } from '@/utils/route-tool'
import SettingsPageLayout from '@/layouts/SettingsPageLayout.vue'

definePage({
  name: 'project-settings',
  meta: {
    title: '项目管理',
  },
  redirect: {
    name: 'work-station',
  },
})

const hiddenRouteNames = ['work-station', 'account-settings']
const authStore = useAuthStore()

const projectSettingsRoutes = computed(() => {
  // 项目设置模块routes
  const rawRoutes =
    authStore.authFilteredRoutes
      .find((item) => item.path === '/modules')
      ?.children?.find((item) => item.name === 'project-settings')?.children || []
  // 格式化route,path需要完整路径
  return formatRoutes(rawRoutes, '/modules/project-settings').filter((item) => {
    return !hiddenRouteNames.includes(item.name as string)
  })
})
</script>

<template>
  <SettingsPageLayout :routes="projectSettingsRoutes">
    <template #header-left>
      <NavMultiTabs />
    </template>
  </SettingsPageLayout>
</template>

<style lang="scss" scoped></style>
