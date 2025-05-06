# 图表库通用说明
由于图表库采用了通过配置参数实现不同图表样式的功能，api接口里有通用配置项，这项通用接口的结构是一样的，可在不同的图表类型里共享，本文档旨在针对这项通用接口及方法进行说明。

## 通用接口接口及参数说明
### OptionInterface
图表的通用配置接口，可以配置图表的坐标轴数据和样式，图表的总样式和展示数据节点的样式，是图表库的核心配置接口。

| 参数名     | 参数类型          | 描述            | 是否必填 | 默认值       |
|---------|---------------|---------------|------|-----------|
| padding       | Padding                        | 设置图表的内间距     | 否    | 20    |
| color       | string[]                        | 设置图表的数据颜色     | 否    |     |
| legend       | LegendInterface                        | 设置图表的描述部分     | 否    | 无    |
| tooltip       | TooltipInterface                      | 选中数据时的菜单展示样式     | 否    | 图表库默认配置    |
| radar       | RadarInterface                        | 设置雷达图的样式，非雷达图不用设置     | 否    | 无    |
| xAxis       | AxisInterface                      | 设置图表的x坐标轴样式，雷达图、环形图不用设置     | 否    |  图表库默认配置   |
| yAxis       | AxisInterface                 | 设置图表的y坐标轴样式，雷达图、环形图不用设置     | 否    | 图表库默认配置    |
| series       | SeriesInterface\<T\>[]                        | 设置图表的数据     | 否    | 无    |
| title       | Object                        | 设置图表的标题     | 否    | 无    |

### SeriesInterface

| 属性名         | 类型                          | 说明                                                                 |
| -------------- | ----------------------------- | -------------------------------------------------------------------- |
| `name`         | `string?`                     | 本组数据的名称                                                       |
| `color`        | `string?`                     | 本组数据的整体颜色                                                   |
| `lineStyle`    | `LineStyle?`                  | 线条样式                                                             |
| `barStyle`     | `BarStyle?`                   | 柱形的样式，柱状图需要                                               |
| `label`        | `LabelStyle?`                 | 本组数据的标签样式                                                   |
| `areaStyle`    | `AreaStyle?`                  | 填充样式                                                             |
| `labelLine`    | `InterfaceObj?`               | 标签线的样式                                                         |
| `emphasis`     | `InterfaceObj?`               | 高亮样式                                                             |
| `stack`        | `string?`                     | 堆叠名称，用于堆叠图                                                 |
| `padAngle`     | `number?`                     | 初始角度，环状图和雷达图需要，默认 `90`                              |
| `radius`       | `string[]?`                   | 半径占比，环状图需要，如 `['70%', '40%']`                            |
| `center`       | `string[]?`                   | 图表中心位置，如 `['50%', '50%']` 指位于父组件中心                   |
| `smooth`       | `boolean?`                    | 是否平滑显示                                                         |
| `hide`         | `boolean?`                    | 是否隐藏本组数据                                                     |
| `data`         | `T[]?`                        | 本组数据的具体数据                                                   |
### 坐标轴接口: AxisInterface
| 属性名           | 类型                          | 说明                                                                 |
| ---------------- | ----------------------------- | -------------------------------------------------------------------- |
| `name`         | `string?`                     | 轴名称                                                               |
| `nameTextStyle`| `TextStyle?`                  | 轴名称文本样式                                                       |
| `nameGap`      | `number?`                     | 轴名称与轴线的间距                                                   |
| `axisLine`     | `LineStyle?`                  | 坐标轴线样式                                                  |
| `axisTick`    | `AxisTickStyle?`              | 坐标轴刻度样式                  |
| `axisLabel`  | `AxisLabelStyle?`            | 坐标轴标签样式                                                           |
| `data`        | `Array<string \| number>?` | 坐标轴数据                                                           |
| `splitLine`  | `LineStyle?`                | 坐标轴标线样式                                                           |
### 雷达图接口RadarInterface
| **属性名**        | **类型**                               | **描述**                                           |
|------------------|--------------------------------------|-------------------------------------------------|
| `indicator`      | `InterfaceObj[]` (可选)              | 指示器的数组，定义了雷达图的各个指标。                        |
| `center`         | `Array<string \| number>` (可选)       | 雷达图中心的位置，可以是 `[x, y]` 的数组，表示中心点的坐标。      |
| `radius`         | `number \| string` (可选)              | 雷达图的半径，可以是数字或字符串。                             |
| `startAngle`     | `number` (可选)                      | 雷达图的起始角度，默认是 90°，单位为度。                       |
| `nameGap`        | `number` (可选)                      | 指标名称与坐标轴之间的间距。                               |
| `splitNumber`    | `number` (可选)                      | 将圆环分成的区块数，控制雷达图的分割数。                         |
| `axisLineStyle`  | `LineStyle` (可选)                   | 坐标轴线的样式。                                         |
| `axisName`       | `TextStyle` (可选)                   | 坐标轴名称的样式。                                        |
| `splitLineStyle` | `LineStyle` (可选)                   | 分割线的样式。                                           |
| `splitArea`      | `AreaStyle[]` (可选)                 | 分割区域的样式，控制每个区域的样式。                         |

### 提示层接口TooltipInterface
| **属性名**        | **类型**                         | **描述**                                           |
|------------------|---------------------------------|-------------------------------------------------|
| `show`           | `boolean` (可选)                | 是否显示提示层。                                        |
| `type`           | `string` (可选)                 | 提示层的类型，`default`或`custom`默认为 `default`                        |
| `backgroundColor`| `string` (可选)                 | 提示层的背景颜色。                                      |
| `borderColor`    | `string` (可选)                 | 提示层边框的颜色。                                       |
| `borderWidth`    | `number` (可选)                 | 提示层边框的宽度。                                       |
| `padding`        | `number` (可选)                 | 提示层的内边距。                                        |
| `textStyle`      | `TextStyle` (可选)              | 提示层文本的样式。                                       |

更多接口如`LineStyle`、`TextStyle`等样式类接口，可在sdk内部查看。

## 通用组件、类及方法

### DrawBaseViewModel\<T\>
该类是实现绘制图表的核心类，包含了绘制时的基础参数、绘制过程，开发者可通过继承该类实现更加复杂的图表绘制
| **方法名**        | **参数**                         | **描述**                                           |
|------------------|---------------------------------|-------------------------------------------------|
| create |         无参数 |             在初次创建时绘制
| bindEvent |         `(ClickEvent, Function)` |             点击图表空间时的回调
| setOption |          `OptionInterface<T>` |             创建对象时调用，可扩展加入更多的Option属性
| drawDescriptions |     `SeriesInterface<T>[]` |         绘制图表描述信息的方法，如不需要则不用实现
| clear |     无参数 |         当父组件disAppear时调用，可自定义进行资源回收与重置逻辑


