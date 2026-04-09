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
import { technicsData } from '../test/technics-data'
import { useLibreMap } from './hooks/use-libremap'
import maplibregl from 'maplibre-gl'
import type { GeoJSONFeature } from 'maplibre-gl'
// src/utils/mapHelper.ts
const convertToGeoJSON = (data: any[]) => {
  return {
    type: 'FeatureCollection',
    features: data.map((item) => ({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [Number(item.longitude), Number(item.latitude)],
      },
      properties: { ...item }, // 保留所有业务属性供弹窗或样式使用
    })),
  }
}
const emit = defineEmits(['map-click'])
const mapElRef = ref<HTMLElement | null>(null)
useLibreMap(mapElRef, emit, (libreMapTool) => {
  libreMapTool.mapLayersTool.addLayer({
    // 添加图标
    async beforeAdd(mapInstance) {
      const imags = {
        dianzhan_zaixian:
          'http://localhost:5177/view/static/image/map/marker/icon_dianzhan_zaixian.png',
        dianzhan_lixian:
          'http://localhost:5177/view/static/image/map/marker/icon_dianzhan_lixian.png',
        dianzhan_yujing:
          'http://localhost:5177/view/static/image/map/marker/icon_dianzhan_yujing.png',
      }
      const promises = Object.entries(imags).map(([key, url]) =>
        mapInstance.loadImage(url).then((response) => mapInstance.addImage(key, response.data)),
      )
      await Promise.all(promises)
    },
    // 图层样式配置
    layerConfig: {
      id: 'test',
      type: 'symbol',
      layout: {
        // 动态判断：根据 monitorState 字段显示不同图片
        'icon-image': [
          'match',
          ['get', 'monitorState'],
          '在线',
          'dianzhan_zaixian',
          '离线',
          'dianzhan_lixian',
          '预警',
          'dianzhan_yujing',
          'icon-default', // 都不匹配时的默认值
        ],
        'icon-size': 0.8,
        'text-field': ['get', 'name'],
        'text-offset': [0, 1.2],
        'text-anchor': 'top',
      },
      paint: {
        // 3. 根据 monitorState (在线/离线) 改变文字颜色
        'text-color': [
          'match',
          ['get', 'monitorState'],
          '在线',
          '#2ecc71',
          '离线',
          '#e74c3c',
          '预警',
          '#f39c12',
          '#95a5a6',
        ],
      },
    },
    // 异步请求数据
    async getSourceData() {
      return convertToGeoJSON(technicsData) as unknown as GeoJSONFeature
    },
    // 点击事件
    onClick({ features, feature, mapInstance }) {
      const {
        monitorState,
        name,
        longitude,
        latitude,
      } = feature.properties
      // 2. 创建并弹出 Popup
      new maplibregl.Popup({ offset: 25 }) // offset 防止遮挡图标
        .setLngLat([longitude, latitude])
        .setHTML(
          `
          <div style="padding: 10px;">
            <h3 style="margin: 0 0 5px 0;">${name}</h3>
            <p>地址: ${monitorState}</p>

            <button onclick="alert('查看详情')">跳转</button>
          </div>
        `,
        )
        .addTo(mapInstance)
    },
  })
})
</script>
