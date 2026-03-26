<script setup lang="ts">
definePage({
  name: 'account-settings',
  meta: {
    title: '账号设置',
  },
  redirect: {
    name: 'account-info',
  },
})
</script>

<template>
  <router-view />
</template>

<style lang="scss" scoped></style>
