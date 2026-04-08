/**
 * 获取天地图多域名瓦片 URL 列表
 * @param type 图层类型 (vec_w, cva_w, img_w, cia_w 等)
 * @param tk 天地图 Token
 */
export function getTdtUrls(type: string, tk: string) {
  // 天地图提供 t0 - t7 共 8 个子域名
  return [0, 1, 2, 3, 4, 5, 6, 7].map(
    (i) => `https://t${i}.tianditu.gov.cn/DataServer?T=${type}&x={x}&y={y}&l={z}&tk=${tk}`
  );
};
