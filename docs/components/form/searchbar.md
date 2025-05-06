# 搜索框SearchBar

## 一、效果总览
<img src="../../image/search_bar4.png">
<img src="../../image/search_bar3.png">

## 二、描述

搜索栏

## 三、构造函数及参数说明

```typescript
//默认构造
OmniSearchV2()

//带参构造
OmniSearchV2({
  config: {
    defaultText: '关键字',
    placeHolderText: '请输入想要搜索的内容',
    hasCancelBtn: false,
    hasClearBtn: false,
    hasSearchBtn:false
  },
  textInputModifier: new SearchTextInputModifier()
    .withBackgroundColor(0xffffff),
  foregroundContainerModifier: new SearchContainerModifier()
    .withHeight(44)
    .withBackgroundColor(0xffffff)
    .withBorderRadius(6)
    .withBorderWidth(1)
    .withBorderColor('#F7F7F7')
    .withShadow({
      radius: 5,
      type: ShadowType.BLUR,
      color: '#F7F7F7'
    }),
  backgroundContainerModifier: new SearchContainerModifier()
    .withWidth('100%')
    .withPadding({
      right: 10
    })
    .withBackgroundColor(0xffffff),
  searchButtonModifier:new SearchButtonModifier(),
  submitCallback: (searchText) => {
    OmniToast.showText({ msg: `搜索:${searchText}` })
  },
  onCancel:()=>{},
  onFocusCallback:()=>{},
  onTextChange:(text:String)=>{}
})
```

| 参数名                         | 参数类型                      | 描述                   | 是否必填 | 默认值                       |
|-----------------------------|---------------------------|----------------------|------|---------------------------|
| config                      | OmniSearchConfigV2          | 搜索栏配置数据              | 否    | DefaultOmniSearchConfigV2() |
| textInputModifier           | SearchTextInputModifier   | TextInput的样式modifier | 否    | SearchTextInputModifier() |
| foregroundContainerModifier | SearchContainerModifier   | 前景容器样式modifier       | 否    | SearchContainerModifier() |
| backgroundContainerModifier | SearchContainerModifier   | 背景容器样式modifier       | 否    | SearchContainerModifier() |
| searchButtonModifier        | SearchButtonModifier      | 搜索按钮样式modifier       | 否    | SearchButtonModifier()    |
| submitCallback              | (searchText:String)=>void | 提交回调                 | 否    | null                      |
| onCancel                    | ()=>void                  | 取消按钮点击回调             | 否    | null                      |
| onFocusCallback             | ()=>void                  | 获取焦点回调               | 否    | null                      |
| onTextChange                | (text:String)=>void       | 文本变化回调               | 否    | null                      |

## 四、代码演示

### 效果：默认效果

<img src="../../image/search_bar4.png">

```typescript
OmniSearchV2()
```

<img src="../../image/search_bar3.png">

```typescript
OmniSearchV2({
  config: {
    defaultText: '关键字',
    placeHolderText: '请输入想要搜索的内容',
    hasCancelBtn: false,
    hasClearBtn: true,
    hasSearchBtn: true
  },
  textInputModifier: new SearchTextInputModifier()
    .withCaretColor('#FF552E')
    .withBackgroundColor(0xffffff),
  foregroundContainerModifier: new SearchContainerModifier()
    .withHeight(44)
    .withBackgroundColor(0xffffff)
    .withBorderRadius(6)
    .withBorderWidth(1)
    .withBorderColor('#F7F7F7')
    .withShadow({
      radius: 5,
      type: ShadowType.BLUR,
      color: '#F7F7F7'
    })
    .withMargin({
      left: '5%',
      right: '5%',
      top: 10,
      bottom: 10
    }),
  backgroundContainerModifier: new SearchContainerModifier()
    .withWidth('100%')
    .withPadding({
      right: 10
    })
    .withBackgroundColor(0xffffff),
  searchButtonModifier: new SearchButtonModifier(),
  submitCallback: (searchText) => {
    Toast.showText({ msg: `搜索:${searchText}` })
  },
  onCancel: () => {
    Toast.showText({ msg: `点击取消按钮` })
  },
  onFocusCallback: () => {
    Toast.showText({ msg: `获取到焦点` })
  },
  onTextChange: (text) => {
    Toast.showText({ msg: `输入框内容变化:${text}` })
  }
})
```

### 小技巧
可搭配input相关api实现点击空白处收起软键盘
```typescript
import { inputMethod } from "@kit.IMEKit"

 // 退出文本编辑状态
inputMethod.getController().stopInputSession();
```