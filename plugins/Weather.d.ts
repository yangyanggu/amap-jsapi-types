/**
 * CitySearch插件getLocalCity方法返回的正确数据
 */
export interface WeatherLiveResult {
  /**
   * 请求是否正确
   */
  info: string;
  /**
   * 省份名称
   */
  province: string;
  /**
   * 城市名称
   */
  city: string;
  /**
   * 区域编码
   */
  adcode: string;
  /**
   * 天气现象，详见天气现象列表
   */
  weather: string;
  /**
   * 实时气温，单位：摄氏度
   */
  temperature: number;
  /**
   * 风向，风向编码对应描述
   */
  windDirection: string;
  /**
   * 风力，风力编码对应风力级别，单位：级
   */
  windPower: string;
  /**
   * 空气湿度（百分比）
   */
  humidity: string;
  /**
   * 数据发布的时间
   */
  reportTime: string;
}

export interface WeatherForecastItemResult {
  /**
   * 日期，格式为“年-月-日”
   */
  date: string;
  /**
   * 星期
   */
  week: string;
  /**
   * 白天天气现象，详见天气现象列表
   */
  dayWeather: string;
  /**
   * 夜间天气现象，详见天气现象列表
   */
  nightWeather: string;
  /**
   * 白天温度
   */
  dayTemp: number;
  /**
   * 白天温度
   */
  nightTemp: number;
  /**
   * 白天风向
   */
  dayWindDir: string;
  /**
   * 白天风力
   */
  dayWindPower: string;
  /**
   * 夜间风力
   */
  nightWindPower: string;
}

/**
 * 查询四天预报天气，包括查询当天天气信息
 */
export interface WeatherForecastResult{
  /**
   * 请求是否正确
   */
  info: string;
  /**
   * 省份名称
   */
  province: string;
  /**
   * 城市名称
   */
  city: string;
  /**
   * 区域编码
   */
  adcode: string;
  /**
   * 天气预报数组，包括当天至第三天的预报数据
   */
  forecast: WeatherForecastItemResult[];
}

export type getLiveCallbackType = (err: {info: string} | undefined, info: WeatherLiveResult) => void

export type getForecastCallbackType = (err: {info: string} | undefined, info: WeatherForecastResult) => void

export class _Weather{
  constructor();

  /**
   * 查询实时天气信息。
   *
   * @param {string} city 城市名称/区域编码（如：“杭州市”/“330100”）
   * @param {getLiveCallbackType} cb 回调函数
   */
  getLive: (city: string, cb: getLiveCallbackType) => void;
  /**
   * 查询四天预报天气，包括查询当天天气信息
   * @param {string} ip IP
   * @param {getForecastCallbackType} cb 回调函数
   */
  getForecast:  (city: string, cb: getForecastCallbackType) => void;
}
