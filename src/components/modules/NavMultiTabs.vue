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
import { useNavTabsStore, type TabItem } from '@/stores/use-nav-tabs'
import type { TabsPaneContext } from 'element-plus'

const props = defineProps<{
  initTabs?: TabItem[]
}>()

// 初始化 Store
const tabsStore = useNavTabsStore(props.initTabs)
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
<style lang="scss" scoped>
/* components/MultiTabs.scss */
.multi-tabs-container {
  width: 100%;
  position: relative;
  background-color: var(--el-bg-color); // 使用背景色变量
  border-bottom: 1px solid var(--el-border-color-light);
  padding: 0 10px;

  /* 核心 Tabs 样式调整 */
  .tabs-view {
    margin-bottom: -1px;

    :deep(.el-tabs__header) {
      border-bottom: none;
      margin: 0;
    }

    :deep(.el-tabs__nav) {
      border-radius: 4px 4px 0 0;
      border: none;
    }

    :deep(.el-tabs__item) {
      height: 40px;
      line-height: 40px;
      border-left: none;
      transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      user-select: none;
      color: var(--el-text-color-regular);
      border-bottom: 1px solid transparent;
      border: solid 1px var(--el-color-primary-light-9);

      &:hover {
        color: var(--el-color-primary);
        background-color: var(--el-color-primary-light-9);
      }

      &.is-active {
        background-color: var(--el-color-primary-light-9);
        color: var(--el-color-primary);
        border-bottom-color: var(--el-color-primary); // 给激活态一个明显的底部横线感
      }
    }
  }

  /* 右键上下文菜单 (Context Menu) */
  .tabs-context-menu {
    position: fixed;
    z-index: 3000;
    background-color: var(--el-bg-color-overlay); // 使用弹出层背景变量
    border: 1px solid var(--el-border-color-light);
    box-shadow: var(--el-box-shadow-light);
    border-radius: var(--el-border-radius-base);
    min-width: 120px;
    padding: 5px 0;
    margin: 0;
    list-style: none;

    li {
      padding: 0 15px;
      height: 32px;
      line-height: 32px;
      font-size: 14px;
      color: var(--el-text-color-regular);
      cursor: pointer;
      display: flex;
      align-items: center;
      transition: all 0.2s;

      .el-icon {
        margin-right: 8px;
        font-size: 16px;
      }

      &:hover {
        background-color: var(--el-color-primary-light-9);
        color: var(--el-color-primary);
      }
    }
  }
}

/* 动画部分 */
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.2s,
    transform 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
