export interface GeoJSONOptions{
  // 要加载的标准GeoJSON对象
  geoJSON: any
  // 指定点要素的绘制方式，缺省时为Marker的默认样式。geojson为当前要素对应的GeoJSON对象，lnglats为对应的线的路径
  getMarker: (geojson: any, lnglat: any) => AMap.Marker
  // 指定线要素的绘制方式，缺省时为Polyline的默认样式。geojson为当前要素对应的GeoJSON对象，lnglats为对应的线的路径
  getPolyline: (geojson: any, lnglat: any) => AMap.Polyline
  // 指定面要素的绘制方式，缺省时为Polygon的默认样式。geojson为当前要素对应的GeoJSON对象，lnglats为对应的线的路径
  getPolygon: (geojson: any, lnglat: any) => AMap.Polygon
}

export class _GeoJSON extends AMap.Overlay{
  constructor(options: GeoJSONOptions);

  /**
   * 加载新的GeoJSON对象，转化为覆盖物，旧的覆盖物将移除
   *
   * @param {any} geo
   */
  importData: (geo: any) => void;

  /**
   * 将当前对象包含的覆盖物转换为GeoJSON对象
   */
  toGeoJSON: () => any;
}