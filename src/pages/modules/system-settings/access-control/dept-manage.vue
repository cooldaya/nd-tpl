<script setup lang="ts">
import { createCurdData } from './curd-datas/dept-manage-data.ts'

definePage({
  meta: {
    title: '部门管理',
  },
  name: 'dept-manage',
})

const { curdRefData, crudProps, paginationRefData, searchMenuRightProps, crudInstanceRef } =
  createCurdData({
    defaultForm: {
      isEnable: true,
    },
  })
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
        ref="crudInstanceRef"
      >
        <template #action>
          <pro-column-setting v-model="crudProps.columns" />
        </template>
        <template #search-menu-right>
          <SearchMenuRight v-bind="searchMenuRightProps" />
        </template>
      </pro-crud>
    </pro-card>
  </div>
</template>

<style lang="scss" scoped></style>
