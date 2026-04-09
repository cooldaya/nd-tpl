<template>
  <div class="relative nd-wh-full">
    <div class="nd-wh-full" ref="mapElRef"></div>

    <!-- 业务 UI 按钮：调用插件功能 -->
    <!-- <div class="absolute top-4 left-4 z-10">
      <button @click="startDraw('Polygon')" class="bg-white p-2 shadow">
        开启绘图功能
      </button>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useMapCore } from './hooks/useMapCore'
import { useMapSources } from './hooks/useMapSources'
import { useMapLayers } from './hooks/useMapLayers'
import { useMapControls } from './hooks/useMapControls'
import { useMapEvents } from './hooks/useMapEvents'
import { useDrawing } from './plugins/useDrawing'

const emit = defineEmits(['map-click'])
const mapElRef = ref<HTMLElement | null>(null)

// 1. 初始化核心（获取 map 实例）
const { map } = useMapCore(mapElRef)

// 2. 挂载数据源
useMapSources(map)

// 3. 挂载底图和图层逻辑
useMapLayers(map)

// 4. 挂载 UI 控件
useMapControls(map)

// 5. 挂载事件监听
useMapEvents(map, emit)

// 6. 挂载功能插件
const { startDraw } = useDrawing(map)

// 如果需要，暴露实例给外部父组件
defineExpose({ mapInstance: map })
</script>
