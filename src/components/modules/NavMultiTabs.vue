<template>
  <div class="multi-tabs-container">
    <el-tabs
      v-model="activePath"
      type="card"
      @tab-click="handleTabClick"
      @tab-remove="handleTabRemove"
      class="tabs-view"
    >
      <el-tab-pane
        v-for="item in tabsStore.tabsList"
        :key="item.path"
        :label="item.title"
        :name="item.path"
        :closable="item.closable"
      />
    </el-tabs>

    <transition name="fade">
      <ul
        v-show="menuVisible"
        class="tabs-context-menu"
        :style="{ left: menuLeft + 'px', top: menuTop + 'px' }"
      >
        <li @click="tabsStore.closeTabsByContext('right', selectedTabPath)">
          <i-ep-right />关闭右侧
        </li>
        <li @click="tabsStore.closeTabsByContext('left', selectedTabPath)">
          <i-ep-right class="rotate-180" />关闭左侧
        </li>
        <li @click="tabsStore.closeTabsByContext('other', selectedTabPath)">
          <i-ep-switch />关闭其他
        </li>
        <li @click="tabsStore.closeTabsByContext('all', selectedTabPath)">
          <i-ep-close />关闭全部
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useNavTabsStore } from '@/stores/use-nav-tabs'
import type { TabsPaneContext } from 'element-plus'

// 初始化 Store
const tabsStore = useNavTabsStore()
const route = useRoute()
const router = useRouter()

// 1. 核心视图同步
const activePath = ref(route.path)

// 监听路由变化，自动添加/激活页签
watch(
  () => route.path,
  () => {
    tabsStore.addTab(route)
    activePath.value = route.path
  },
  { immediate: true },
) // immediate 确保页面刷新时，初始路由也被加入

// 2. 页签基础点击操作
const handleTabClick = (pane: TabsPaneContext) => {
  if (pane.props.name !== route.path) {
    router.push(pane.props.name as string) // 切换路由
  }
}

// 3. 点击页签自带的 'x' 关闭图标
const handleTabRemove = (path: string) => {
  tabsStore.closeSingleTab(path)
}

// --- 难点：右键上下文菜单实现 ---

const menuVisible = ref(false) // 菜单可见性
const menuLeft = ref(0) // 菜单 X 坐标
const menuTop = ref(0) // 菜单 Y 坐标
const selectedTabPath = ref('') // 右键点击的那个页签的路径

// 关闭菜单的逻辑 (点击别处或按 Esc)
const closeMenu = () => {
  menuVisible.value = false
}

// 监听并在挂载时绑定全局点击关闭事件
watch(menuVisible, (val) => {
  if (val) {
    document.body.addEventListener('click', closeMenu)
    document.body.addEventListener('contextmenu', closeMenu, true) // 防止出现浏览器自带右键
  } else {
    document.body.removeEventListener('click', closeMenu)
    document.body.removeEventListener('contextmenu', closeMenu, true)
  }
})

// 监听右键事件 (通过 DOM 委托，监听整个容器)
onMounted(() => {
  const tabsEl = document.querySelector('.tabs-view')
  if (tabsEl) {
    tabsEl.addEventListener('contextmenu', (e: Event) => {
      // 关键：识别点击的是否是真正的页签 (.el-tabs__item)
      const mouseEvent = e as MouseEvent
      // 2. 将 e.target 断言为 HTMLElement
      const target = e.target as HTMLElement
      const tabTarget = target.closest('.el-tabs__item')
      if (tabTarget) {
        e.preventDefault() // 阻止系统自带右键菜单

        // 获取该页签在 element-plus 中的ID (例如 'tab-/dashboard')
        const tabId = tabTarget.getAttribute('id')
        if (tabId) {
          // 还原为路径 (即 el-tab-pane 的 name 属性)
          selectedTabPath.value = tabId.replace('tab-', '')

          // 定位菜单：基于浏览器窗口的坐标 (clientX/Y)
          menuVisible.value = true
          menuLeft.value = mouseEvent.clientX + 5 // 增加 5px 的偏移量，更好看
          menuTop.value = mouseEvent.clientY + 5
        }
      }
    })
  }
})

onBeforeUnmount(() => {
  // 项目中通常在布局组件挂载，不需要手动解绑，但写上是个好习惯
  document.body.removeEventListener('click', closeMenu)
})
</script>

<style lang="css">
/* components/MultiTabs.css */
.multi-tabs-container {
  width: 100%;
  position: relative;
  background-color: #fff;
  border-bottom: 1px solid #dcdfe6;
  padding: 0 10px; /* 给左右两边留点呼吸空间 */
}

/* 核心 Tabs 样式调整 (使其符合 card 类型的专业后台感) */
.tabs-view {
  margin-bottom: -1px; /* 让 card 底边与容器边框对齐 */
}

.tabs-view :deep(.el-tabs__header) {
  border-bottom: none; /* 移除自带底边 */
  margin: 0;
}

.tabs-view :deep(.el-tabs__item) {
  height: 40px;
  line-height: 40px;
  border-left: none; /* 移除左侧边框 */
  transition: background-color 0.2s;
  user-select: none; /* 防止频繁右键导致文字被选中 */
}

.tabs-view :deep(.el-tabs__item.is-active) {
  background-color: #ecf5ff; /* 激活时给个淡蓝色背景 */
  border-bottom-color: #fff;
}

/* 终极难点：右键上下文菜单 (Context Menu) 样式 */
.tabs-context-menu {
  position: fixed; /* 必须用 fixed 定位，它参考的是浏览器窗口 */
  z-index: 3000; /* 确保它高于 Element Plus 的 Dialog 和 Popover */
  background-color: #fff;
  border: 1px solid #dcdfe6;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  min-width: 120px;
  padding: 5px 0;
  margin: 0;
  list-style: none;
}

.tabs-context-menu li {
  padding: 0 15px;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  color: #606266;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.2s;
}

/* 图标与文字对齐调整 */
.tabs-context-menu li .el-icon {
  margin-right: 8px;
  font-size: 16px;
}

.tabs-context-menu li:hover {
  background-color: #ecf5ff;
  color: #409eff;
}

/* 菜单出现时的过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.2s,
    transform 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px); /* 增加一点点上浮效果 */
}
</style>
