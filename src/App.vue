<script setup lang="ts">
import autofit from 'autofit.js'


autofit.init({
  delay:100
})
</script>

<template>
  <div class="nd-wh-full text-gray-200">
    <router-view />
  </div>
</template>

<style lang="scss" scoped></style>
