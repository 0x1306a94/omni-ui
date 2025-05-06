import DefaultTheme from "vitepress/theme";
import "./style/index.css";

export default {
  extends: DefaultTheme,
  // ...DefaultTheme, //或者这样写也可
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
    // app.use(ElementPlus);
    // 注册全局组件
  },
};
