<script setup lang="ts">
import { reactive } from 'vue'
import type { AeProFormProps } from '@/components/modules/types'
import EpEdit from '~icons/ep/edit'
import { userColumns } from './columns'
import { gApi } from '@/api/gapi'

import type { UserForm } from '@/api/generated/data-contracts'

definePage({
  name: 'account-info',
  meta: {
    title: '个人信息',
  },
})

const aeProFormProps = reactive<AeProFormProps<UserForm>>({
  operationType: 'view',
  proFormProps: {
    columns: userColumns,
    menu: {
      submitText: '更新',
      reset: false,
    },
  },
  params: {},
  apiConfig: {
    detail: async () => {
      const res = await gApi.apiUserShowSelfPost()
      console.log({ res })
      return res.data as UserForm
    },
    edit: async (data) => {
      const res = await gApi.apiUserEditPost(data)
      console.log({ res })
      return res
    },
  },
})

const handles = {
  toggleEdit() {
    aeProFormProps.operationType = aeProFormProps.operationType === 'view' ? 'edit' : 'view'
  },
}
</script>

<template>
  <div class="nd-wh-full">
    <pro-card>
      <template #header>
        <div class="flex justify-between">
          <div>个人信息</div>
          <el-button
            :icon="EpEdit"
            plain
            :color="
              aeProFormProps.operationType === 'view'
                ? 'var(--el-color-info)'
                : 'var(--el-color-success)'
            "
            @click="handles.toggleEdit"
          />
        </div>
      </template>
      <div class="w-3/4">
        <AeProForm v-bind="aeProFormProps" class="menu-right" />
      </div>
    </pro-card>
  </div>
</template>

<style lang="scss" scoped></style>
