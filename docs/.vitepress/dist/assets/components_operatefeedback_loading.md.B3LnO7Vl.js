import{_ as n,c as t,o as s,a2 as e}from"./chunks/framework.CexspsV9.js";const a="/omni-ui/assets/loading1.pXOxQawN.png",l="/omni-ui/assets/loading2.C5zvM02b.png",i="/omni-ui/assets/dotLoading.BzC8H9R5.png",b=JSON.parse('{"title":"加载框Loading","description":"","frontmatter":{},"headers":[],"relativePath":"components/operatefeedback/loading.md","filePath":"components/operatefeedback/loading.md"}'),p={name:"components/operatefeedback/loading.md"},d=e('<h1 id="加载框loading" tabindex="-1">加载框Loading <a class="header-anchor" href="#加载框loading" aria-label="Permalink to &quot;加载框Loading&quot;">​</a></h1><h2 id="一、效果总览" tabindex="-1">一、效果总览 <a class="header-anchor" href="#一、效果总览" aria-label="Permalink to &quot;一、效果总览&quot;">​</a></h2><img src="'+a+`" width="200"><h2 id="二、描述" tabindex="-1">二、描述 <a class="header-anchor" href="#二、描述" aria-label="Permalink to &quot;二、描述&quot;">​</a></h2><p>页面中间的加载框，可以配置显示的文字。</p><h2 id="三、构造函数及参数说明" tabindex="-1">三、构造函数及参数说明 <a class="header-anchor" href="#三、构造函数及参数说明" aria-label="Permalink to &quot;三、构造函数及参数说明&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 以组件形式调用</span></span>
<span class="line"><span>OmniPageLoading({</span></span>
<span class="line"><span>    options?: LoadingOptions</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 以弹窗形式调用</span></span>
<span class="line"><span>let loading = new OmniLoading(this.getUIContext())</span></span>
<span class="line"><span>// 打开加载框</span></span>
<span class="line"><span>loading.show()</span></span>
<span class="line"><span>// 关闭加载框</span></span>
<span class="line"><span>loading.dismiss()</span></span></code></pre></div><table tabindex="0"><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">uiContext</td><td style="text-align:left;">UIContext</td><td style="text-align:left;">是</td><td style="text-align:left;">需要的UI上下文。</td></tr><tr><td style="text-align:left;">options</td><td style="text-align:left;">LoadingOptions</td><td style="text-align:left;">否</td><td style="text-align:left;">loading组件/框的配置参数</td></tr></tbody></table><h3 id="loadingoptions" tabindex="-1">LoadingOptions <a class="header-anchor" href="#loadingoptions" aria-label="Permalink to &quot;LoadingOptions&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">content</td><td style="text-align:left;">string</td><td style="text-align:left;">否</td><td style="text-align:left;">文本内容，默认值：&#39;加载中...&#39;</td></tr><tr><td style="text-align:left;">theme</td><td style="text-align:left;">LoadingTheme</td><td style="text-align:left;">否</td><td style="text-align:left;">加载框的主题样式</td></tr></tbody></table><h3 id="loadingtheme" tabindex="-1">LoadingTheme <a class="header-anchor" href="#loadingtheme" aria-label="Permalink to &quot;LoadingTheme&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">fontSize</td><td style="text-align:left;">number | string | Resource</td><td style="text-align:left;">否</td><td style="text-align:left;">文本的字体大小，默认值：15</td></tr><tr><td style="text-align:left;">fontColor</td><td style="text-align:left;">ResourceColor</td><td style="text-align:left;">否</td><td style="text-align:left;">文本的字体颜色，默认值Color.White</td></tr><tr><td style="text-align:left;">fontWeight</td><td style="text-align:left;">FontWeight</td><td style="text-align:left;">否</td><td style="text-align:left;">文本的字重，默认值：FontWeight.Medium</td></tr><tr><td style="text-align:left;">backgroundColor</td><td style="text-align:left;">ResourceColor</td><td style="text-align:left;">否</td><td style="text-align:left;">加载框的背景颜色，默认值：0xffff552e</td></tr><tr><td style="text-align:left;">borderRadius</td><td style="text-align:left;">Dimension | BorderRadiuses</td><td style="text-align:left;">否</td><td style="text-align:left;">加载框的边框圆角大小，默认值：6</td></tr></tbody></table><h2 id="四、代码演示" tabindex="-1">四、代码演示 <a class="header-anchor" href="#四、代码演示" aria-label="Permalink to &quot;四、代码演示&quot;">​</a></h2><h3 id="示例一-默认效果" tabindex="-1">示例一：默认效果 <a class="header-anchor" href="#示例一-默认效果" aria-label="Permalink to &quot;示例一：默认效果&quot;">​</a></h3><img src="`+a+`" width="200"><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Entry</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>struct LoadingExample {</span></span>
<span class="line"><span>  build() {</span></span>
<span class="line"><span>    NavDestination() {</span></span>
<span class="line"><span>      Column({ space: 10 }) {</span></span>
<span class="line"><span>        Text(&#39;正常Loading展示&#39;)</span></span>
<span class="line"><span>        OmniPageLoading()</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      .alignItems(HorizontalAlign.Center)</span></span>
<span class="line"><span>      .width(&#39;100%&#39;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .title(&#39;Loading示例&#39;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="示例二-自定义文字" tabindex="-1">示例二：自定义文字 <a class="header-anchor" href="#示例二-自定义文字" aria-label="Permalink to &quot;示例二：自定义文字&quot;">​</a></h3><img src="`+l+`" width="200"><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Entry</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>struct LoadingExample {</span></span>
<span class="line"><span>  build() {</span></span>
<span class="line"><span>    NavDestination() {</span></span>
<span class="line"><span>      Column({ space: 10 }) {</span></span>
<span class="line"><span>        Text(&#39;短文案Loading展示&#39;)</span></span>
<span class="line"><span>        OmniPageLoading({ options: { content: &#39;我是较短的的Loading&#39; } })</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      .alignItems(HorizontalAlign.Center)</span></span>
<span class="line"><span>        .width(&#39;100%&#39;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .title(&#39;Loading示例&#39;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="示例三-四色圆点loading" tabindex="-1">示例三：四色圆点Loading <a class="header-anchor" href="#示例三-四色圆点loading" aria-label="Permalink to &quot;示例三：四色圆点Loading&quot;">​</a></h3><img src="`+i+`" width="200"><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Entry</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>struct LoadingExample {</span></span>
<span class="line"><span>  @State loading: boolean = true;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  build() {</span></span>
<span class="line"><span>    NavDestination() {</span></span>
<span class="line"><span>      Column({ space: 10 }) {</span></span>
<span class="line"><span>        Text(&#39;四色圆点Loading展示&#39;)</span></span>
<span class="line"><span>        OmniDotLoadingView({ loading: $loading })</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      .alignItems(HorizontalAlign.Center)</span></span>
<span class="line"><span>        .width(&#39;100%&#39;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .title(&#39;Loading示例&#39;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,22),o=[d];function c(g,r,h,x,f,m){return s(),t("div",null,o)}const y=n(p,[["render",c]]);export{b as __pageData,y as default};
