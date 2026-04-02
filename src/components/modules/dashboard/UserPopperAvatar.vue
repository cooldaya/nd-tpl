<script setup lang="ts">
import EpUserFilled from '~icons/ep/user-filled'
import EpUser from '~icons/ep/user'
import EpSetUp from '~icons/ep/set-up'
import EpSetting from '~icons/ep/setting'
import EpSwitchButton from '~icons/ep/switch-button'
import EpDataAnalysis from '~icons/ep/data-analysis'
import EpKey from '~icons/ep/key'
import { securityDataManager } from '@/utils/security-data-manager'
import { useRouter } from 'vue-router'
import { computed, markRaw } from 'vue'

const router = useRouter()

defineProps({
  color: {
    type: String,
    default: '',
  },
})

const MENU_CONFIG = [
  {
    label: '个人中心',
    icon: EpUser,
    toRouteName: 'account-info',
  },
  {
    label: '修改密码',
    icon: EpKey,
    toRouteName: 'change-password',
  },
  {
    label: '数据面板',
    icon: EpDataAnalysis,
    toRouteName: 'dashboard-main',
  },
  {
    label: '项目配置',
    icon: EpSetUp,
    toRouteName: 'project-settings',
  },
  {
    label: '系统配置',
    icon: EpSetting,
    toRouteName: 'system-settings',
  },
  {
    label: '退出登录',
    icon: EpSwitchButton,
    toRouteName: 'login',
    cb: () => {
      securityDataManager.clear()
    },
  },
].map((item) => ({ ...item, icon: markRaw(item.icon) }))
const popoverMenus = computed(() =>
  MENU_CONFIG.filter((menuItem) => {
    if (!menuItem.toRouteName) return true
    if (router.currentRoute.value.matched.some((item) => item.name === menuItem.toRouteName)) {
      // 如果当前路由匹配到菜单项，则不显示该菜单项
      return false
    }

    return true
  }),
)
const handles = {
  handleMenuClick: (menuItem: (typeof popoverMenus.value)[number]) => {
    menuItem.cb?.()
    if (menuItem.toRouteName) {
      router.push({ name: menuItem.toRouteName })
    }
  },
}
</script>

<template>
  <el-popover placement="bottom-end" trigger="click" effect="dark" popper-class="!px-0 !py-1">
    <template #reference>
      <EpUserFilled class="nd-clickable" :color="color" />
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
</template>

<style lang="scss" scoped></style>
