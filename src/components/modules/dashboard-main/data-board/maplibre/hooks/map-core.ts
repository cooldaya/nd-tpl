import maplibregl from 'maplibre-gl'
import type { Map, MapOptions } from 'maplibre-gl'

export function initMapCore(containerEl: HTMLElement, options: Partial<MapOptions> = {}) {
  const map = new maplibregl.Map({
    container: containerEl,
    style: { version: 8, sources: {}, layers: [] }, // 初始为空，由 useMapLayers 填充
    center: [106.55073, 29.56471],
    zoom: 12,
    attributionControl: false,
    ...options,
  })

  const observer = new ResizeObserver(() => map?.resize())
  observer.observe(containerEl)

  map.on('remove', () => {
    observer.disconnect()
  })

  return {
    map,
  }
}
