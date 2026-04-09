import { onMounted,onBeforeUnmount } from 'vue'
import 'maplibre-gl/dist/maplibre-gl.css'
import { initMapCore } from './map-core'
import { initMapSources } from './map-resources'
import { initMapLayers ,MapLayersTool} from './map-layers'
import { initMapControls } from './map-controls'
import { initMapEvents } from './map-events'


import type { Ref } from 'vue'
import type { Map } from 'maplibre-gl'


export function useLibreMap(
  mapElRef: Ref<HTMLElement | null>,
  emit: (event: string, ...args: any[]) => void,
  callback: (libreMapTool:LibreMapTool) => void
) {
  let mapInstance: Map
  let libreMapTool: LibreMapTool


  const handleMapLoad = async () => {
    initMapSources(mapInstance)
   const mapLayersTool =  initMapLayers(mapInstance)
    initMapControls(mapInstance)
    initMapEvents(mapInstance, emit)

    libreMapTool = {
      mapLayersTool,
    }
    callback(libreMapTool)
  }

  onMounted(() => {
    if (!mapElRef.value) return;
    const containerEl = mapElRef.value
    const { map } = initMapCore(containerEl, {
      center: [108.11845, 29.99276898],
      zoom: 9,
    })
    mapInstance = map
    mapInstance.on('load', handleMapLoad)
  })


  onBeforeUnmount(() => {
    mapInstance?.remove()
  })
}

type LibreMapTool = {
  mapLayersTool: MapLayersTool
}
