<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(false)
const dataList = ref([10, 20, 30])

const chartOption = ref({
  title: { text: '月度销售额' },
  xAxis: {
    type: 'category',
    data: ['Jan', 'Feb', 'Mar'],
  },
  yAxis: { type: 'value' },
  series: [{ type: 'bar', data: dataList.value }],
})
</script>

<template>
  <div class="h-full w-100 bg-[#1e4c4e]">
    <BaseChart :option="chartOption" :loading="loading" height="300px" />

  </div>
</template>

<style lang="scss" scoped></style>
