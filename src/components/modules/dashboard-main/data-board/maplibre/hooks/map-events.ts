import type { Map, MapMouseEvent } from 'maplibre-gl'

export function initMapEvents(mapInstance: Map, emit: any) {
  mapInstance.on('click', (e: MapMouseEvent) => {
    console.log('Map Clicked:', e.lngLat)
    emit('map-click', e.lngLat) // 向 Vue 组件抛出事件
  })

  mapInstance.on('zoomend', () => {
    console.log('Zoom Level:', mapInstance.getZoom())
  })
}
