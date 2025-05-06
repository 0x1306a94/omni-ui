# 漏斗图Funnel

## 一、效果总览
<div style="display: flex; justify-content: space-between;">
  <img src="../../image/funnel1.png" height="400" width="200">
 <img src="../../image/funnel2.png" height="400" width="200">
 <img src="../../image/funnel3.png" height="400" width="200">
</div>

## 二、描述

### 使用场景
1. 通常用于表达转化率的场景
2. 需要定制化漏斗图的场景

## 三、构造函数及参数说明

```typescript
OmniFunnelChart({
  @Require config: OmniFunnelChartConfig
})

interface OmniFunnelChartConfig {
    layerHeight: number
    layerCount: number
    defaultLayerColor: Color[]
    layerTextColor: Color
    markerTextColor: Color
    maxLayerWidth: number
    minLayerWidth: number
    axisBackground?: Color | undefined
    layerTitles: string[]
    markerTitles: string[]
    layerMargin?: number
    shape?: OmniFunnelShape
    layerTextFont?: string
    markerTextFont?: string
}
```

### 一级参数

| 参数名    | 参数类型                | 描述      | 是否必填 | 默认值 |
|--------|---------------------|---------|------|-----|
| config | OmniFunnelChartConfig | 漏斗图配置入参 | 是    |     |

### 二级参数

| 参数名               | 参数类型          | 描述          | 是否必填 | 默认值                             |
|-------------------|---------------|-------------|------|---------------------------------|
| layerHeight       | number        | 漏斗每层的高度     | 否    | 40                              |
| layerCount        | number        | 漏斗层数        | 是    |                                 |
| defaultLayerColor | Color[]       | 漏斗每层颜色      | 是    |                                 |
| layerTextColor    | Color         | 漏斗文本颜色      | 否    | 0xffffffff                      |
| markerTextColor   | Color         | 漏斗标记物文本颜色   | 否    | 0xff000000                      |
| maxLayerWidth     | number        | 漏斗最大宽度      | 是    |                                 |
| minLayerWidth     | number        | 漏斗最小宽度      | 是    |                                 |
| axisBackground    | Color         | 坐标轴背景颜色     | 否    | 0xFFEEF0FF                      |
| layerTitles       | string[]      | 漏斗每层文本      | 否    | layer                           |
| markerTitles      | string[]      | 漏斗标记物每层文本   | 否    | marker                          |
| layerMargin       | number        | 漏斗物每层间距     | 否    | 0                               |
| shape             | OmniFunnelShape | 漏斗形状        | 否    | OmniFunnelShape.Both              |
| layerTextFont     | string        | 漏斗每层文本字号    | 否    | 'normal normal 50px sans-serif' |
| markerTextFont    | string        | 漏斗每层标记物文本字号 | 否    | 'normal normal 50px sans-serif' |

## 四、代码演示

### 默认效果

<img src="../../image/funnel1.png" height="400" width="200">

```typescript
{
  config: {
    shape: OmniFunnelShape.Both
  }
}
```

### 左漏斗
<img src="../../image/funnel2.png" height="400" width="200">

```typescript
{
  config: {
    shape: OmniFunnelShape.Left
  }
}
```

### 右漏斗
<img src="../../image/funnel3.png" height="400" width="200">

```typescript
{
  config: {
    shape: OmniFunnelShape.Right
  }
}
```