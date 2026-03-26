<script setup lang="ts">
import { useDateFormat, useNow } from '@vueuse/core'
import EpUserFilled from '~icons/ep/user-filled'
import EpUser from '~icons/ep/user'
import EpSetUp from '~icons/ep/set-up'
import EpSetting from '~icons/ep/setting'
import EpSwitchButton from '~icons/ep/switch-button'
import { useRouter } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { securityDataManager } from '@/utils/security-data-manager'
const currentNow = useNow()
const dateFormatted = useDateFormat(currentNow, 'YYYY-MM-DD dddd')
const timeFormatted = useDateFormat(currentNow, 'HH:mm:ss')

const router = useRouter()
const popoverMenus = [
  {
    label: '个人中心',
    icon: EpUser,
    cb: () => router.push('/user/profile'),
  },
  {
    label: '项目配置',
    icon: EpSetUp,
    cb: () =>
      router.push({
        name: 'project-settings',
      }),
  },
  {
    label: '系统配置',
    icon: EpSetting,
    cb: () =>
      router.push({
        name: 'system-settings',
      }),
  },
  {
    label: '退出登录',
    icon: EpSwitchButton,
    cb: () => {
      securityDataManager.clear()
      router.push({ name: 'login' })
    },
  },
]

const handles = {
  handleMenuClick: (menuItem: (typeof popoverMenus)[number]) => {
    menuItem.cb()
  },
}

const dashboardRoutes =
  routes
    .find((item) => item.path === '/modules')
    ?.children?.find((item) => item.name === 'dashboard-main')?.children || []
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
      <div class="flex-1 flex items-center justify-end">
        <el-popover placement="bottom-end" trigger="click" effect="dark" popper-class="!px-0 !py-1">
          <template #reference>
            <EpUserFilled />
          </template>
          <div>
            <div
              v-for="menu in popoverMenus"
              :key="menu.label"
              class="flex items-center gap-2 nd-clickable hover:bg-gray-900 duration-200 px-3 py-1.5"
              @click="handles.handleMenuClick(menu)"
            >
              <component :is="menu.icon" class="w-4 h-4" />
              <span>{{ menu.label }}</span>
            </div>
          </div>
        </el-popover>
      </div>
    </div>
    <div class="mx-auto w-fit mt-5.5 flex gap-x-">
      <router-link
        v-for="routeItem in dashboardRoutes"
        :to="routeItem"
        :key="routeItem.name"
        v-slot="{ isActive }"
      >
        <el-button :type="isActive ? 'primary' : undefined">
          {{ routeItem.meta?.title || routeItem.name }}
        </el-button>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
