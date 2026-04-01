<script setup lang="ts">
import { gApi } from '@/api/gapi.ts'
import { createCurdData } from './curd-datas/resource-manage-data.ts'

definePage({
  meta: {
    title: '菜单管理',
  },
})

const {
  curdRefData,
  crudProps,
  paginationRefData,
  searchMenuRightProps,
  curdHandles,
  crudInstanceRef,
} = createCurdData({
  defaultForm: {},
})

const handles = {
  async changeField(row: Record<string, any>, column: any, val: any) {
    const data = {
      ...row,
      [column.property]: val,
    }
    await gApi.apiResourceEditPost(data)
    curdHandles.refreshTable()
  },
}
</script>

<template>
  <div class="nd-wh-full">
    <pro-card header="菜单管理" class="h-[calc(100%-24px)]">
      <pro-crud
        v-bind="crudProps"
        v-model="curdRefData.form"
        v-model:search="curdRefData.searchForm"
        v-model:current-page="paginationRefData.currentPage"
        v-model:page-size="paginationRefData.pageSize"
        ref="crudInstanceRef"
        v-loading="curdRefData.loading"
      >
        <template #action>
          <pro-column-setting v-model="crudProps.columns" />
        </template>
        <template #search-menu-right>
          <SearchMenuRight v-bind="searchMenuRightProps" />
        </template>

        <template #table-isEnable="{ row, column }">
          <el-switch
            :modelValue="row.isEnable"
            @update:modelValue="(val: any) => handles.changeField(row, column, val)"
          />
        </template>
        <template #table-isAdmin="{ row, column }">
          <el-switch
            :modelValue="row[column.property]"
            @update:modelValue="(val: any) => handles.changeField(row, column, val)"
          />
        </template>
      </pro-crud>
    </pro-card>
  </div>
</template>

<style lang="scss" scoped></style>
