<script setup lang="ts">
  import { createCurdData } from './curd-datas/dept-manage-data.ts'
  definePage({
    meta: {
      title: '部门管理',
    },
  })

  const { curdRefData, crudProps, paginationRefData } = createCurdData()
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
      />
    </pro-card>
  </div>
</template>

<style lang="scss" scoped></style>
