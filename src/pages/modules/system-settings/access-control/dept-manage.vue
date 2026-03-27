<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { createCurdData } from './curd-datas/dept-manage-data.ts'
import { ProCrud } from 'element-pro-components'
definePage({
  meta: {
    title: '部门管理',
  },
})

const crudElRef = useTemplateRef<InstanceType<typeof ProCrud>>('crudElRef')

const { curdRefData, crudProps, paginationRefData } = createCurdData(crudElRef)
</script>

<template>
  <div class="nd-wh-full">
    <pro-card header="部门管理" class="h-[calc(100%-24px)]">
      <pro-crud
        v-bind="crudProps"
        v-model="curdRefData.form"
        v-model:search="curdRefData.searchForm"
        v-model:current-page="paginationRefData.currentPage"
        v-model:page-size="paginationRefData.pageSize"
        ref="crudElRef"
      >
        <!-- 在菜单右侧添加自定义操作按钮 -->
        <template #talbe-menu-right="{ row }">
          <el-button type="success" link>读取</el-button>
        </template>
      </pro-crud>
    </pro-card>
  </div>
</template>

<style lang="scss" scoped></style>
