<template>
  <div class="w-full h-full" ref="mapElRef"></div>
</template>

<script setup lang="ts">
import { useTemplateRef, onMounted, onBeforeUnmount } from 'vue'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { getTdtUrls } from './utils/url-sets'
import { TDT_TK } from './constants'

import type { Map } from 'maplibre-gl'

const mapElRef = useTemplateRef<HTMLElement>('mapElRef')
let manInstance: Map | null = null
const handles = {
  initMap() {
    if (!mapElRef.value) return

    // 预先生成多域名 URL 数组
    const vecUrls = getTdtUrls('img_w', TDT_TK) // 矢量底图
    const cvaUrls = getTdtUrls('cva_w', TDT_TK) // 矢量注记
    // 初始化地图
    manInstance = new maplibregl.Map({
      container: mapElRef.value, // 也可以直接传 ID
      // --- 修改重点 ---
      center: [106.55073, 29.56471], // 重庆解放碑附近经纬度
      zoom: 12, // 缩放层级，12可以看到城市全貌
      pitch: 45, // 高仰角，能更好地看山城的立体感
      bearing: -10, // 地图旋转角度，稍微转一下更有动感
      // ----------------
      style: {
        version: 8,
        sources: {
          // 天地图矢量底图
          'tdt-vec': {
            type: 'raster',
            tiles: vecUrls,
            tileSize: 256,
            minzoom: 1,
            maxzoom: 18,
          },
          // 天地图注记层（路名、地名）
          'tdt-cva': {
            type: 'raster',
            tiles: cvaUrls,
            tileSize: 256,
            minzoom: 1,
            maxzoom: 18,
          },
        },
        layers: [
          {
            id: 'background',
            type: 'background',
            paint: {
              'background-color': '#000000', // 设置背景颜色
            },
          },
          {
            id: 'tdt-vec-layer',
            type: 'raster',
            source: 'tdt-vec',
          },
          {
            id: 'tdt-cva-layer',
            type: 'raster',
            source: 'tdt-cva',
          },
        ],
        sky: {},
      },
      maxZoom: 18,
      maxPitch: 85,
    })
    manInstance.addControl(
      new maplibregl.NavigationControl({
        visualizePitch: true,
        showZoom: true,
        showCompass: true,
      }),
    )
    const observer = new ResizeObserver(() => manInstance?.resize())
    observer.observe(mapElRef.value!)
  },
  destroyMap() {
    if (!manInstance) return
    manInstance.remove()
    manInstance = null
  },
}
onMounted(() => {
  handles.initMap()
})

onBeforeUnmount(() => {
  handles.destroyMap()
})
</script>

<style scoped></style>
