<script setup lang="ts">
definePage({
  name: 'dashboard-main',
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
