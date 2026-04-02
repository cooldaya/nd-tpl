<script setup lang="ts">
import { createCrudData } from './crud-datas/operation-log-data.ts'

definePage({
  meta: {
    title: '操作日志',
  },
})

const { crudRefData, crudProps, paginationRefData, searchMenuRightProps } = createCrudData({
  defaultForm: {},
})
</script>

<template>
  <div class="nd-wh-full">
    <pro-card header="操作日志" class="h-[calc(100%-24px)]">
      <pro-crud
        v-bind="crudProps"
        v-model="crudRefData.form"
        v-model:search="crudRefData.searchForm"
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
