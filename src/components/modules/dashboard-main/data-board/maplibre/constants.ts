import {getTdtUrls} from './utils/url-sets'

export const TDT_TK = '6a084bc2c03d0c80b8927dc8c5e47ca8'


// 定义 Source ID 常量，防止字符串写错
export const SOURCE_IDS = {
  TDT_IMG: 'tdt-img',
  TDT_VEC: 'tdt-vec',
  TDT_CVA: 'tdt-cva',
  // BUS_LINES: 'bus-lines-data', // 业务数据示例
  // AREA_MASK: 'area-mask-data'
}

// 定义 Source 的具体配置
export const MAP_SOURCES = {
  [SOURCE_IDS.TDT_IMG]: {
    type: 'raster',
    tiles: getTdtUrls('img_w', TDT_TK),
    tileSize: 256,
    minzoom: 1,
    maxzoom: 18,
  },
  [SOURCE_IDS.TDT_VEC]: {
    type: 'raster',
    tiles: getTdtUrls('vec_w', TDT_TK),
    tileSize: 256,
    minzoom: 1,
    maxzoom: 18,
  },
  [SOURCE_IDS.TDT_CVA]: {
    type: 'raster',
    tiles: getTdtUrls('cva_w', TDT_TK),
    tileSize: 256,
    minzoom: 1,
    maxzoom: 18,
  },
}
