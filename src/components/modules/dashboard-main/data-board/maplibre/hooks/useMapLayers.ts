import { watch, type Ref } from 'vue'
import { SOURCE_IDS } from '../constants'
import type { Map } from 'maplibre-gl'



export function useMapLayers(map: Ref<Map | null>) {
  // 当地图实例准备好后，初始化底图
  watch(map, (instance) => {
    if (!instance) return

    instance.on('load', () => {
      // 2. 添加图层
      instance.addLayer({
        id: `layer-${SOURCE_IDS.TDT_IMG}`,
        type: 'raster',
        source: SOURCE_IDS.TDT_IMG
      })
    })
  })

  // 暴露给外部的方法：动态添加业务图层
  const addBusinessLayer = (id: string, data: any) => {
    // 逻辑实现...
  }

  return { addBusinessLayer }
}
