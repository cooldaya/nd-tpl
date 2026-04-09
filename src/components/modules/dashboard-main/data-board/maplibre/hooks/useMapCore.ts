import { shallowRef, onMounted, onBeforeUnmount, type Ref } from 'vue'
import maplibregl, { type Map, type MapOptions } from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

export function useMapCore(containerRef: Ref<HTMLElement | null>, options: Partial<MapOptions> = {}) {
  const map = shallowRef<Map | null>(null)

  onMounted(() => {
    if (!containerRef.value) return

    map.value = new maplibregl.Map({
      container: containerRef.value,
      style: { version: 8, sources: {}, layers: [] }, // 初始为空，由 useMapLayers 填充
      center: [106.55073, 29.56471],
      zoom: 12,
      attributionControl: false,
      ...options
    })

    const observer = new ResizeObserver(() => map.value?.resize())
    observer.observe(containerRef.value)

    onBeforeUnmount(() => {
      observer.disconnect()
      map.value?.remove()
    })
  })

  return { map }
}
