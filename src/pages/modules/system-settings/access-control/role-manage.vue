<script setup lang="ts">
import { createCurdData, createAssignPermissions } from './curd-datas/role-manage-data.ts'
import EpOperation from '~icons/ep/operation'

definePage({
  meta: {
    title: '角色管理',
  },
})

const { curdRefData, crudProps, paginationRefData, searchMenuRightProps } = createCurdData()

const { apHandles, apRefData, dialogTitle, proFormProps } = createAssignPermissions()
</script>

<template>
  <div class="nd-wh-full">
    <pro-card header="角色管理" class="h-[calc(100%-24px)]">
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

        <template #table-cus-opts="{ row }">
          <el-button plain :icon="EpOperation" @click="apHandles.open(row)" size="small"
            >分配权限</el-button
          >
        </template>
      </pro-crud>
    </pro-card>
    <el-dialog v-model="apRefData.visible" :title="dialogTitle" width="500">
      <pro-form
        v-model="apRefData.form"
        v-bind="proFormProps"
        label-width="100px"
        @submit="apHandles.submit"
      />
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped></style>
