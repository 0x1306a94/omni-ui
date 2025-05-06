import{_ as n,c as s,o as a,a2 as t}from"./chunks/framework.CexspsV9.js";const l="/omni-ui/assets/dialog.B0_yHTLK.png",e="/omni-ui/assets/dialog1.BqNPOeYz.jpg",p="/omni-ui/assets/dialog2.DJt36dG0.jpg",i="/omni-ui/assets/dialog3.Bh6svnh-.jpg",o="/omni-ui/assets/dialog4.DS71x44a.jpg",d="/omni-ui/assets/dialog5.DX6-KH1I.jpg",v=JSON.parse('{"title":"对话框Dialog","description":"","frontmatter":{},"headers":[],"relativePath":"components/operatefeedback/dialog.md","filePath":"components/operatefeedback/dialog.md"}'),c={name:"components/operatefeedback/dialog.md"},g=t('<h1 id="对话框dialog" tabindex="-1">对话框Dialog <a class="header-anchor" href="#对话框dialog" aria-label="Permalink to &quot;对话框Dialog&quot;">​</a></h1><h2 id="一、效果总览" tabindex="-1">一、效果总览 <a class="header-anchor" href="#一、效果总览" aria-label="Permalink to &quot;一、效果总览&quot;">​</a></h2><img src="'+l+`" width="700"><h2 id="二、描述" tabindex="-1">二、描述 <a class="header-anchor" href="#二、描述" aria-label="Permalink to &quot;二、描述&quot;">​</a></h2><p>通用弹出对话框，分为头部标题区、内容区、和底部按键区三个区域，支持使用args定制内容和样式，也支持传入builder自定义。 支持函数调用和组件调用两种方式。</p><h2 id="三、构造函数及参数说明" tabindex="-1">三、构造函数及参数说明 <a class="header-anchor" href="#三、构造函数及参数说明" aria-label="Permalink to &quot;三、构造函数及参数说明&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 组件调用</span></span>
<span class="line"><span>OmniCustomDialog({</span></span>
<span class="line"><span>  titleBuilder?: VoidCallback,</span></span>
<span class="line"><span>  contentBuilder?: VoidCallback,</span></span>
<span class="line"><span>  buttonBuilder?: (controller?: OmniDialogController) =&gt; void,</span></span>
<span class="line"><span>  titleArgs?: OmniDialogTextArgs,</span></span>
<span class="line"><span>  contentArgs?: OmniDialogTextArgs,</span></span>
<span class="line"><span>  leftButtonArgs?: OmniDialogButtonArgs,</span></span>
<span class="line"><span>  rightButtonArgs?: OmniDialogButtonArgs,</span></span>
<span class="line"><span>  onLeftButtonClick?: (event: ClickEvent) =&gt; void,</span></span>
<span class="line"><span>  onRightButtonClick?: (event: ClickEvent) =&gt; void,</span></span>
<span class="line"><span>  dialogBorder?: BorderOptions,</span></span>
<span class="line"><span>  dialogBgColor?: ResourceColor,</span></span>
<span class="line"><span>  dialogDivider?: OmniDialogDividerOptions,</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 函数调用</span></span>
<span class="line"><span>let dialog = new OmniDialog(uiContext: UIContext)</span></span>
<span class="line"><span>// 打开dialog</span></span>
<span class="line"><span>dialog.show(args: OmniDialogArgs)</span></span>
<span class="line"><span>// 关闭dialog</span></span>
<span class="line"><span>dialog.dismiss()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export interface OmniDialogArgs {</span></span>
<span class="line"><span>  titleBuilder?: () =&gt; void</span></span>
<span class="line"><span>  contentBuilder?: () =&gt; void</span></span>
<span class="line"><span>  buttonBuilder?: (controller?: OmniDialogController) =&gt; void</span></span>
<span class="line"><span>  titleArgs?: OmniDialogTextArgs</span></span>
<span class="line"><span>  contentArgs?: OmniDialogTextArgs</span></span>
<span class="line"><span>  leftButtonArgs?: OmniDialogButtonArgs</span></span>
<span class="line"><span>  rightButtonArgs?: OmniDialogButtonArgs</span></span>
<span class="line"><span>  onLeftButtonClick?: (event: ClickEvent) =&gt; void</span></span>
<span class="line"><span>  onRightButtonClick?: (event: ClickEvent) =&gt; void</span></span>
<span class="line"><span>  dialogBorder?: BorderOptions</span></span>
<span class="line"><span>  dialogBgColor?: ResourceColor</span></span>
<span class="line"><span>  dialogDivider?: OmniDialogDividerOptions</span></span>
<span class="line"><span>  isModal?: boolean</span></span>
<span class="line"><span>  showInSubWindow?: boolean</span></span>
<span class="line"><span>  autoCancel?: boolean</span></span>
<span class="line"><span>  alignment?: DialogAlignment</span></span>
<span class="line"><span>  offset?: Offset</span></span>
<span class="line"><span>  transition?: TransitionEffect</span></span>
<span class="line"><span>  maskColor?: ResourceColor</span></span>
<span class="line"><span>  onDidAppear?: VoidCallback</span></span>
<span class="line"><span>  onDidDisappear?: VoidCallback</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface OmniDialogTextArgs {</span></span>
<span class="line"><span>  value: string</span></span>
<span class="line"><span>  style?: OmniDialogFontStyle</span></span>
<span class="line"><span>  padding?: Padding | Length | LocalizedPadding</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface OmniDialogFontStyle {</span></span>
<span class="line"><span>  font?: Font</span></span>
<span class="line"><span>  color?: ResourceColor</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export interface OmniDialogButtonArgs {</span></span>
<span class="line"><span>  value: string</span></span>
<span class="line"><span>  fontStyle?: OmniDialogFontStyle</span></span>
<span class="line"><span>  padding?: Padding | Length | LocalizedPadding</span></span>
<span class="line"><span>  backgroundColor?: ResourceColor</span></span>
<span class="line"><span>  border?: BorderOptions</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export interface OmniDialogDividerOptions {</span></span>
<span class="line"><span>  strokeWidth?: number | string</span></span>
<span class="line"><span>  color?: ResourceColor</span></span>
<span class="line"><span>  margin?: Margin | Length | LocalizedMargin</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="omnidialogargs" tabindex="-1">OmniDialogArgs <a class="header-anchor" href="#omnidialogargs" aria-label="Permalink to &quot;OmniDialogArgs&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">titleBuilder</td><td style="text-align:left;">VoidCallback</td><td style="text-align:left;">否</td><td style="text-align:left;">标题区域的builder函数</td></tr><tr><td style="text-align:left;">contentBuilder</td><td style="text-align:left;">VoidCallback</td><td style="text-align:left;">否</td><td style="text-align:left;">内容区域的builder函数</td></tr><tr><td style="text-align:left;">buttonBuilder</td><td style="text-align:left;">(controller?: OmniDialogController) =&gt; void</td><td style="text-align:left;">否</td><td style="text-align:left;">按键区域的builder函数，controller用于关闭dialog<br><code>controller?.dismiss()</code></td></tr><tr><td style="text-align:left;">titleArgs</td><td style="text-align:left;">OmniDialogTextArgs</td><td style="text-align:left;">否</td><td style="text-align:left;">标题区内容及样式设置</td></tr><tr><td style="text-align:left;">contentArgs</td><td style="text-align:left;">OmniDialogTextArgs</td><td style="text-align:left;">否</td><td style="text-align:left;">内容区内容及样式设置</td></tr><tr><td style="text-align:left;">leftButtonArgs</td><td style="text-align:left;">OmniDialogButtonArgs</td><td style="text-align:left;">否</td><td style="text-align:left;">左边按键内容及样式设置</td></tr><tr><td style="text-align:left;">rightButtonArgs</td><td style="text-align:left;">OmniDialogButtonArgs</td><td style="text-align:left;">否</td><td style="text-align:left;">右边按键内容及样式设置</td></tr><tr><td style="text-align:left;">onLeftButtonClick</td><td style="text-align:left;">(event: ClickEvent) =&gt; void</td><td style="text-align:left;">否</td><td style="text-align:left;">左边按键的点击回调</td></tr><tr><td style="text-align:left;">onRightButtonClick</td><td style="text-align:left;">(event: ClickEvent) =&gt; void</td><td style="text-align:left;">否</td><td style="text-align:left;">右边按键的点击回调</td></tr><tr><td style="text-align:left;">dialogBorder</td><td style="text-align:left;">BorderOptions</td><td style="text-align:left;">否</td><td style="text-align:left;">对话框的边框样式设置</td></tr><tr><td style="text-align:left;">dialogBgColor</td><td style="text-align:left;">ResourceColor</td><td style="text-align:left;">否</td><td style="text-align:left;">对话框的背板颜色设置</td></tr><tr><td style="text-align:left;">dialogDivider</td><td style="text-align:left;">OmniDialogDividerOptions</td><td style="text-align:left;">否</td><td style="text-align:left;">对话框中分割线样式设置</td></tr><tr><td style="text-align:left;">isModal</td><td style="text-align:left;">boolean</td><td style="text-align:left;">否</td><td style="text-align:left;">弹窗是否为模态窗口</td></tr><tr><td style="text-align:left;">showInSubWindow</td><td style="text-align:left;">boolean</td><td style="text-align:left;">否</td><td style="text-align:left;">某弹框需要显示在主窗口之外时，是否在子窗口显示此弹窗。</td></tr><tr><td style="text-align:left;">autoCancel</td><td style="text-align:left;">boolean</td><td style="text-align:left;">否</td><td style="text-align:left;">点击遮障层时，是否关闭弹窗</td></tr><tr><td style="text-align:left;">alignment</td><td style="text-align:left;">DialogAlignment</td><td style="text-align:left;">否</td><td style="text-align:left;">弹窗在竖直方向上的对齐方式</td></tr><tr><td style="text-align:left;">offset</td><td style="text-align:left;">Offset</td><td style="text-align:left;">否</td><td style="text-align:left;">弹窗相对alignment所在位置的偏移量</td></tr><tr><td style="text-align:left;">transition</td><td style="text-align:left;">TransitionEffect</td><td style="text-align:left;">否</td><td style="text-align:left;">弹窗显示和退出的过渡效果</td></tr><tr><td style="text-align:left;">maskColor</td><td style="text-align:left;">ResourceColor</td><td style="text-align:left;">否</td><td style="text-align:left;">蒙层颜色</td></tr><tr><td style="text-align:left;">onDidAppear</td><td style="text-align:left;">VoidCallback</td><td style="text-align:left;">否</td><td style="text-align:left;">弹窗弹出时的事件回调</td></tr><tr><td style="text-align:left;">onDidDisappear</td><td style="text-align:left;">VoidCallback</td><td style="text-align:left;">否</td><td style="text-align:left;">弹窗消失时的事件回调</td></tr></tbody></table><h3 id="omnidialogtextargs" tabindex="-1">OmniDialogTextArgs <a class="header-anchor" href="#omnidialogtextargs" aria-label="Permalink to &quot;OmniDialogTextArgs&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">value</td><td style="text-align:left;">string</td><td style="text-align:left;">是</td><td style="text-align:left;">文本内容</td></tr><tr><td style="text-align:left;">style</td><td style="text-align:left;">OmniDialogFontStyle</td><td style="text-align:left;">否</td><td style="text-align:left;">文本字体样式</td></tr><tr><td style="text-align:left;">padding</td><td style="text-align:left;">Padding | Length | LocalizedPadding</td><td style="text-align:left;">否</td><td style="text-align:left;">文本内边距</td></tr></tbody></table><h3 id="omnidialogfontstyle" tabindex="-1">OmniDialogFontStyle <a class="header-anchor" href="#omnidialogfontstyle" aria-label="Permalink to &quot;OmniDialogFontStyle&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">font</td><td style="text-align:left;">Font</td><td style="text-align:left;">否</td><td style="text-align:left;">设置文本样式，包括字体大小、字体粗细、字体族和字体风格</td></tr><tr><td style="text-align:left;">color</td><td style="text-align:left;">ResourceColor</td><td style="text-align:left;">否</td><td style="text-align:left;">设置文本字体颜色</td></tr></tbody></table><h3 id="omnidialogbuttonargs" tabindex="-1">OmniDialogButtonArgs <a class="header-anchor" href="#omnidialogbuttonargs" aria-label="Permalink to &quot;OmniDialogButtonArgs&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">value</td><td style="text-align:left;">string</td><td style="text-align:left;">是</td><td style="text-align:left;">设置按键的内容文本</td></tr><tr><td style="text-align:left;">fontStyle</td><td style="text-align:left;">OmniDialogFontStyle</td><td style="text-align:left;">否</td><td style="text-align:left;">设置按键的文本样式</td></tr><tr><td style="text-align:left;">padding</td><td style="text-align:left;">Padding | Length | LocalizedPadding</td><td style="text-align:left;">否</td><td style="text-align:left;">设置按键的内边距</td></tr><tr><td style="text-align:left;">backgroundColor</td><td style="text-align:left;">ResourceColor</td><td style="text-align:left;">否</td><td style="text-align:left;">设置按键的背景颜色</td></tr><tr><td style="text-align:left;">border</td><td style="text-align:left;">BorderOptions</td><td style="text-align:left;">否</td><td style="text-align:left;">设置按键的边框样式</td></tr></tbody></table><h3 id="omnidialogdivideroptions" tabindex="-1">OmniDialogDividerOptions <a class="header-anchor" href="#omnidialogdivideroptions" aria-label="Permalink to &quot;OmniDialogDividerOptions&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">strokeWidth</td><td style="text-align:left;">number | string</td><td style="text-align:left;">否</td><td style="text-align:left;">分割线的宽度</td></tr><tr><td style="text-align:left;">color</td><td style="text-align:left;">ResourceColor</td><td style="text-align:left;">否</td><td style="text-align:left;">分割线的颜色</td></tr><tr><td style="text-align:left;">margin</td><td style="text-align:left;">Margin | Length | LocalizedMargin</td><td style="text-align:left;">否</td><td style="text-align:left;">分割线的外边距</td></tr></tbody></table><h2 id="四、代码演示" tabindex="-1">四、代码演示 <a class="header-anchor" href="#四、代码演示" aria-label="Permalink to &quot;四、代码演示&quot;">​</a></h2><h3 id="示例一-单个按钮" tabindex="-1">示例一：单个按钮 <a class="header-anchor" href="#示例一-单个按钮" aria-label="Permalink to &quot;示例一：单个按钮&quot;">​</a></h3><img src="`+e+`" width="200"><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Entry</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>struct DialogExample {</span></span>
<span class="line"><span>  private dialog: OmniDialog = new OmniDialog(this.getUIContext())</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>  build() {</span></span>
<span class="line"><span>    Column() {</span></span>
<span class="line"><span>      Button(&#39;单个按钮&#39;).onClick(() =&gt; {</span></span>
<span class="line"><span>            this.dialog.show({</span></span>
<span class="line"><span>              titleArgs: { value: &#39;标题&#39; },</span></span>
<span class="line"><span>              contentArgs: { value: &#39;文案文案文案文案文案文案文案文案文案文案文案文案&#39; },</span></span>
<span class="line"><span>              leftButtonArgs: { value: &#39;确定&#39;, fontStyle: { color: 0x4086f1 } },</span></span>
<span class="line"><span>              onLeftButtonClick: () =&gt; {</span></span>
<span class="line"><span>                this.dialog.dismiss()</span></span>
<span class="line"><span>                OmniToast.showText({ msg: &#39;点击确定&#39; })</span></span>
<span class="line"><span>              },</span></span>
<span class="line"><span>              dialogDivider: { margin: { left: 8, right: 8 } }</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>          })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }  </span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="示例二-两个按钮" tabindex="-1">示例二：两个按钮 <a class="header-anchor" href="#示例二-两个按钮" aria-label="Permalink to &quot;示例二：两个按钮&quot;">​</a></h3><img src="`+p+`" width="200"><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Entry</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>struct DialogExample {</span></span>
<span class="line"><span>  private dialog: OmniDialog = new OmniDialog(this.getUIContext())</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>  build() {</span></span>
<span class="line"><span>    Column() {</span></span>
<span class="line"><span>      Button(&#39;两个按钮&#39;).onClick(() =&gt; {</span></span>
<span class="line"><span>            this.dialog.show({</span></span>
<span class="line"><span>              titleArgs: { value: &#39;标题&#39; },</span></span>
<span class="line"><span>              contentArgs: { value: &#39;这是正文内容&#39; },</span></span>
<span class="line"><span>              leftButtonArgs: { value: &#39;取消&#39;, fontStyle: { color: 0x303030 } },</span></span>
<span class="line"><span>              onLeftButtonClick: () =&gt; {</span></span>
<span class="line"><span>                this.dialog.dismiss()</span></span>
<span class="line"><span>                OmniToast.showText({ msg: &#39;点击取消&#39; })</span></span>
<span class="line"><span>              },</span></span>
<span class="line"><span>              rightButtonArgs: {</span></span>
<span class="line"><span>                value: &#39;确定&#39;,</span></span>
<span class="line"><span>                fontStyle: { color: Color.White, font: { weight: FontWeight.Bold, size: 20 } },</span></span>
<span class="line"><span>                backgroundColor: 0x3b82f1,</span></span>
<span class="line"><span>                border: { radius: { bottomRight: 10 } }</span></span>
<span class="line"><span>              },</span></span>
<span class="line"><span>              onRightButtonClick: () =&gt; {</span></span>
<span class="line"><span>                this.dialog.dismiss()</span></span>
<span class="line"><span>                OmniToast.showText({ msg: &#39;点击确定&#39; })</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>          })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }  </span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="示例三-自定义标题" tabindex="-1">示例三：自定义标题 <a class="header-anchor" href="#示例三-自定义标题" aria-label="Permalink to &quot;示例三：自定义标题&quot;">​</a></h3><img src="`+i+`" width="200"><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Entry</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>struct DialogExample {</span></span>
<span class="line"><span>  private dialog: OmniDialog = new OmniDialog(this.getUIContext())</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>  build() {</span></span>
<span class="line"><span>    Column() {</span></span>
<span class="line"><span>      Button(&#39;自定义标题&#39;).onClick(() =&gt; {</span></span>
<span class="line"><span>            this.dialog.show({</span></span>
<span class="line"><span>              titleBuilder: myTitleBuilder,</span></span>
<span class="line"><span>              contentArgs: { value: &#39;文案文案文案文案文案文案文案文案文案文案文案文案&#39; },</span></span>
<span class="line"><span>              rightButtonArgs: {</span></span>
<span class="line"><span>                value: &#39;我知道了&#39;,</span></span>
<span class="line"><span>                fontStyle: { color: 0x4086f1 },</span></span>
<span class="line"><span>              },</span></span>
<span class="line"><span>              onRightButtonClick: () =&gt; {</span></span>
<span class="line"><span>                this.dialog.dismiss()</span></span>
<span class="line"><span>                OmniToast.showText({ msg: &#39;点击我知道了&#39; })</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>          })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }  </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Builder</span></span>
<span class="line"><span>function myTitleBuilder() {</span></span>
<span class="line"><span>  Row() {</span></span>
<span class="line"><span>    Image(&#39;https://pic4.58cdn.com.cn/nowater/frs/n_v3d872cbc54d6d4c6ba1a2112513928d7c.png&#39;)</span></span>
<span class="line"><span>      .size({ width: 30, height: 30 })</span></span>
<span class="line"><span>    Text(&#39;这是标题&#39;)</span></span>
<span class="line"><span>      .font({</span></span>
<span class="line"><span>        weight: FontWeight.Bold,</span></span>
<span class="line"><span>        size: 20</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>      .fontColor(0xFF333333)</span></span>
<span class="line"><span>      .padding(10)</span></span>
<span class="line"><span>    Image(&#39;https://pic4.58cdn.com.cn/nowater/frs/n_v3d872cbc54d6d4c6ba1a2112513928d7c.png&#39;)</span></span>
<span class="line"><span>      .size({ width: 30, height: 30 })</span></span>
<span class="line"><span>  }.alignItems(VerticalAlign.Center)</span></span>
<span class="line"><span>  .justifyContent(FlexAlign.Center)</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="示例四-自定义内容" tabindex="-1">示例四：自定义内容 <a class="header-anchor" href="#示例四-自定义内容" aria-label="Permalink to &quot;示例四：自定义内容&quot;">​</a></h3><img src="`+o+`" width="200"><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Entry</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>struct DialogExample {</span></span>
<span class="line"><span>  private dialog: OmniDialog = new OmniDialog(this.getUIContext())</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>  build() {</span></span>
<span class="line"><span>    Column() {</span></span>
<span class="line"><span>      Button(&#39;自定义内容&#39;).onClick(() =&gt; {</span></span>
<span class="line"><span>            this.dialog.show({</span></span>
<span class="line"><span>              titleArgs: { value: &#39;标题标题标题hello这是标题&#39; },</span></span>
<span class="line"><span>              rightButtonArgs: {</span></span>
<span class="line"><span>                value: &#39;我知道了&#39;,</span></span>
<span class="line"><span>                fontStyle: { color: 0x4086f1 },</span></span>
<span class="line"><span>              },</span></span>
<span class="line"><span>              onRightButtonClick: () =&gt; {</span></span>
<span class="line"><span>                this.dialog.dismiss()</span></span>
<span class="line"><span>                OmniToast.showText({ msg: &#39;点击我知道了&#39; })</span></span>
<span class="line"><span>              },</span></span>
<span class="line"><span>              contentBuilder: this.myContentBuilder,</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>          })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  } </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  @Builder</span></span>
<span class="line"><span>  myContentBuilder() {</span></span>
<span class="line"><span>    Column({ space: 10 }) {</span></span>
<span class="line"><span>      Text(&#39;多行内容&#39;)</span></span>
<span class="line"><span>      Text(&#39;这是第二行&#39;)</span></span>
<span class="line"><span>        .backgroundColor(0xeb4e27)</span></span>
<span class="line"><span>      Text(&#39;这是第三行&#39;)</span></span>
<span class="line"><span>    }.width(&#39;80%&#39;)</span></span>
<span class="line"><span>    .backgroundColor(0x5abe43)</span></span>
<span class="line"><span>    .borderRadius(6)</span></span>
<span class="line"><span>  } </span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="示例五-自定义按钮" tabindex="-1">示例五：自定义按钮 <a class="header-anchor" href="#示例五-自定义按钮" aria-label="Permalink to &quot;示例五：自定义按钮&quot;">​</a></h3><img src="`+d+`" width="200"><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Entry</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>struct DialogExample {</span></span>
<span class="line"><span>  private dialog: OmniDialog = new OmniDialog(this.getUIContext())</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>  build() {</span></span>
<span class="line"><span>    Column() {</span></span>
<span class="line"><span>      Button(&#39;自定义按钮&#39;).onClick(() =&gt; {</span></span>
<span class="line"><span>            this.dialog.show({</span></span>
<span class="line"><span>              titleArgs: { value: &#39;标题标题标题hello这是标题&#39; },</span></span>
<span class="line"><span>              contentArgs: { value: &#39;这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容&#39; },</span></span>
<span class="line"><span>              buttonBuilder: myButtonBuilder,</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>          })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }  </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Builder</span></span>
<span class="line"><span>function myButtonBuilder(controller?: OmniDialogController) {</span></span>
<span class="line"><span>  Column() {</span></span>
<span class="line"><span>    Divider()</span></span>
<span class="line"><span>      .vertical(false)</span></span>
<span class="line"><span>      .strokeWidth(0.5)</span></span>
<span class="line"><span>      .color(0x99999999)</span></span>
<span class="line"><span>    Text(&#39;选项一&#39;)</span></span>
<span class="line"><span>      .textAlign(TextAlign.Center)</span></span>
<span class="line"><span>      .fontColor(0xFF333333)</span></span>
<span class="line"><span>      .fontSize(20)</span></span>
<span class="line"><span>      .padding(10)</span></span>
<span class="line"><span>      .onClick(() =&gt; {</span></span>
<span class="line"><span>        controller?.dismiss()</span></span>
<span class="line"><span>        OmniToast.showText({ msg: &#39;点击了选项一&#39; })</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>      .width(&#39;100%&#39;)</span></span>
<span class="line"><span>    Divider()</span></span>
<span class="line"><span>      .vertical(false)</span></span>
<span class="line"><span>      .strokeWidth(0.5)</span></span>
<span class="line"><span>      .color(0x99999999)</span></span>
<span class="line"><span>    Text(&#39;选项二&#39;)</span></span>
<span class="line"><span>      .textAlign(TextAlign.Center)</span></span>
<span class="line"><span>      .fontColor(0xFF333333)</span></span>
<span class="line"><span>      .fontSize(20)</span></span>
<span class="line"><span>      .padding(10)</span></span>
<span class="line"><span>      .onClick(() =&gt; {</span></span>
<span class="line"><span>        controller?.dismiss()</span></span>
<span class="line"><span>        OmniToast.showText({ msg: &#39;点击了选项二&#39; })</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>      .width(&#39;100%&#39;)</span></span>
<span class="line"><span>    Divider()</span></span>
<span class="line"><span>      .vertical(false)</span></span>
<span class="line"><span>      .strokeWidth(0.5)</span></span>
<span class="line"><span>      .color(0x99999999)</span></span>
<span class="line"><span>    Text(&#39;选项三&#39;)</span></span>
<span class="line"><span>      .textAlign(TextAlign.Center)</span></span>
<span class="line"><span>      .fontColor(0xFF333333)</span></span>
<span class="line"><span>      .fontSize(20)</span></span>
<span class="line"><span>      .padding(10)</span></span>
<span class="line"><span>      .onClick(() =&gt; {</span></span>
<span class="line"><span>        controller?.dismiss()</span></span>
<span class="line"><span>        OmniToast.showText({ msg: &#39;点击了选项三&#39; })</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>      .width(&#39;100%&#39;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="示例六-组件调用" tabindex="-1">示例六：组件调用 <a class="header-anchor" href="#示例六-组件调用" aria-label="Permalink to &quot;示例六：组件调用&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Entry</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>struct DialogExample {</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>  build() {</span></span>
<span class="line"><span>    Column() {</span></span>
<span class="line"><span>      OmniCustomDialog({</span></span>
<span class="line"><span>            titleArgs: { value: &#39;组件调用方式&#39; },</span></span>
<span class="line"><span>            contentArgs: {</span></span>
<span class="line"><span>              value: &#39;组件调用方式组件调用方式组件调用方式&#39;</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            dialogBorder: { width: 2, radius: 6, color: 0x333333 },</span></span>
<span class="line"><span>            rightButtonArgs: {</span></span>
<span class="line"><span>              value: &#39;我知道了&#39;,</span></span>
<span class="line"><span>              fontStyle: { color: 0x4086f1 },</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>          })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }  </span></span>
<span class="line"><span>}</span></span></code></pre></div>`,35),r=[g];function h(x,f,u,y,m,b){return a(),s("div",null,r)}const k=n(c,[["render",h]]);export{v as __pageData,k as default};
