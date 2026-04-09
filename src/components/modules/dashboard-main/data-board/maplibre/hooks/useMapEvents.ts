import { watch, type Ref } from 'vue'
import type { Map, MapMouseEvent } from 'maplibre-gl'

export function useMapEvents(map: Ref<Map | null>, emit: any) {
  watch(map, (instance) => {
    if (!instance) return

    instance.on('click', (e: MapMouseEvent) => {
      console.log('Map Clicked:', e.lngLat)
      emit('map-click', e.lngLat) // 向 Vue 组件抛出事件
    })

    instance.on('zoomend', () => {
      console.log('Zoom Level:', instance.getZoom())
    })
  })
}
