<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
let isLogin = localStorage.getItem('isLogIn')

router.replace({
  name: isLogin ? 'dashboard' : 'login',
})
</script>

<template>
  <div>index page</div>
</template>

<style lang="scss" scoped></style>
