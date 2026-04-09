import { watch, type Ref } from 'vue'
import type { Map } from 'maplibre-gl'

export function useDrawing(map: Ref<Map | null>) {
  const startDraw = (type: 'Polygon' | 'LineString') => {
    if (!map.value) return
    console.log(`开始绘制: ${type}`)
    // 这里可以集成 MapboxDraw 或自定义绘制逻辑
  }

  return { startDraw }
}
