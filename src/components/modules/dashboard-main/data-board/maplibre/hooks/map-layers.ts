import { SOURCE_IDS } from '../constants'
import type {
  Map,
  AddLayerObject,
  SourceSpecification,
  GeoJSONSource,
  GeoJSONFeature,
  MapGeoJSONFeature
} from 'maplibre-gl'
import { isFunction, merge } from 'lodash-es'

export function initMapLayers(mapInstance: Map) {
  const staticLayers = [SOURCE_IDS.TDT_IMG]

  // 添加bg
  mapInstance.addLayer({
    id: 'bg-layer',
    type: 'background',
    paint: {
      'background-color':'#000000' ,
    },
  })
  staticLayers.forEach((sourceId) => {
    mapInstance.addLayer({
      id: `layer-${sourceId}`,
      type: 'raster',
      source: sourceId,
    })
  })
  return new MapLayersTool(mapInstance)
}

export class MapLayersTool {
  constructor(private mapInstance: Map) {}
  async addLayer(option: AddMapLayerOption) {
    const mapInstance = this.mapInstance
    if (isFunction(option.beforeAdd)) {
      await option.beforeAdd(mapInstance)
    }
    const layerConfig = option.layerConfig
    if (!layerConfig.id) throw new Error('layerConfig.id is required')
    const sourceId = `${layerConfig.id}-source`
    if (!mapInstance.getSource(sourceId)) {
      const sourceOptions = merge(
        {
          type: 'geojson',
          data: { type: 'FeatureCollection', features: [] }, // 初始空数据
        },
        option.sourceOptions,
      )
      mapInstance.addSource(sourceId, sourceOptions as NonNullable<SourceSpecification>)
    }
    if (!mapInstance.getLayer(layerConfig.id)) {
      mapInstance.addLayer({
        ...layerConfig,
        source: sourceId,
      } as NonNullable<AddLayerObject>)
    }

    const returnObj = {
      sourceId,
      // 更新数据的方法
      updateData: (data: any) => {
        const source = mapInstance.getSource(sourceId) as GeoJSONSource
        if (source) {
          source.setData(data)
        }
      },
      // 切换显示隐藏
      setVisible: (visible: boolean) => {
        mapInstance.setLayoutProperty(layerConfig.id!, 'visibility', visible ? 'visible' : 'none')
      },
      // 销毁图层和数据源
      remove: () => {
        if (mapInstance.getLayer(layerConfig.id!)) mapInstance.removeLayer(layerConfig.id!)
        if (mapInstance.getSource(sourceId)) mapInstance.removeSource(sourceId)
      },
    }

    const resourceData = await option.getSourceData()
    if (resourceData) {
      returnObj.updateData(resourceData)
    }

    if (isFunction(option.onClick)) {
      mapInstance.on('click', layerConfig.id!, (event: maplibregl.MapLayerMouseEvent) => {
        const features = event.features
        if (features && features.length > 0) {
          const feature = features[0]!;
          option.onClick({
            features,
            feature,
            mapInstance,
            event,
          })
        }
      })
    }

    return returnObj
  }
}

type AddMapLayerOption = {
  beforeAdd?: (maInstance: Map) => Promise<void>
  layerConfig: Partial<AddLayerObject>
  sourceOptions?: Partial<SourceSpecification>
  getSourceData: () => Promise<GeoJSONFeature>
  onClick: (opion:{
    features: MapGeoJSONFeature[]
    feature: MapGeoJSONFeature
    mapInstance: Map
    event: maplibregl.MapMouseEvent
  }) => void
}
