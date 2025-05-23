import { InterfaceObj, AxisInterface, LegendInterface, TooltipInterface, SeriesInterface, RadarInterface,
  HighlightStyle,
  LineStyle,
  TextStyle,
  LabelStyle,
  BarStyle} from './chartInterface'

const lineStyle: LineStyle = {
  color: '',
  width: 1,
  type: 'solid'
}

const barStyle: BarStyle = {
  color: '',
  width: 15,
  gap: 3,
  radius: 4
}

const label: LabelStyle = {
  show: true,
  color: '#999',
  fontWeight: 'normal',
  fontFamily: 'sans-serif',
  position: '',
  fontSize: 24,
  distanceToLabelLine: 5,
  formatter: null
}

const itemStyle: InterfaceObj = {
  symbol: 'none',
  symbolSize: 3,
  symbolColor: '',
  borderWidth: 0, // 
  borderType: 'solid', // 
  borderColor: '' // 
}

// 区域颜色
const areaStyle: InterfaceObj = {
  color: ''
}

const labelLine: InterfaceObj = {
  show: true, // 默认开启，如果当label的position的值不是outside，则自动隐藏
  length: 10,
  length2: 20,
  minTurnAngle: 90,
  lineStyle
}

const emphasis: HighlightStyle = {
  scale: true,
  scaleSize: 4,
  shadowColor: 'rgba(0, 0, 0, 0.5)',
  shadowBlur: 15,
  shadowOffsetX: 0,
  shadowOffsetY: 0
}


const seriesOpt: SeriesInterface<ESObject> = {
  name: '',
  color: '',
  lineStyle: {
    color: '',
    width: 2,
    type: 'solid'
  },
  barStyle,
  label: {
    ...label,
  },
  labelLine,
  emphasis,
  areaStyle,
  itemStyle,
  stack: '', // 数据堆叠
  symbolSize: 0, // 散点图的标记大小
  smooth: false, // 圆滑曲线
  padAngle: 0, // 饼图间隔角度
  data: [],
  hide: true
}

const axisLineStyle: LineStyle = {
  ...lineStyle,
  color: '#DDE2EB'
}

const axisOpt: AxisInterface = {
  axisLine: { // 坐标轴轴线相关设置。
    show: true,
    ...axisLineStyle
  },
  axisTick: {
    show: true,
    interval: 4, // 与文本的间隔
    length: 5, // 刻度的长度
    lineStyle: axisLineStyle
  },
  axisLabel: {
    color: '#999999',
    fontWeight: 'normal',
    fontFamily: 'sans-serif',
    fontSize: 22,
    interval: 'auto',
    margin: 5, // 刻度标签与轴线之间的距离。
    overflow: 'none' // x轴的文本长度超出的处理， none（无）， truncate（截断），breakAll（换行）
  },
  formatter: null,
}

const xAxisOpt: AxisInterface = {
  ...axisOpt,
  boundaryGap: true, // 新增两边留白机制
  data: []
}

const yLineStyle: LineStyle = {
  ...lineStyle,
  color: '#DDE2EB'
}

const yAxisOpt: AxisInterface = {
  name: '',
  nameTextStyle: {
    color: '#999999',
    fontWeight: 'normal',
    fontFamily: 'sans-serif',
    fontSize: 22,
  },
  nameGap: 5, // 坐标轴名称与轴线之间的距离。
  ...axisOpt,
  axisLabel: {
    ...axisOpt.axisLabel,
    margin: 0, // 刻度标签与轴线之间的距离。
  },
  splitLine: { // 坐标轴中的分隔线。
    show: true,
    ...yLineStyle
  },
  data: []
}


const axisPointer = {
  type: 'line',
  lineStyle: yLineStyle,
  shadowStyle: { // 提示背景
    color: 'rgba(150,150,150,0.2)'
  }
}

// 提示层默认数据
const tooltip: TooltipInterface = {
  show: true,
  type: 'default', // 是否自定义渲染。可选值：default（默认）、custom（自定义）
  axisPointer: axisPointer,
  backgroundColor: 'rgba(0,0,0,0.7)',
  borderColor: 'rgba(0,0,0,0.7)',
  borderWidth: 0,
  padding: 12,
  textStyle: {
    color: '#fff',
    fontWeight: 'normal',
    fontFamily: 'sans-serif',
    fontSize: 14
  }
}

// 图例的文本样式
const legendTextStyle: TextStyle = {
  color: '#333',
  fontWeight: 'normal',
  fontFamily: 'sans-serif',
  fontSize: 20
}

// 图例的默认数据
const legend: LegendInterface = {
  show: true,
  left: '50%',
  top: '1%',
  itemGap: 10, // 图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。
  itemTextGap: 5, // 图例图例之间的间隔。
  itemWidth: 16, // 图例标记的图形宽度。
  itemHeight: 8, // 图例标记的图形高度。
  orient: 'vertical', // 图例列表的布局朝向。 可选：'horizontal'、'vertical'
  textStyle: legendTextStyle
}


// 雷达图的配置信息, 
const radar: RadarInterface = {
  indicator: [], // 雷达图的指示器，用来指定雷达图中的多个变量（维度）
  center: ['50%', '50%'], // 雷达图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。
  radius: '75%', // 雷达图的半径。可以为如下类型：number | string
  startAngle: 90, // 坐标系起始角度，也就是第一个指示器轴的角度。
  nameGap: 10, // 指示器名称和指示器轴的距离。
  splitNumber: 5, // 指示器轴的分割段数。
  // 雷达图每个指示器名称的配置项。
  axisName: {
    show: true,
    color: '#999',
    fontWeight: 'normal',
    fontFamily: 'sans-serif',
    fontSize: 22,
    width: 30,
    overflowType: 'breakAll' // x轴的文本长度超出的处理， none（无）， truncate（截断），breakAll（换行）
  },
  // 坐标轴轴线相关设置。
  axisLineStyle: {
    show: true,
    color: '#DBDBDB',
    width: 1
  },
  // 坐标轴在 grid 区域中的分隔线。
  splitLineStyle: {
    show: true,
    color: '#DBDBDB',
    width: 1
  },
  // 坐标轴在 grid 区域中的分隔区域，默认显示。
  splitArea: [
    {
      color: 'fff'
    },
    {
      color: 'rgba(200,200,200,0.2)'
    }
  ]

}


export {
  lineStyle,
  labelLine,
  axisLineStyle,
  yLineStyle,
  barStyle,
  itemStyle,
  areaStyle,
  emphasis,
  label,
  seriesOpt,
  xAxisOpt,
  yAxisOpt,
  tooltip,
  legendTextStyle,
  legend,
  radar
}