/**
 * AMap.Geocoder 参数
 */
export interface GeocoderOptions {
  /**
   * 城市，地理编码时，设置地址描述所在城市
   * 可选值：城市名（中文或中文全拼）、citycode、adcode
   * 默认值：“全国”
   */
  city?: string;
  /**
   * 逆地理编码时，以给定坐标为中心点，单位：米
   * 取值范围：0 - 3000
   * 默认值：1000
   */
  radius?: number;
  /**
   * 设置语言类型
   * 可选值：zh_cn（中文）、en(英文)
   * 默认值：zh_cn（中文
   */
  lang?: string;
  /**
   * 是否批量查询
   * batch 设置为 false 时，只返回第一条记录
   */
  batch?: boolean;
  /**
   * 逆地理编码时，返回信息的详略
   * 默认值：base，返回基本地址信息
   * 取值为：all，返回地址信息及附近poi、道路、道路交叉口等信息
   */
  extensions?: string;
}

/**
 * Geocoder插件getLocation方法返回的正确数据
 */
export interface GeocodeResult {
  status: number
  count: number
  info?: string
  geocodes: GeocodeInfoItem[]
}

export interface GeocodeInfoItem {
  /**
   * 国家
   */
  country: string
  /**
   * 地址所在的省份名
   */
  province: string
  /**
   * 地址所在的城市名
   */
  city: string
  /**
   * 城市编码
   */
  citycode: string
  /**
   * 地址所在的区
   */
  district: string
  /**
   * 街道
   */
  street: string
  /**
   * 门牌
   */
  number: string
  /**
   * 区域编码
   */
  adcode: string
  /**
   * 坐标点
   */
  location: string
  /**
   * 匹配级别
   */
  level: string
}

/**
 * 地理逆解析结果
 */
export interface ReGeocodeResult {
  // 当status为complete时代表解析正常
  status: string;
  // 单点逆解析时结果
  regeocode?: ReGeocodeInfoItem
  // 批量逆解析时结果
  regeocodes?: ReGeocodeInfoItem[]
}

export interface ReGeocodeInfoItem {
  formatted_address: string
  // 地址元素列表
  addressComponent: ReGeocodeAddressComponent
  // poi 信息列表, extensions 为 all 时返回
  pois?: ReGeocodePoi[]
  // 道路信息列表, extensions 为 all 时返回
  roads?: ReGeocodeRoad[]
  // 道路交叉口列表, extensions 为 all 时返回
  roadinters?: ReGeocodeRoadinter[]
  // aoi 信息列表, extensions 为 all 时返回
  aois?: ReGeocodeAoi[]
}

export interface ReGeocodePoi{
  id: string
  name: string
  type: string
  tel: string
  direction: string
  distance: string
  location: string
  address: string
  poiweight: string
  businessarea: string
}

/**
 * 道路信息
 */
export interface ReGeocodeRoad {
  // 道路 id
  id: string
  // 道路名称
  name: string
  // 道路到请求坐标的距离, 单位：米
  direction: string
  // 方位, 输入点和此路的相对方位
  distance: string
  // 坐标点
  location: string
}

/**
 * 道路交叉口
 */
export interface ReGeocodeRoadinter {
  // 方位, 输入点相对路口的方位
  direction: string
  // 交叉路口到请求坐标的距离, 单位：米
  distance: string
  // 路口经纬度
  location: string
  // 第一条道路 id
  first_id: string
  // 第一条道路名称
  first_name: string
  // 第二条道路 id
  second_id: string
  // 第二条道路名称
  second_name: string
}

/**
 * aoi 信息
 */
export interface ReGeocodeAoi {
  // 所属 aoi 的 id
  id: string
  // 所属 aoi 名称
  name: string
  // 所属 aoi 所在区域编码
  adcode: string
  // 所属 aoi 中心点坐标
  location: string
  // 所属 aoi 点面积, 单位：平方米
  area: string
  // 输入经纬度是否在 aoi 面之中,  0，代表在 aoi 内,其余整数代表距离 AOI 的距离
  distance: string
  // 所属 aoi 类型
  type: string
}

/**
 * 地址元素
 */
export interface ReGeocodeAddressComponent {
  /**
   * 区域编码
   */
  adcode: string;
  /**
   * 省份名称
   */
  province: string;
  /**
   * 城市名称
   */
  city: string;
  /**
   * 城市code
   */
  citycode: string;
  /**
   * 区县名称
   */
  district: string;
  /**
   * 镇或街道名称
   */
  township: string;
  /**
   * 路名
   */
  street: string;
  /**
   * 门牌号
   */
  streetNumber: string;
  [key: string]: any
}

export type getLocationCallback = (status: string, info: string | GeocodeResult) => void

export type getAddressCallback = (status: string, info: string | ReGeocodeResult) => void

export type GeocoderEventType =
  | "complete"
  | "error";

export class _Geocoder extends AMap.Event<GeocoderEventType>{
  constructor(options?: GeocoderOptions);

  /**
   * 将地址信息转化为高德经纬度坐标信息
   * @param keyword 关键字
   * @param cb 回调函数
   */
  getLocation: (keyword: string, cb: getLocationCallback) => void;

  /**
   * 地理编码时，设置地址描述所在城市
   * @param city
   */
  setCity: (city: string) => void;

  /**
   * 将高德经纬度坐标信息转化为结构化的地址信息
   * @param location  ((LngLat | Array<LngLat>)) 给定坐标
   * @param cb  回调函数
   */
  getAddress: (location: AMap.LngLatLike | AMap.LngLatLike[], cb: getAddressCallback) => void;
}
