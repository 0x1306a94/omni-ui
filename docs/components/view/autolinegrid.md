# 自动换行布局AutoLineGrid

## 一、效果总览

<img src="../../image/autoLineGrid.png" width="200">

## 二、描述

包含标题、内容和右边区域的线性布局，支持一行展示两个，常用于信息展示

## 三、构造函数及参数说明

```text
OmniAutoLineGrid({
  items: PairItemInfo[],
  titleStyle: TextStyle,
  contentStyle: TextStyle,
  rightTextStyle: TextStyle,
  rightPartBuilder: VoidCallback,
  onRightAreaClick?: (event: ClickEvent) => void
})

export interface PairItemInfo {
  title: string
  content: string
  rightText?: string
  rightIcon?: PixelMap | ResourceStr | DrawableDescriptor
  rightIconSize?: SizeOptions
  singleLine: boolean
  hasRightPart?: boolean
}

export interface TextStyle {
  fontSize?: string | number | Resource
  fontColor?: ResourceColor
}
```

| 参数名              | 类型                          | 必填 | 说明             |
|:-----------------|:----------------------------|:---|:---------------|
| items            | PairItemInfo[]              | 是  | 数据来源           |
| titleStyle       | TextStyle                   | 否  | 设置标题字体样式       |
| contentStyle     | TextStyle                   | 否  | 设置内容字体样式       |
| rightTextStyle   | TextStyle                   | 否  | 设置右边区域字体样式     |
| rightPartBuilder | VoidCallback                | 否  | 右边区域的builder函数 |
| onRightAreaClick | (event: ClickEvent) => void | 否  | 右边区域的点击回调函数    |

### PairItemInfo

| 参数名           | 类型                                            | 必填 | 说明                                    |
|:--------------|:----------------------------------------------|:---|:--------------------------------------|
| title         | string                                        | 是  | 设置标题内容                                |
| content       | string                                        | 是  | 设置内容                                  |
| rightText     | string                                        | 否  | 设置右边区域的文本                             |
| rightIcon     | PixelMap \| ResourceStr \| DrawableDescriptor | 否  | 设置右边区域的图标                             |
| rightIconSize | SizeOptions                                   | 否  | 设置右边区域的图标大小                           |
| singleLine    | boolean                                       | 是  | 设置当前项是否占据整行                           |
| hasRightPart  | boolean                                       | 是  | 设置当前项是否存在右边区域，仅singleLine为true时支持右边区域 |

### TextStyle

| 参数名       | 类型                           | 必填 | 说明       |
|:----------|:-----------------------------|:---|:---------|
| fontSize  | string \| number \| Resource | 否  | 设置文本字体大小 |
| fontColor | ResourceColor                | 否  | 设置文本字体颜色 |

## 四、代码演示

### 示例一：

<img src="../../image/autoLineGrid1.png" width="200">

```text
@Entry
@Component
struct OmniAutoLineGridExample {
@State items: PairItemInfo[] = [
    {
      singleLine: false,
      title: '姓名',
      content: '王二狗'
    },
    {
      singleLine: false,
      title: '性别',
      content: '男'
    },
    {
      singleLine: false,
      title: '出生年月',
      content: '1992/01'
    },
    {
      singleLine: false,
      title: '婚姻状态',
      content: '未婚'
    },
    {
      singleLine: true,
      title: '身份证号',
      content: '110101199201101234'
    },
    {
      singleLine: false,
      title: '身高',
      content: '172cm'
    },
    {
      singleLine: false,
      title: '体重',
      content: '70kg'
    },
    {
      singleLine: true,
      title: '联系方式',
      content: '13012345678',
      rightText: '立即联系',
      rightIcon: $r('app.media.ic_arrow_right'),
      hasRightPart: true
    },
    {
      singleLine: true,
      title: '家庭地址',
      content: '北京市北京市东城区xx街道xx小区xx楼xx单元101',
      rightText: '查看详情',
      rightIcon: $r('app.media.ic_arrow_right'),
      hasRightPart: true
    }
  ]
  
  build() {
    NavDestination() {
      Column({ space: 20 }) {
        OmniAutoLineGrid({
          items: this.items, onRightAreaClick: () => {
            Toast.showText({ msg: 'Right Area Clicked' })
          }
        }).padding({
            left: 20,
            right: 20,
            top: 16,
            bottom: 16
          })
      }
    }
    .title('OmniAutoLineGrid示例')
  }
}
```

### 示例二：自定义右边区域

<img src="../../image/autoLineGrid2.png" width="200">

```text
@Entry
@Component
struct OmniAutoLineGridExample {
@State items: PairItemInfo[] = [
    {
      singleLine: false,
      title: '姓名',
      content: '王二狗'
    },
    {
      singleLine: false,
      title: '性别',
      content: '男'
    },
    {
      singleLine: false,
      title: '出生年月',
      content: '1992/01'
    },
    {
      singleLine: false,
      title: '婚姻状态',
      content: '未婚'
    },
    {
      singleLine: true,
      title: '身份证号',
      content: '110101199201101234'
    },
    {
      singleLine: false,
      title: '身高',
      content: '172cm'
    },
    {
      singleLine: false,
      title: '体重',
      content: '70kg'
    },
    {
      singleLine: true,
      title: '联系方式',
      content: '13012345678',
      rightText: '立即联系',
      rightIcon: $r('app.media.ic_arrow_right'),
      hasRightPart: true
    },
    {
      singleLine: true,
      title: '家庭地址',
      content: '北京市北京市东城区xx街道xx小区xx楼xx单元101',
      rightText: '查看详情',
      rightIcon: $r('app.media.ic_arrow_right'),
      hasRightPart: true
    }
  ]
  
  @Builder
  buildRightArea() {
    Row() {
      Text('r1')
        .fontSize(10)
        .fontColor('#979B9E')
        .margin({ right: 5 })

      Text('r2')
        .fontSize(10)
        .fontColor('#0B0F12')
    }.onClick(() => {
      Toast.showText({ msg: 'Right Area Clicked' })
    })
  }
  
  build() {
    NavDestination() {
      Column({ space: 20 }) {
        OmniAutoLineGrid({
          items: this.items,
          rightPartBuilder: this.buildRightArea,
        }).padding({
          left: 20,
          right: 20,
          top: 16,
          bottom: 16
        })
      }
    }
    .title('OmniAutoLineGrid示例')
  }
}
```

