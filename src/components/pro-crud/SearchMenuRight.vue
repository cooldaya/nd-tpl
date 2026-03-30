<script setup lang="ts">
import AntDesignExportOutlined from '~icons/ant-design/export-outlined'
import EpArrowUp from '~icons/ep/arrow-up'

defineProps<{
  searchFormExpand: boolean
  toggleSearchFormExpand: () => void
  exportTableData: () => void
}>()
</script>

<template>
  <el-button-group class="ml-3">
    <el-button :icon="AntDesignExportOutlined" @click="exportTableData"> 导出 </el-button>
    <el-button @click="toggleSearchFormExpand()">
      <EpArrowUp class="duration-300" :class="[searchFormExpand ? '' : '-rotate-180']" />
      <span class="ml-1">
        {{ searchFormExpand ? '收起' : '展开' }}
      </span>
    </el-button>
  </el-button-group>
</template>

<style lang="scss" scoped></style>
