# @vuemap/amap-jsapi-types

> fork自@amap/amap-jsapi-types，完善缺失的类型，包含常用插件

@vuemap/amap-jsapi-types 是从高德开放平台官网fork的的地图 JSAPI2.0 的 Typescript 声明文件。旨在为开发者提供 Typescript 环境下的类型提示，提升开发体验。

## INSTALL

`npm i -S @vuemap/amap-jsapi-types`

## USAGE

```ts
import "@vuemap/amap-jsapi-types";

const mapOptions: AMap.MapOptions = {
  center :[116.45, 39.92],
  zoom: 10,

};
const map = new AMap.Map('container',mapOptions);
const circle :AMap.CircleMarker = new AMap.CircleMarker({
  center:[116.45, 39.92],
  radius: 30
});

map.add(circle);
```

## 用法

### tsconfig.json配置示例

#### 配置types

```json
{
  "compilerOptions": {
    "types": ["@vuemap/amap-jsapi-types"]
  }
}
```

#### 配置files

```json
{
  "files": ["node_modules/@vuemap/amap-jsapi-types/index.d.ts"]
}

```

### ts文件使用

```ts
/// <reference types="@vuemap/amap-jsapi-types" />
```

### 