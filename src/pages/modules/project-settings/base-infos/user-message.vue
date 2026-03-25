<script setup lang="ts">
import { createCurdData } from './curd-datas/user-message-data.ts'
definePage({
  meta: {
    title: '用户消息管理',
  },
})

const { curdRefData, curdStaticData, curdHandles, paginationRefData } = createCurdData()
</script>

<template>
  <div class="nd-wh-full">
    <pro-card header="用户消息管理" class="h-[calc(100%-24px)]">
      <pro-crud
        v-model="curdRefData.form"
        v-model:search="curdRefData.searchForm"
        :columns="curdStaticData.columns"
        :menu="curdStaticData.menu"
        :data="curdRefData.tableData"
        :detail="curdRefData.detail"
        :before-open="curdHandles.beforeOpen"
        @search="curdHandles.search"
        @submit="curdHandles.submit"
        @delete="curdHandles.deleteRow"
        :search-props="curdStaticData.searchProps"
        show-overflow-tooltip
      />

      <el-pagination
        size="small"
        background
        layout="prev, pager, next, sizes, total"
        class="mt-5 flex justify-end"
        v-model:current-page="paginationRefData.current"
        v-model:page-size="paginationRefData.pageSize"
        :total="paginationRefData.total"
        @change="curdHandles.paginationChange"
      />
    </pro-card>
  </div>
</template>

<style lang="scss" scoped></style>
