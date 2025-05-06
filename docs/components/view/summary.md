# 图片概览Summary

## 一、效果总览

<img src="../../image/summary1.png" height="400" width="200">

## 二、描述

图片概览页面，支持跳转Gallery页面(需用户自己实现数据传递逻辑)

## 三、构造函数及参数说明

```typescript
OmniSummary({
  @Require config: OmniSummaryConfig,
  onItemClick?: (index: number, items: OmniSummaryItem[]) => void
})
```

| 参数名         | 参数类型                                            | 描述                                             | 是否必填 | 默认值  |
|-------------|-------------------------------------------------|------------------------------------------------|------|------|
| config      | OmniSummaryConfig                                 | 概览数据配置                                         | 是    | 无    |
| onItemClick | (index: number, items: OmniSummaryItem[]) => void | 概览item点击回调，index为用户点击第几组照片（而不是第几张照片），items为照片组 | 否    | null |

### OmniSummaryConfig

| 参数名         | 参数类型            | 描述       | 是否必填 | 默认值 |
|-------------|-----------------|----------|------|-----|
| items       | OmniSummaryItem[] | 概览每组item | 是    |     |
| countPerRow | number          | 每行展示多少个  | 是    | 无   |

### OmniSummaryItem

| 参数名    | 参数类型     | 描述     | 是否必填 | 默认值 |
|--------|----------|--------|------|-----|
| title  | string   | 概览每组标题 | 是    |     |
| images | string[] | 每组照片   | 否    | []  |


## 四、代码演示

### 默认效果

<img src="../../image/summary1.png" height="400" width="200">

```typescript
OmniSummary({
  config: {
    countPerRow: 4,
    items: [
      {
        title: '这是标题',
        images: [
          'http://m.360buyimg.com/mobilecms/s1600x1120_jfs/t19540/272/1542853502/335716/5ef8759b/5acc6c5bN988cd3d9.jpg',
          'http://gips3.baidu.com/it/u=4283915297,3700662292&fm=3028&app=3028&f=JPEG&fmt=auto?w=1440&h=2560',
          'http://gips2.baidu.com/it/u=2055042668,1190219470&fm=3028&app=3028&f=JPEG&fmt=auto?w=960&h=1280',
          'http://m.360buyimg.com/mobilecms/s1600x1120_jfs/t19540/272/1542853502/335716/5ef8759b/5acc6c5bN988cd3d9.jpg',
          'http://gips3.baidu.com/it/u=4283915297,3700662292&fm=3028&app=3028&f=JPEG&fmt=auto?w=1440&h=2560',
          'http://gips2.baidu.com/it/u=2055042668,1190219470&fm=3028&app=3028&f=JPEG&fmt=auto?w=960&h=1280',
        ]
      },
      {
        title: '这是标题2',
        images: [
          'http://gips3.baidu.com/it/u=4283915297,3700662292&fm=3028&app=3028&f=JPEG&fmt=auto?w=1440&h=2560',
          'http://m.360buyimg.com/mobilecms/s1600x1120_jfs/t19540/272/1542853502/335716/5ef8759b/5acc6c5bN988cd3d9.jpg',
          'http://gips2.baidu.com/it/u=2055042668,1190219470&fm=3028&app=3028&f=JPEG&fmt=auto?w=960&h=1280',
        ]
      },
      {
        title: '这是标题3',
        images: [
          'http://gips3.baidu.com/it/u=4283915297,3700662292&fm=3028&app=3028&f=JPEG&fmt=auto?w=1440&h=2560',
          'http://gips2.baidu.com/it/u=2055042668,1190219470&fm=3028&app=3028&f=JPEG&fmt=auto?w=960&h=1280',
          'http://m.360buyimg.com/mobilecms/s1600x1120_jfs/t19540/272/1542853502/335716/5ef8759b/5acc6c5bN988cd3d9.jpg',
        ]
      },
      {
        title: '这是标题4',
        images: [
          'http://gips3.baidu.com/it/u=4283915297,3700662292&fm=3028&app=3028&f=JPEG&fmt=auto?w=1440&h=2560',
          'http://gips2.baidu.com/it/u=2055042668,1190219470&fm=3028&app=3028&f=JPEG&fmt=auto?w=960&h=1280',
        ]
      }
    ]
  },
  onItemClick: ((index: number, items: OmniSummaryItem[]) => {
    let galleryConfig: OmniGalleyConfig = {
      selectedIndex: index,
      tabConfig: items.map<OmniGalleryTabConfig>((i: OmniSummaryItem, index: number, array: OmniSummaryItem[]) => {
        return {
          tabBarTitle: i.title,
          tabContentData: {
            imageUrls: i.images,
            name: "",
            desc: ""
          }
        }
      })
    }

    this.pathStack.pushPath({
      name: 'OmniGalleryExamplePage', param: JSON.stringify(galleryConfig)
    })
  })
})
```
