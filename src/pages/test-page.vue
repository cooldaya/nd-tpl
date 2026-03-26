<script setup lang="ts">
import { reactive } from 'vue'
import { defineFormColumns } from 'element-pro-components'
import AeProFom from '@/components/modules/AeProFom.vue'

const columns = defineFormColumns([
  {
    label: '姓名',
    prop: 'name',
    component: 'el-input',
    rules: [{ required: true, message: '请输入姓名' }],
  },
  {
    label: '年龄',
    prop: 'age',
    component: 'el-input-number',
  },
])

// 模拟 API
const mockApi = {
  add: async (data: any) => {
    console.log('Add API called with:', data)
    return { code: 200, data: { id: 1, ...data } }
  },
  edit: async (data: any) => {
    console.log('Edit API called with:', data)
    return { code: 200, data }
  },
  detail: async (params: any) => {
    console.log('Detail API called with:', params)
    return { code: 200, data: { name: '张三', age: 25 } }
  },
}
</script>

<template>
  <div class="p-4">
    <h3>新增模式</h3>
    <AeProFom
      operation-type="add"
      :columns="columns"
      :api-config="{ add: mockApi.add }"
    />

    <el-divider />

    <h3>编辑模式</h3>
    <AeProFom
      operation-type="edit"
      :columns="columns"
      :params="{ id: 123 }"
      :api-config="{ edit: mockApi.edit, detail: mockApi.detail }"
    />

    <el-divider />

    <h3>查看模式</h3>
    <AeProFom
      operation-type="view"
      :columns="columns"
      :params="{ id: 123 }"
      :api-config="{ detail: mockApi.detail }"
    />
  </div>
</template>
