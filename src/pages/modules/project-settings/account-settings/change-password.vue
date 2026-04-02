<script setup lang="ts">
import { createCpData } from './crud-datas/change-password-data'

definePage({
  name: 'change-password',
  meta: {
    title: '修改密码',
  },
})

const { cpRefData, proFormProps, cpHandles } = createCpData()
</script>

<template>
  <div class="nd-wh-full">
    <pro-card :header="$route.meta.title">
      <pro-form v-model="cpRefData.form" v-bind="proFormProps" @submit="cpHandles.submit" />
    </pro-card>
  </div>
</template>

<style lang="scss" scoped></style>
