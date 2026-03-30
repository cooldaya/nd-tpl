<script setup lang="ts">
import { createCurdData } from './curd-datas/resource-manage-data.ts'

definePage({
  meta: {
    title: '菜单管理',
  },
})

const { curdRefData, crudProps, paginationRefData, searchMenuRightProps } = createCurdData({
  defaultForm: {
    isEnable: true,
    routeNames: [],
  },
})
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
