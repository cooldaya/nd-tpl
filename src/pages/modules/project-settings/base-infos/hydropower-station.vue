<script setup lang="ts">
import { createCrudData1 } from './data.ts'
definePage({
  meta: {
    title: '水电站信息管理',
  },
})

const { crudRefData, crudStaticData, crudHandles, paginationRefData } = createCrudData1()
</script>

<template>
  <div class="nd-wh-full">
    <pro-card header="水电站信息管理" class="h-[calc(100%-24px)]">
      <pro-crud
        v-model="crudRefData.form"
        v-model:search="crudRefData.searchForm"
        :columns="crudStaticData.columns"
        :menu="crudStaticData.menu"
        :data="crudRefData.tableData"
        :detail="crudRefData.detail"
        :before-open="crudHandles.beforeOpen"
        @search="crudHandles.search"
        @submit="crudHandles.submit"
        @delete="crudHandles.deleteRow"
        :search-props="crudStaticData.searchProps"
      />

      <el-pagination
        size="small"
        background
        layout="prev, pager, next, sizes, total"
        class="mt-5 flex justify-end"
        v-model:current-page="paginationRefData.current"
        v-model:page-size="paginationRefData.pageSize"
        :total="paginationRefData.total"
        @change="crudHandles.paginationChange"
      />
    </pro-card>
  </div>
</template>

<style lang="scss" scoped></style>
