// store/useTabsStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { RouteLocationNormalized } from 'vue-router'
import router from '@/router' // 引入你的路由实例

// 定义页签项接口
interface TabItem {
  title: string
  path: string
  name: string // 必须与 Vue 组件定义的 name 一致，用于 keep-alive
  closable: boolean
}

const workStationName = 'work-station'

const _useNavTabsStore = defineStore('tabs', () => {
  // 1. 初始化页签 (通常包含一个不关闭的工作台)
  const tabsList = ref<TabItem[]>([
    {
      title: '工作台',
      path: `/modules/project-settings/${workStationName}`,
      name: workStationName,
      closable: false,
    },
  ])

  // 2. 缓存的组件名称列表 (用于 keep-alive)
  const keepAliveIncludes = ref<string[]>([workStationName])

  // 辅助函数：根据路径获取页签索引
  const getTabIndex = (path: string) => tabsList.value.findIndex((item) => item.path === path)

  // --- 核心操作函数 ---

  // A. 添加/激活页签
  const addTab = (route: RouteLocationNormalized) => {
    // 过滤掉不需要显示的路由（如登录页、404）
    if (route.meta.hideInTab || !route.name) return

    const index = getTabIndex(route.path)
    if (index === -1) {
      // 如果页签不存在，则添加
      const componentName = (route.name as string).replace(/^\//, '') // 处理组件名规范
      tabsList.value.push({
        title: (route.meta.title as string) || '新页签',
        path: route.path,
        name: componentName,
        closable: true,
      })
      // 同时添加到缓存列表
      if (!keepAliveIncludes.value.includes(componentName)) {
        keepAliveIncludes.value.push(componentName)
      }
    }
  }

  // B. 关闭单个页签
  const closeSingleTab = (path: string) => {
    const index = getTabIndex(path)
    const isActive = router.currentRoute.value.path === path
    const tabName = tabsList.value[index]?.name

    // 1. 从页签列表中移除
    tabsList.value.splice(index, 1)

    // 2. 从 keep-alive 缓存中移除
    keepAliveIncludes.value = keepAliveIncludes.value.filter((name) => name !== tabName)

    // 3. 如果关闭的是当前激活的页签，则跳转到最后一个页签
    if (isActive) {
      const lastTab = tabsList.value[tabsList.value.length - 1]
      router.push(lastTab?.path || { name: workStationName })
    }
  }

  // C. 批量关闭逻辑 (对应图片功能)
  const closeTabsByContext = (type: 'left' | 'right' | 'other' | 'all', currentPath: string) => {
    const index = getTabIndex(currentPath)
    if (index === -1) return

    // 定义核心逻辑
    const filterTabs = (shouldKeep: (t: TabItem, i: number) => boolean) => {
      // 需要保留的页签
      const reservedTabs = tabsList.value.filter((t, i) => !t.closable || shouldKeep(t, i))

      // 更新页签列表
      tabsList.value = reservedTabs

      // 更新缓存列表 (只保留保留页签的 name)
      keepAliveIncludes.value = reservedTabs.map((t) => t.name)

      // 如果当前路由不在保留列表中，则跳转到保留列表的最后一个
      const isCurrentExist = reservedTabs.some((t) => t.path === router.currentRoute.value.path)
      if (!isCurrentExist) {
        const lastTab = reservedTabs[reservedTabs.length - 1]
        router.push(lastTab?.path || { name: workStationName })
      }
    }

    if (type === 'all') filterTabs(() => false) // 关闭全部
    if (type === 'other') filterTabs((t, i) => i === index) // 关闭其他
    if (type === 'left') filterTabs((t, i) => i >= index) // 关闭左侧 (保留自己和右侧)
    if (type === 'right') filterTabs((t, i) => i <= index) // 关闭右侧 (保留自己和左侧)
  }

  const initTabs = (tabs: TabItem[]) => {
    if (tabs && tabs.length > 0) {
      tabsList.value = tabs
      keepAliveIncludes.value = tabs.map((t) => t.name)
    }
  }

  return { tabsList, keepAliveIncludes, initTabs, addTab, closeSingleTab, closeTabsByContext }
})

const useNavTabsStore = (initTabs?: TabItem[]) => {
  const store = _useNavTabsStore()
  if (initTabs && initTabs.length > 0) {
    store.initTabs(initTabs)
  }
  return store
}

export { useNavTabsStore }
export type { TabItem }
