<script setup lang="ts">
import {
  createCrudData,
  createAssignRoles,
  createResetPassword,
} from './crud-datas/user-manage-data.ts'
import EpOperation from '~icons/ep/operation'
import epRefreshLeft from '~icons/ep/refresh-left'

definePage({
  meta: {
    title: '用户管理',
  },
})

const { crudRefData, crudProps, paginationRefData, searchMenuRightProps } = createCrudData({
  defaultForm: {
    isEnable: true,
    canLogin: true,
  },
})

const { arHandles, arRefData, dialogTitle, proFormProps } = createAssignRoles()

const { rpHandles, rpRefData, rpDialogTitle, rpProFormProps } = createResetPassword()
</script>

<template>
  <div class="nd-wh-full">
    {{ arRefData.visible }}
    <pro-card header="用户管理" class="h-[calc(100%-24px)]">
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

        <template #table-cus-opts="{ row }">
          <el-button size="small" @click="arHandles.open(row)" :icon="EpOperation"
            >分配角色</el-button
          >
          <el-button size="small" type="warning" @click="rpHandles.open(row)" :icon="epRefreshLeft"
            >重置密码</el-button
          >
        </template>
      </pro-crud>
    </pro-card>
    <el-dialog v-model="arRefData.visible" :title="dialogTitle" width="500">
      <pro-form
        v-model="arRefData.form"
        v-bind="proFormProps"
        label-width="100px"
        @submit="arHandles.submit"
      />
    </el-dialog>
    <el-dialog v-model="rpRefData.visible" :title="rpDialogTitle" width="500">
      <pro-form
        v-model="rpRefData.form"
        v-bind="rpProFormProps"
        label-width="100px"
        @submit="rpHandles.submit"
      />
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped></style>
