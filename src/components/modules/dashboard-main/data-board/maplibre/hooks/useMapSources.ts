// src/components/MapLibre/hooks/useMapSources.ts
import { watch, type Ref } from 'vue'
import { SOURCE_IDS, MAP_SOURCES } from '../constants'
import type { Map, GeoJSONSource } from 'maplibre-gl'

export function useMapSources(map: Ref<Map | null>) {

  // 1. 初始化基础数据源
  watch(map, (instance) => {
    if (!instance) return

    instance.on('load', () => {
      for (const [sourceId, source] of Object.entries(MAP_SOURCES)) {
        instance.addSource(sourceId, source as any)
      }
    })
  })

  // 2. 暴露更新数据的方法（非常重要：数据驱动视图）
  const updateGeoJSON = (sourceId: string, data: any) => {
    if (!map.value) return
    const source = map.value.getSource(sourceId) as GeoJSONSource
    if (source) {
      source.setData(data) // 比 removeSource 再 addSource 性能高得多
    }
  }

  return { updateGeoJSON }
}
