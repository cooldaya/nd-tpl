import maplibregl, { type Map } from 'maplibre-gl'

export function initMapControls(mapInstance: Map) {
  // 添加导航控件
  mapInstance.addControl(
    new maplibregl.NavigationControl({
      visualizePitch: true,
      showZoom: true,
    }),
    'bottom-right',
  )

  // 添加比例尺
  // instance.addControl(new maplibregl.ScaleControl({}), 'bottom-left')
}
