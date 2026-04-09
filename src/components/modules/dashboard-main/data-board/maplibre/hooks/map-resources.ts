import { MAP_SOURCES } from '../constants'
import type { Map, SourceSpecification, CanvasSourceSpecification } from 'maplibre-gl'

export function initMapSources(mapInstance: Map) {
  // 加载静态source
  for (const [sourceId, source] of Object.entries(MAP_SOURCES)) {
    mapInstance.addSource(sourceId, source as SourceSpecification | CanvasSourceSpecification)
  }
}
