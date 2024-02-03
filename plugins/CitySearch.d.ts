/**
 * CitySearch插件getLocalCity方法返回的正确数据
 */
export interface CitySearchLocalCityResult {
  /**
   * 区域编码
   */
  adcode: string;
  /**
   * 城市的矩形边界
   */
  bounds: any;
  /**
   * 城市名称
   */
  city: string;
  /**
   * 请求是否正确
   */
  info: string;
  /**
   * 省份名称
   */
  province: string;
  /**
   * 矩形边界经纬度
   */
  rectangle: string;
}

export type CitySearchCallbackType = (status: string, info: CitySearchLocalCityResult) => void

export class _CitySearch{
  constructor();

  /**
   * 自动获取用户IP，回调返回当前用户所在城市 当status为complete时，result为CitySearchResult； 当status为error时，result为错误信息info； 当status为no_data时，代表检索返回0结果
   *
   * @param {CitySearchCallbackType} cb 回调函数
   */
  getLocalCity: (cb: CitySearchCallbackType) => void;
  /**
   * 根据输入IP地址返回对应城市信息，status同上
   * @param {string} ip IP
   * @param {CitySearchCallbackType} cb 回调函数
   */
  getCityByIp:  (ip: string, cb: CitySearchCallbackType) => void;
}
