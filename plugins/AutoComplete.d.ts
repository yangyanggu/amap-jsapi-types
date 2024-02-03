export type AutoCompletePoiType = 'all' | 'poi' | 'bus' | 'busline';

/**
 * AutoComplete插件参数
 */
export interface AutoCompleteOptions {
  /**
   * 输入提示时限定POI类型，多个类型用“|”分隔，目前只支持Poi类型编码如“050000” 默认值：所有类别
   */
  type: string;
  /**
   * 输入提示时限定城市。可选值：城市名（中文或中文全拼）、citycode、adcode；默认值：“全国”
   */
  city: string;
  /**
   * 返回的数据类型。可选值：all-返回所有数据类型、poi-返回POI数据类型、bus-返回公交站点数据类型、busline-返回公交线路数据类型目前暂时不支持多种类型
   */
  datatype: AutoCompletePoiType;
  /**
   * 是否强制限制在设置的城市内搜索,默认值为：false，true：强制限制设定城市，false：不强制限制设定城市
   */
  citylimit: boolean;
  /**
   * 可选参数，用来指定一个input输入框，设定之后，在input输入文字将自动生成下拉选择列表。支持传入输入框DOM对象的id值，或直接传入输入框的DOM对象。
   */
  input: string | HTMLElement;

  /**
   * 可选参数，指定一个现有的div的id或者元素，作为展示提示结果的容器，当指定了input的时候有效，缺省的时候将自动创建一个显示结果面板
   */
  output: string | HTMLDivElement;

  /**
   * 默认为true，表示是否在input位于页面较下方的时候自动将输入面板显示在input上方以避免被遮挡
   */
  outPutDirAuto: boolean;

  /**
   * 页面滚动时关闭搜索结果列表，默认 true
   */
  closeResultOnScroll: boolean;

  /**
   * 设置检索语言类型，默认中文 'zh_cn'
   */
  lang: string;
}

export type AutoCompleteEventType =
  | "select"
  | "choose";

/**
 * AutoComplete回调返回值
 */
export interface AutoCompleteSearchCallbackResult {
  // 查询状态说明
  info: string
  // 输入提示条数
  count: number
  // 输入提示列表
  tips: {
    // 名称
    name: string;
    // 所属区域
    district: string;
    // 区域编码
    adcode: string;
  }[]

}

type AutoCompleteCallback = (status: string, result: AutoCompleteSearchCallbackResult) => void

export class _AutoComplete extends AMap.Event<AutoCompleteEventType>{
  constructor(options: AutoCompleteOptions);

  onInPut: any;

  /**
   * 设置提示Poi类型，多个类型用“|”分隔，POI相关类型请在网站“相关下载”处下载，目前只支持Poi类型编码如“050000” 默认值：所有类别
   *
   * @param {AutoCompletePoiType} type 提示Poi类型
   */
  setType: (type: AutoCompletePoiType) => void;

  /**
   * 设置城市
   * @param {string} city 城市
   */
  setCity:  (city: string) => void;

  /**
   * 设置是否强制限制城市
   *
   * @param {boolean} cityLimit 是否强制限制城市
   */
  setCityLimit: (cityLimit: boolean) => void;

  /**
   * 根据输入关键字提示匹配信息，支持中文、拼音
   *
   * @param {string} keyword 关键字
   * @param {AutoCompleteCallback} cb 搜索结果回调
   */
  search: (keyword: string, cb: AutoCompleteCallback) => void;

  output?: () => void;
  autoSearch(): void;
}
