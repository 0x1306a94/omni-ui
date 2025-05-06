# 加载框Loading

## 一、效果总览

<img src="../../image/loading1.png" width="200">

## 二、描述

页面中间的加载框，可以配置显示的文字。

## 三、构造函数及参数说明

```text
// 以组件形式调用
OmniPageLoading({
    options?: LoadingOptions
})

// 以弹窗形式调用
let loading = new OmniLoading(this.getUIContext())
// 打开加载框
loading.show()
// 关闭加载框
loading.dismiss()
```

| 参数名       | 类型             | 必填 | 说明               |
|:----------|:---------------|:---|:-----------------|
| uiContext | UIContext      | 是  | 需要的UI上下文。        |
| options   | LoadingOptions | 否  | loading组件/框的配置参数 |

### LoadingOptions

| 参数名     | 类型           | 必填 | 说明                |
|:--------|:-------------|:---|:------------------|
| content | string       | 否  | 文本内容，默认值：'加载中...' |
| theme   | LoadingTheme | 否  | 加载框的主题样式          |

### LoadingTheme

| 参数名             | 类型                           | 必填 | 说明                          |
|:----------------|:-----------------------------|:---|:----------------------------|
| fontSize        | number \| string \| Resource | 否  | 文本的字体大小，默认值：15              |
| fontColor       | ResourceColor                | 否  | 文本的字体颜色，默认值Color.White      |
| fontWeight      | FontWeight                   | 否  | 文本的字重，默认值：FontWeight.Medium |
| backgroundColor | ResourceColor                | 否  | 加载框的背景颜色，默认值：0xffff552e     |
| borderRadius    | Dimension \| BorderRadiuses  | 否  | 加载框的边框圆角大小，默认值：6            |

## 四、代码演示

### 示例一：默认效果

<img src="../../image/loading1.png" width="200">

```text
@Entry
@Component
struct LoadingExample {
  build() {
    NavDestination() {
      Column({ space: 10 }) {
        Text('正常Loading展示')
        OmniPageLoading()
      }
      .alignItems(HorizontalAlign.Center)
      .width('100%')
    }
    .title('Loading示例')
  }
}
```

### 示例二：自定义文字

<img src="../../image/loading2.png" width="200">

```text
@Entry
@Component
struct LoadingExample {
  build() {
    NavDestination() {
      Column({ space: 10 }) {
        Text('短文案Loading展示')
        OmniPageLoading({ options: { content: '我是较短的的Loading' } })
      }
      .alignItems(HorizontalAlign.Center)
        .width('100%')
    }
    .title('Loading示例')
  }
}
```

### 示例三：四色圆点Loading

<img src="../../image/dotLoading.png" width="200">

```text
@Entry
@Component
struct LoadingExample {
  @State loading: boolean = true;
  
  build() {
    NavDestination() {
      Column({ space: 10 }) {
        Text('四色圆点Loading展示')
        OmniDotLoadingView({ loading: $loading })
      }
      .alignItems(HorizontalAlign.Center)
        .width('100%')
    }
    .title('Loading示例')
  }
}
```