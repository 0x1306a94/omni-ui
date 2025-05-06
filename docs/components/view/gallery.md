# 图片浏览Gallery

## 一、效果总览

<img src="../../image/gallery1.png" height="400" width="200">

## 二、描述

图片浏览页面，支持tab嵌套列表的形式

## 三、构造函数及参数说明

```typescript
OmniGallery({
  @Require config: OmniGalleyConfig,
  tabBarModifier: new OmniGalleryTabBarModifier(),
  tabBarItemBuilder?:(title: string, length: number, index: number) => void, //tab切换时回调
  onTabChange?: (index: number) => void,
  onTabBarClick?: (index: number) => void //tab点击回调
})

interface OmniGalleyConfig {
    selectedIndex: number | undefined
    tabConfig: OmniGalleryTabConfig[]
}

interface OmniGalleryTabConfig {
    tabBarTitle: string
    tabContentData: OmniGalleryTabContentConfig
}

interface OmniGalleryTabContentConfig {
    imageUrls: string[]
}

//构建tab bar中item的样式
@BuilderParam tabBarItemBuilder?: ((title: string, length: number, index: number) => void) | undefined | null
```

| 参数名               | 参数类型                                                   | 描述                                  | 是否必填 | 默认值                       |
|-------------------|--------------------------------------------------------|-------------------------------------|------|---------------------------|
| config            | OmniGalleyConfig                                         | 画廊数据配置                              | 是    | 无                         |
| tabBarModifier    | OmniGalleryTabBarModifier                                | 画廊tabbar样式modifier                  | 否    | OmniGalleryTabBarModifier() |
| onTabChange       | (index: number) => void                                | tab切换时的回调                           | 否    | null                      |
| onTabBarClick     | (index: number) => void                                | 点击tab时的回调                           | 否    | null                      |
| tabBarItemBuilder | (title: string, length: number, index: number) => void | custom builder用于构建tab bar中的tab item | 否    | null                      |

### OmniGalleyConfig

| 参数名           | 参数类型                 | 描述       | 是否必填 | 默认值 |
|---------------|----------------------|----------|------|-----|
| tabConfig     | OmniGalleryTabConfig[] | 每个tab的配置 | 是    |     |
| selectedIndex | number               | 选中下标     | 否    | 0   |

### OmniGalleryTabConfig

| 参数名            | 参数类型                      | 描述         | 是否必填 | 默认值 |
|----------------|---------------------------|------------|------|-----|
| tabContentData | OmniGalleryTabContentConfig | 每个tab的内容数据 | 是    |     |
| tabBarTitle    | string                    | 每个tab的标题   | 否    |     |


## 四、代码演示

### 默认效果

<img src="../../image/gallery1.png" height="400" width="200">

```typescript
OmniGallery({
  tabBarModifier:new OmniGalleryTabBarModifier(),
  config:{} 
})
```

### 自定义TabBar item样式

<img src="../../image/gallery4.png" height="400" width="200">

```typescript
@Builder
buildTabBarItem(title: string, length: number, index: number) {
    Text(`${title}(${length})`)
        .fontColor(this.selectedIndex === index ? Color.Red : Color.Black)
        .fontWeight(this.selectedIndex === index ? FontWeight.Bold : FontWeight.Normal)
}

OmniGallery({
  config:{},
  tabBarItemBuilder: this.buildTabBarItem
})
```

### TabBar item均分

<img src="../../image/gallery5.png" height="400" width="200">

```typescript
@Builder
buildTabBarItem(title: string, length: number, index: number) {
  Text(`${title}(${length})`)
    .fontColor(this.selectedIndex === index ? Color.Red : Color.Black)
    .fontWeight(this.selectedIndex === index ? FontWeight.Bold : FontWeight.Normal)
}


OmniGallery({
      tabBarItemBuilder: this.buildTabBarItem,
      config: {},
      tabBarModifier:new OmniGalleryTabBarModifier()
        .withBarMode(BarMode.Fixed)
    })
```

### 展示文本描述

<img src="../../image/gallery2.png" height="400" width="200">

```typescript
@Builder
buildTabBarItem(title: string, length: number, index: number) {
  Text(`${title}(${length})`)
    .fontColor(this.selectedIndex === index ? Color.Red : Color.Black)
    .fontWeight(this.selectedIndex === index ? FontWeight.Bold : FontWeight.Normal)
}


OmniGallery({
      tabBarItemBuilder: this.buildTabBarItem,
      config: {
        selectedIndex: 0,
        tabConfig: [
          {
            tabBarTitle: '第一项',
            tabContentData: {
              name: "随机图片随机图片随机图片随机图片随机图片随机图片",
              desc: "这里是描述描述这里是描述描述这里是描述描述这里是描述描述这里是描述描述这里是描述描述这里是描述描述这里是描述描述这里是描述描述这里是描述描述这里是描述描述这里是描述描述这里是描述描述这里是描述描述这里是描述描述这里是描述描述这里是描述描述这里是描述描述这里是描述描述这里是描述描述这里是描述描述",
              imageUrls: ['http://m.360buyimg.com/mobilecms/s1600x1120_jfs/t19540/272/1542853502/335716/5ef8759b/5acc6c5bN988cd3d9.jpg',
                'http://gips3.baidu.com/it/u=4283915297,3700662292&fm=3028&app=3028&f=JPEG&fmt=auto?w=1440&h=2560',
                'http://gips2.baidu.com/it/u=2055042668,1190219470&fm=3028&app=3028&f=JPEG&fmt=auto?w=960&h=1280']
            }
          }],
      tabBarModifier:new OmniGalleryTabBarModifier()
        .withBarMode(BarMode.Fixed)
    })
```
