<template>
  <div class="base-chart-container" :style="{ width, height }">
    <!-- 数据为空时的展示 -->
    <div v-if="isEmpty" class="chart-empty">
      <slot name="empty">暂无数据</slot>
    </div>

    <!-- 真正图表 -->
    <v-chart
      v-else
      ref="chartRef"
      :option="computedOption"
      :loading="loading"
      :autoresize="autoresize"
      :theme="theme"
      v-bind="$attrs"
    />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import VChart from 'vue-echarts';
import '@/plugins/echarts'; // 引入按需加载配置

const props = defineProps({
  option: {
    type: Object,
    required: true,
  },
  width: {
    type: String,
    default: '100%',
  },
  height: {
    type: String,
    default: '100%',
  },
  loading: {
    type: Boolean,
    default: false,
  },
  isEmpty: {
    type: Boolean,
    default: false,
  },
  theme: {
    type: String,
    default: '',
  },
  autoresize: {
    type: Boolean,
    default: true,
  },
});

const chartRef = ref(null);

// 默认配置项（统一风格）
const defaultBaseOption = {
  grid: {
    top: '15%',
    right: '5%',
    bottom: '10%',
    left: '10%',
    containLabel: true,
  },
  // 这里可以配置全局默认配色
  color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de'],
};

// 合并配置项
const computedOption = computed(() => {
  // 深度合并（可根据需求使用 lodash/merge）
  return {
    ...defaultBaseOption,
    ...props.option,
  };
});

// 暴露 ECharts 实例给父组件使用
defineExpose({
  chartInstance: computed(() => chartRef.value?.chart),
});
</script>

<style scoped>
.base-chart-container {
  position: relative;
}
.chart-empty {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #999;
  font-size: 14px;
}
/* 必须设置 v-chart 高度 */
.echarts {
  width: 100%;
  height: 100%;
}
</style>
