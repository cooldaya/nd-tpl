<script setup lang="ts">
definePage({
  name: 'monitor-video',
  meta: {
    title: '监控视频',
  },
})
</script>

<template>
  <div>
    <h3>监控视频</h3>
    <div>
      <!--  <el-button v-has="'monitor-video:delete'" type="danger">删除-测试</el-button> -->
      <!--  <el-button v-if="pHasPerm('monitor-video:delete')" type="danger">删除-测试</el-button> -->
      <el-button p-has="monitor-video:delete" type="danger">删除-测试</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
