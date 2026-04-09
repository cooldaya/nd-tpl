import { watch, type Ref } from 'vue'
import maplibregl, { type Map } from 'maplibre-gl'

export function useMapControls(map: Ref<Map | null>) {
  watch(map, (instance) => {
    if (!instance) return

    // 添加导航控件
    instance.addControl(new maplibregl.NavigationControl({
      visualizePitch: true,
      showZoom: true
    }), 'top-right')

    // 添加比例尺
    instance.addControl(new maplibregl.ScaleControl({}), 'bottom-left')
  })
}
