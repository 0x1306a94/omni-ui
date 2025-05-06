import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/omni-ui/',
  title: "OmniUI",
  description: "OmniUI，享受飞一样的开发速度",
  head: [['link', { rel: 'icon', href: 'https://pic1.58cdn.com.cn/nowater/frs/n_v3be298af75a694c31a4fef8b1f33a3eaa.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "https://pic1.58cdn.com.cn/nowater/frs/n_v3be298af75a694c31a4fef8b1f33a3eaa.png",
    outline:[2,6],
    nav: [
      { text: "文档", link: "/document/introduce" },
      { text: "组件", link: "/components/view/tag" },
    ],

    sidebar: {
      "/document/": [
        {
          items: [
            { text: "介绍", link: "/document/introduce" },
            { text: "快速开始", link: "/document/quickstart" },
            { text: "FAQ", link: "/document/faq" },
            { text: "Changelog", link: "/document/changelog" },
          ],
        },
      ],
      "/components/": [
        {
          items: [
            {
              text: "视图",
              items: [
                { text: "标签Tag", link: "/components/view/tag" },
                { text: "富文本RichText", link: "/components/view/richtext" },
                { text: "图片浏览Gallery", link: "/components/view/gallery" },
                { text: "图片概览Summary", link: "/components/view/summary" },
                { text: "下拉刷新PullToRefresh", link: "/components/view/pulltorefresh" },
                { text: "步骤条StepBar", link: "/components/view/stepbar" },
                { text: "筛选FilterBar", link: "/components/view/filterbar" },
                { text: "日历Calendar", link: "/components/view/calendar" },
                { text: "引导Guide", link: "/components/view/guide" },
                { text: "可折叠文本ExpandableText", link: "/components/view/expandabletext" },
                { text: "自动换行布局AutoLineGrid", link: "/components/view/autolinegrid" },
              ],
            },
            {
              text: "表单",
              items: [
                { text: "单选/多选选择器DataPicker", link: "/components/form/datapicker" },
                { text: "图片选择ImagePicker", link: "/components/form/imagepicker" },
                { text: "搜索框SearchBar", link: "/components/form/searchbar" }, 
              ],
            },
            {
              text: "操作反馈",
              items: [
                {
                  text: "吐司Toast",
                  link: "/components/operatefeedback/toast",
                },
                {
                  text: "加载框Loading",
                  link: "/components/operatefeedback/loading",
                },
                {
                  text: "对话框Dialog",
                  link: "/components/operatefeedback/dialog",
                },
              ],
            },
            {
              text: "导航",
              items: [
                { text: "导航栏NavigationBar", link: "/components/navigation/navigationbar" },
                { text: "选项卡Tabs", link: "/components/navigation/tabs"},
                { text: "底部导航BottomBar", link: "/components/navigation/bottombar" },
                { text: "锚点Anchor", link: "/components/navigation/anchor" },
              ],
            },
            {
              text: "图表",
              items: [
                {
                  text: "通用图表接口",
                  link: "/components/chart/chart"
                },
                {
                  text: "柱状图ProgressBar",
                  link: "/components/chart/progressbar",
                },
                {
                  text: "折线图BrokenLine",
                  link: "/components/chart/brokenline",
                },
                { text: "雷达图Radar", link: "/components/chart/radar" },
                { text: "环状图Doughunt", link: "/components/chart/doughunt" },
                { text: "漏斗图Funnel", link: "/components/chart/funnel" },
              ],
            }
          ],
        },
      ],
    },
    outlineTitle: "目录",
    footer: {
        copyright: "Copyright © 2025 WuBa All Rights Reserved",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/wuba/omni-ui" },
    ],
  },
});
