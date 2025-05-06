import{_ as t,c as s,o as a,a2 as n}from"./chunks/framework.CexspsV9.js";const e="/omni-ui/assets/toast.DWBL_oRi.png",f=JSON.parse('{"title":"吐司Toast","description":"","frontmatter":{},"headers":[],"relativePath":"components/operatefeedback/toast.md","filePath":"components/operatefeedback/toast.md"}'),l={name:"components/operatefeedback/toast.md"},p=n('<h1 id="吐司toast" tabindex="-1">吐司Toast <a class="header-anchor" href="#吐司toast" aria-label="Permalink to &quot;吐司Toast&quot;">​</a></h1><h2 id="一、效果总览" tabindex="-1">一、效果总览 <a class="header-anchor" href="#一、效果总览" aria-label="Permalink to &quot;一、效果总览&quot;">​</a></h2><img src="'+e+`" width="400"><h2 id="二、描述" tabindex="-1">二、描述 <a class="header-anchor" href="#二、描述" aria-label="Permalink to &quot;二、描述&quot;">​</a></h2><ol><li>功能齐全的toast文本提示框</li><li>支持文字前面加icon，内置三种icon，可自定义</li><li>支持通过theme定制toast的样式</li><li>📢注意：使用前需先调用<code>OmniToast.initToast(uiContext: UIContext)</code>初始化toast</li></ol><h2 id="三、构造函数及参数说明" tabindex="-1">三、构造函数及参数说明 <a class="header-anchor" href="#三、构造函数及参数说明" aria-label="Permalink to &quot;三、构造函数及参数说明&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 入参不可为空</span></span>
<span class="line"><span>public static showText(options: ToastOptions)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 入参可为空，入参为空时仅显示成功图标</span></span>
<span class="line"><span>public static showSuccess(options?: ToastOptions)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 入参可为空，入参为空时仅显示错误图标</span></span>
<span class="line"><span>public static showError(options?: ToastOptions)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 入参可为空，入参为空时仅显示警告图标</span></span>
<span class="line"><span>public static showWarning(options?: ToastOptions)</span></span></code></pre></div><h3 id="toastoptions" tabindex="-1">ToastOptions <a class="header-anchor" href="#toastoptions" aria-label="Permalink to &quot;ToastOptions&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">msg</td><td style="text-align:left;">string</td><td style="text-align:left;">否</td><td style="text-align:left;">toast文本</td></tr><tr><td style="text-align:left;">duration</td><td style="text-align:left;">number</td><td style="text-align:left;">否</td><td style="text-align:left;">toast展示时间，默认值2500ms</td></tr><tr><td style="text-align:left;">icon</td><td style="text-align:left;">PixelMap | ResourceStr | DrawableDescriptor | ImageContent</td><td style="text-align:left;">否</td><td style="text-align:left;">toast文本前的图标</td></tr><tr><td style="text-align:left;">alignment</td><td style="text-align:left;">DialogAlignment</td><td style="text-align:left;">否</td><td style="text-align:left;">toast与屏幕的对齐方式，默认值DialogAlignment.Default</td></tr><tr><td style="text-align:left;">offset</td><td style="text-align:left;">Offset</td><td style="text-align:left;">否</td><td style="text-align:left;">在对齐方式上的偏移</td></tr><tr><td style="text-align:left;">onDismiss</td><td style="text-align:left;">(() =&gt; void)</td><td style="text-align:left;">否</td><td style="text-align:left;">toast消失回调</td></tr><tr><td style="text-align:left;">theme</td><td style="text-align:left;">ToastTheme</td><td style="text-align:left;">否</td><td style="text-align:left;">toast主题样式</td></tr></tbody></table><h3 id="toasttheme" tabindex="-1">ToastTheme <a class="header-anchor" href="#toasttheme" aria-label="Permalink to &quot;ToastTheme&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">textColor</td><td style="text-align:left;">ResourceColor</td><td style="text-align:left;">否</td><td style="text-align:left;">文本颜色，默认值Color.White</td></tr><tr><td style="text-align:left;">fontSize</td><td style="text-align:left;">number | string | Resource</td><td style="text-align:left;">否</td><td style="text-align:left;">文本大小，默认值16</td></tr><tr><td style="text-align:left;">backgroundColor</td><td style="text-align:left;">ResourceColor</td><td style="text-align:left;">否</td><td style="text-align:left;">背景颜色，默认值0xDD000000</td></tr><tr><td style="text-align:left;">borderRadius</td><td style="text-align:left;">Dimension | BorderRadius</td><td style="text-align:left;">否</td><td style="text-align:left;">边框圆角，默认值10</td></tr><tr><td style="text-align:left;">borderWidth</td><td style="text-align:left;">Dimension | EdgeWidths</td><td style="text-align:left;">否</td><td style="text-align:left;">边框宽度</td></tr><tr><td style="text-align:left;">borderColor</td><td style="text-align:left;">ResourceColor | EdgeColors</td><td style="text-align:left;">否</td><td style="text-align:left;">边框颜色</td></tr><tr><td style="text-align:left;">borderStyle</td><td style="text-align:left;">BorderStyle | EdgeStyles</td><td style="text-align:left;">否</td><td style="text-align:left;">边框样式</td></tr><tr><td style="text-align:left;">backgroundBlurStyle</td><td style="text-align:left;">BlurStyle</td><td style="text-align:left;">否</td><td style="text-align:left;">背板模糊材质</td></tr><tr><td style="text-align:left;">shadow</td><td style="text-align:left;">ShadowOptions | ShadowStyle</td><td style="text-align:left;">否</td><td style="text-align:left;">背板阴影</td></tr><tr><td style="text-align:left;">width</td><td style="text-align:left;">Dimension</td><td style="text-align:left;">否</td><td style="text-align:left;">toast的宽度</td></tr><tr><td style="text-align:left;">height</td><td style="text-align:left;">Dimension</td><td style="text-align:left;">否</td><td style="text-align:left;">toast的高度</td></tr><tr><td style="text-align:left;">iconWidth</td><td style="text-align:left;">Dimension</td><td style="text-align:left;">否</td><td style="text-align:left;">icon的宽度</td></tr><tr><td style="text-align:left;">iconHeight</td><td style="text-align:left;">Dimension</td><td style="text-align:left;">否</td><td style="text-align:left;">icon的高度</td></tr></tbody></table><h2 id="四、代码演示" tabindex="-1">四、代码演示 <a class="header-anchor" href="#四、代码演示" aria-label="Permalink to &quot;四、代码演示&quot;">​</a></h2><h3 id="示例一-默认文本toast" tabindex="-1">示例一：默认文本toast <a class="header-anchor" href="#示例一-默认文本toast" aria-label="Permalink to &quot;示例一：默认文本toast&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Entry</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>struct ToastExample {</span></span>
<span class="line"><span>  build() {</span></span>
<span class="line"><span>    Column() {</span></span>
<span class="line"><span>      Button(&#39;默认文本toast&#39;).onClick(() =&gt; {</span></span>
<span class="line"><span>        Toast.showText({</span></span>
<span class="line"><span>          msg: &quot;默认文本toast&quot;</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="示例二-成功文案toast" tabindex="-1">示例二：成功文案toast <a class="header-anchor" href="#示例二-成功文案toast" aria-label="Permalink to &quot;示例二：成功文案toast&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Entry</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>struct ToastExample {</span></span>
<span class="line"><span>  build() {</span></span>
<span class="line"><span>    Column() {</span></span>
<span class="line"><span>      Button(&#39;成功文案toast&#39;).onClick(() =&gt; {</span></span>
<span class="line"><span>        Toast.showSuccess({msg: &#39;成功文案toast&#39;})</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="示例三-错误文案toast" tabindex="-1">示例三：错误文案toast <a class="header-anchor" href="#示例三-错误文案toast" aria-label="Permalink to &quot;示例三：错误文案toast&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Entry</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>struct ToastExample {</span></span>
<span class="line"><span>  build() {</span></span>
<span class="line"><span>    Column() {</span></span>
<span class="line"><span>      Button(&#39;错误文案toast&#39;).onClick(() =&gt; {</span></span>
<span class="line"><span>        Toast.showError({msg: &#39;错误文案toast&#39;})</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="示例四-警告文案toast" tabindex="-1">示例四：警告文案toast <a class="header-anchor" href="#示例四-警告文案toast" aria-label="Permalink to &quot;示例四：警告文案toast&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Entry</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>struct ToastExample {</span></span>
<span class="line"><span>  build() {</span></span>
<span class="line"><span>    Column() {</span></span>
<span class="line"><span>      Button(&#39;警告文案toast&#39;).onClick(() =&gt; {</span></span>
<span class="line"><span>        Toast.showWarning({msg: &#39;警告文案toast&#39;})</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="示例五-自定义toast" tabindex="-1">示例五：自定义toast <a class="header-anchor" href="#示例五-自定义toast" aria-label="Permalink to &quot;示例五：自定义toast&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Entry</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>struct ToastExample {</span></span>
<span class="line"><span>  @State text: string = &#39;theme属性自定义toast样式&#39;</span></span>
<span class="line"><span>  build() {</span></span>
<span class="line"><span>    Column() {</span></span>
<span class="line"><span>      Button(this.text).onClick(() =&gt; {</span></span>
<span class="line"><span>        Toast.showText({</span></span>
<span class="line"><span>          msg: &#39;theme属性自定义toast样式&#39;,</span></span>
<span class="line"><span>          theme: {</span></span>
<span class="line"><span>            textColor: 0x333333,</span></span>
<span class="line"><span>            fontSize: 20,</span></span>
<span class="line"><span>            backgroundColor: 0xF7F8FB,</span></span>
<span class="line"><span>            borderRadius: 40,</span></span>
<span class="line"><span>            borderWidth: 10,</span></span>
<span class="line"><span>            borderColor: 0xFF500B,</span></span>
<span class="line"><span>            borderStyle: BorderStyle.Dotted,</span></span>
<span class="line"><span>            backgroundBlurStyle: BlurStyle.NONE,</span></span>
<span class="line"><span>            shadow: ShadowStyle.OUTER_FLOATING_MD,</span></span>
<span class="line"><span>            width: 300,</span></span>
<span class="line"><span>            height: 100,</span></span>
<span class="line"><span>            iconWidth: 50,</span></span>
<span class="line"><span>            iconHeight: 50,</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          duration: 1000,</span></span>
<span class="line"><span>          alignment: DialogAlignment.Bottom,</span></span>
<span class="line"><span>          offset: { dx: 0, dy: -50 }</span></span>
<span class="line"><span>          onDismiss: () =&gt; {</span></span>
<span class="line"><span>            this.text = &#39;toast消失后改变button文字&#39;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,22),i=[p];function o(d,c,r,h,g,x){return a(),s("div",null,i)}const u=t(l,[["render",o]]);export{f as __pageData,u as default};
