<script setup lang="ts">
import DashboardLayout from './dashboard/comps/Layout.vue'
definePage({
  name: 'dashboard',
})
</script>

<template>
  <DashboardLayout>
    <div class="nd-wh-full">
      <router-view />
    </div>
  </DashboardLayout>
</template>

<style lang="scss" scoped></style>
