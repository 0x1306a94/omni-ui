import{_ as n,c as a,o as s,a2 as e}from"./chunks/framework.CexspsV9.js";const t="/omni-ui/assets/datapicker.01c4z7ca.gif",p="/omni-ui/assets/datapicker1.BSFv1awe.gif",l="/omni-ui/assets/datapicker3.Cy4gdiXo.gif",i="/omni-ui/assets/datapicker2.DFEieX6g.gif",y=JSON.parse('{"title":"单选/多选选择器DataPicker","description":"","frontmatter":{},"headers":[],"relativePath":"components/form/datapicker.md","filePath":"components/form/datapicker.md"}'),c={name:"components/form/datapicker.md"},r=e('<h1 id="单选-多选选择器datapicker" tabindex="-1">单选/多选选择器DataPicker <a class="header-anchor" href="#单选-多选选择器datapicker" aria-label="Permalink to &quot;单选/多选选择器DataPicker&quot;">​</a></h1><h2 id="一、效果总览" tabindex="-1">一、效果总览 <a class="header-anchor" href="#一、效果总览" aria-label="Permalink to &quot;一、效果总览&quot;">​</a></h2><img src="'+t+`" width="200"><h2 id="二、描述" tabindex="-1">二、描述 <a class="header-anchor" href="#二、描述" aria-label="Permalink to &quot;二、描述&quot;">​</a></h2><p>底部弹出的数据选择器，支持单选、多选和级联多选</p><h2 id="三、构造函数及参数说明" tabindex="-1">三、构造函数及参数说明 <a class="header-anchor" href="#三、构造函数及参数说明" aria-label="Permalink to &quot;三、构造函数及参数说明&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>DataPicker.getInstance(uiContext: UIContext).show(options: PickerOptions)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface PickerOptions {</span></span>
<span class="line"><span>  range: string[] | string[][] | TextCascadePickerRangeContentWrapper[]</span></span>
<span class="line"><span>  selected?: number | number[]</span></span>
<span class="line"><span>  theme?: PickerTheme</span></span>
<span class="line"><span>  canLoop?: boolean</span></span>
<span class="line"><span>  confirmText?: string | Resource</span></span>
<span class="line"><span>  cancelText?: string | Resource</span></span>
<span class="line"><span>  title?: string | Resource</span></span>
<span class="line"><span>  onConfirm?: (v: string | string[], i: number | number[]) =&gt; void</span></span>
<span class="line"><span>  onCancel?: (v: string | string[], i: number | number[]) =&gt; void</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface PickerTheme {</span></span>
<span class="line"><span>  divider?: DividerOptions</span></span>
<span class="line"><span>  textStyle?: PickerTextStyle</span></span>
<span class="line"><span>  selectedTextStyle?: PickerTextStyle</span></span>
<span class="line"><span>  confirmBtnStyle?: TextStyle</span></span>
<span class="line"><span>  cancelBtnStyle?: TextStyle</span></span>
<span class="line"><span>  titleTextStyle?: TextStyle</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="pickeroptions" tabindex="-1">PickerOptions <a class="header-anchor" href="#pickeroptions" aria-label="Permalink to &quot;PickerOptions&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">range</td><td style="text-align:left;">string[] | string[][] | TextCascadePickerRangeContentWrapper[]</td><td style="text-align:left;">是</td><td style="text-align:left;">选择器的数据选择列表</td></tr><tr><td style="text-align:left;">selected</td><td style="text-align:left;">number | number[]</td><td style="text-align:left;">否</td><td style="text-align:left;">设置默认选中项在数组中的索引值。</td></tr><tr><td style="text-align:left;">theme</td><td style="text-align:left;">PickerTheme</td><td style="text-align:left;">否</td><td style="text-align:left;">设置选择器的样式</td></tr><tr><td style="text-align:left;">canLoop</td><td style="text-align:left;">boolean</td><td style="text-align:left;">否</td><td style="text-align:left;">设置是否可循环滚动</td></tr><tr><td style="text-align:left;">confirmText</td><td style="text-align:left;">string | Resource</td><td style="text-align:left;">否</td><td style="text-align:left;">设置确认按钮文本</td></tr><tr><td style="text-align:left;">cancelText</td><td style="text-align:left;">string | Resource</td><td style="text-align:left;">否</td><td style="text-align:left;">设置取消按钮文本</td></tr><tr><td style="text-align:left;">title</td><td style="text-align:left;">string | Resource</td><td style="text-align:left;">否</td><td style="text-align:left;">设置标题文本</td></tr><tr><td style="text-align:left;">onConfirm</td><td style="text-align:left;">(v: string | string[], i: number | number[]) =&gt; void</td><td style="text-align:left;">否</td><td style="text-align:left;">设置确认按钮点击回调函数</td></tr><tr><td style="text-align:left;">onCancel</td><td style="text-align:left;">(v: string | string[], i: number | number[]) =&gt; void</td><td style="text-align:left;">否</td><td style="text-align:left;">设置取消按钮点击回调函数</td></tr></tbody></table><h3 id="pickertheme" tabindex="-1">PickerTheme <a class="header-anchor" href="#pickertheme" aria-label="Permalink to &quot;PickerTheme&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">divider</td><td style="text-align:left;">DividerOptions</td><td style="text-align:left;">否</td><td style="text-align:left;">设置分割线的样式</td></tr><tr><td style="text-align:left;">textStyle</td><td style="text-align:left;">PickerTextStyle</td><td style="text-align:left;">否</td><td style="text-align:left;">设置未选中文字的文本颜色、字号、字体粗细</td></tr><tr><td style="text-align:left;">selectedTextStyle</td><td style="text-align:left;">PickerTextStyle</td><td style="text-align:left;">否</td><td style="text-align:left;">设置选中文字的文本颜色、字号、字体粗细</td></tr><tr><td style="text-align:left;">confirmBtnStyle</td><td style="text-align:left;">TextStyle</td><td style="text-align:left;">否</td><td style="text-align:left;">设置确认按键的文字样式，包括文本颜色、字号、粗细、风格和列表</td></tr></tbody></table><h2 id="四、代码演示" tabindex="-1">四、代码演示 <a class="header-anchor" href="#四、代码演示" aria-label="Permalink to &quot;四、代码演示&quot;">​</a></h2><h3 id="示例一-单选" tabindex="-1">示例一：单选 <a class="header-anchor" href="#示例一-单选" aria-label="Permalink to &quot;示例一：单选&quot;">​</a></h3><img src="`+p+`" width="200"><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Entry</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>struct DataPickerExample {</span></span>
<span class="line"><span>  @State private alphabet: string[] =</span></span>
<span class="line"><span>    [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39;, &#39;f&#39;, &#39;g&#39;, &#39;h&#39;, &#39;i&#39;, &#39;j&#39;, &#39;k&#39;, &#39;l&#39;, &#39;m&#39;, &#39;o&#39;, &#39;p&#39;, &#39;q&#39;, &#39;r&#39;, &#39;s&#39;, &#39;t&#39;, &#39;u&#39;,</span></span>
<span class="line"><span>      &#39;w&#39;, &#39;x&#39;, &#39;y&#39;, &#39;z&#39;]</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>  build() {</span></span>
<span class="line"><span>    Column() {</span></span>
<span class="line"><span>      Button(&#39;单列选择器&#39;)</span></span>
<span class="line"><span>          .onClick(() =&gt; {</span></span>
<span class="line"><span>            DataPicker.getInstance(this.getUIContext()).show({</span></span>
<span class="line"><span>              range: this.alphabet,</span></span>
<span class="line"><span>              title: &#39;请选择一个字母&#39;,</span></span>
<span class="line"><span>              onConfirm: (v, i) =&gt; {</span></span>
<span class="line"><span>                Toast.showText({ msg: &#39;选中的值为：&#39; + v + &#39;, 选中的索引为: &#39; + i })</span></span>
<span class="line"><span>              },</span></span>
<span class="line"><span>              onCancel: () =&gt; {</span></span>
<span class="line"><span>                Toast.showText({ msg: &#39;点击取消按钮&#39; })</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>          })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }  </span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="示例二-多选" tabindex="-1">示例二：多选 <a class="header-anchor" href="#示例二-多选" aria-label="Permalink to &quot;示例二：多选&quot;">​</a></h3><img src="`+l+`" width="200"><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Entry</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>struct DataPickerExample {</span></span>
<span class="line"><span>  private fruits: string[] = [&#39;apple&#39;, &#39;orange&#39;, &#39;banana&#39;, &#39;peach&#39;, &#39;pineapple&#39;]</span></span>
<span class="line"><span>  private animals: string[] = [&#39;ant&#39;, &#39;elephant&#39;, &#39;monkey&#39;, &#39;panda&#39;, &#39;cat&#39;, &#39;mouse&#39;]</span></span>
<span class="line"><span>  private colors: string[] = [&#39;red&#39;, &#39;black&#39;, &#39;blue&#39;, &#39;pink&#39;, &#39;yellow&#39;]</span></span>
<span class="line"><span>  @State private multi: string[][] = [this.fruits, this.animals, this.colors]</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>  build() {</span></span>
<span class="line"><span>    Column() {</span></span>
<span class="line"><span>      Button(&#39;多列选择器&#39;)</span></span>
<span class="line"><span>          .onClick(() =&gt; {</span></span>
<span class="line"><span>            DataPicker.getInstance(this.getUIContext()).show({</span></span>
<span class="line"><span>              range: this.multi,</span></span>
<span class="line"><span>              title: &#39;请选择你最喜欢的水果、动物和颜色&#39;,</span></span>
<span class="line"><span>              onConfirm: (v, i) =&gt; {</span></span>
<span class="line"><span>                Toast.showText({ msg: &#39;选中的值为：&#39; + v + &#39;, 选中的索引为: &#39; + i })</span></span>
<span class="line"><span>              },</span></span>
<span class="line"><span>              onCancel: () =&gt; {</span></span>
<span class="line"><span>                Toast.showText({ msg: &#39;点击取消按钮&#39; })</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>          })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }  </span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="示例三-级联多选" tabindex="-1">示例三：级联多选 <a class="header-anchor" href="#示例三-级联多选" aria-label="Permalink to &quot;示例三：级联多选&quot;">​</a></h3><img src="`+i+`" width="200"><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Entry</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>struct DataPickerExample {</span></span>
<span class="line"><span>  @State private cascade: TextCascadePickerRangeContentWrapper[] = [</span></span>
<span class="line"><span>    new TextCascadePickerRangeContentWrapper(&#39;北京&#39;,</span></span>
<span class="line"><span>      [new TextCascadePickerRangeContentWrapper(&#39;北京市&#39;, [</span></span>
<span class="line"><span>        new TextCascadePickerRangeContentWrapper(&#39;朝阳区&#39;),</span></span>
<span class="line"><span>        new TextCascadePickerRangeContentWrapper(&#39;其他区&#39;),</span></span>
<span class="line"><span>        new TextCascadePickerRangeContentWrapper(&#39;昌平区&#39;),</span></span>
<span class="line"><span>        new TextCascadePickerRangeContentWrapper(&#39;大兴区&#39;),</span></span>
<span class="line"><span>        new TextCascadePickerRangeContentWrapper(&#39;东城区&#39;),</span></span>
<span class="line"><span>        new TextCascadePickerRangeContentWrapper(&#39;房山区&#39;),</span></span>
<span class="line"><span>        new TextCascadePickerRangeContentWrapper(&#39;丰台区&#39;),</span></span>
<span class="line"><span>        new TextCascadePickerRangeContentWrapper(&#39;海淀区&#39;),</span></span>
<span class="line"><span>        new TextCascadePickerRangeContentWrapper(&#39;怀柔区&#39;),</span></span>
<span class="line"><span>        new TextCascadePickerRangeContentWrapper(&#39;门头沟区&#39;),</span></span>
<span class="line"><span>        new TextCascadePickerRangeContentWrapper(&#39;密云区&#39;),</span></span>
<span class="line"><span>        new TextCascadePickerRangeContentWrapper(&#39;平谷区&#39;),</span></span>
<span class="line"><span>        new TextCascadePickerRangeContentWrapper(&#39;石景山区&#39;),</span></span>
<span class="line"><span>        new TextCascadePickerRangeContentWrapper(&#39;顺义区&#39;),</span></span>
<span class="line"><span>        new TextCascadePickerRangeContentWrapper(&#39;通州区&#39;),</span></span>
<span class="line"><span>        new TextCascadePickerRangeContentWrapper(&#39;西城区&#39;),</span></span>
<span class="line"><span>        new TextCascadePickerRangeContentWrapper(&#39;延庆区&#39;),</span></span>
<span class="line"><span>      ])]),</span></span>
<span class="line"><span>    new TextCascadePickerRangeContentWrapper(&#39;天津&#39;,</span></span>
<span class="line"><span>      [new TextCascadePickerRangeContentWrapper(&#39;天津市&#39;, [</span></span>
<span class="line"><span>        new TextCascadePickerRangeContentWrapper(&#39;宝坻区&#39;),</span></span>
<span class="line"><span>        new TextCascadePickerRangeContentWrapper(&#39;北辰区&#39;),</span></span>
<span class="line"><span>        new TextCascadePickerRangeContentWrapper(&#39;滨海新区&#39;),</span></span>
<span class="line"><span>        new TextCascadePickerRangeContentWrapper(&#39;东丽区&#39;),</span></span>
<span class="line"><span>        new TextCascadePickerRangeContentWrapper(&#39;河北区&#39;),</span></span>
<span class="line"><span>        new TextCascadePickerRangeContentWrapper(&#39;河东区&#39;),</span></span>
<span class="line"><span>        new TextCascadePickerRangeContentWrapper(&#39;和平区&#39;),</span></span>
<span class="line"><span>        new TextCascadePickerRangeContentWrapper(&#39;河西区&#39;),</span></span>
<span class="line"><span>        new TextCascadePickerRangeContentWrapper(&#39;红桥区&#39;),</span></span>
<span class="line"><span>        new TextCascadePickerRangeContentWrapper(&#39;蓟州区&#39;),</span></span>
<span class="line"><span>        new TextCascadePickerRangeContentWrapper(&#39;津南区&#39;),</span></span>
<span class="line"><span>        new TextCascadePickerRangeContentWrapper(&#39;静海区&#39;),</span></span>
<span class="line"><span>        new TextCascadePickerRangeContentWrapper(&#39;南开区&#39;),</span></span>
<span class="line"><span>        new TextCascadePickerRangeContentWrapper(&#39;宁河区&#39;),</span></span>
<span class="line"><span>        new TextCascadePickerRangeContentWrapper(&#39;其他区&#39;),</span></span>
<span class="line"><span>        new TextCascadePickerRangeContentWrapper(&#39;武清区&#39;),</span></span>
<span class="line"><span>        new TextCascadePickerRangeContentWrapper(&#39;西青区&#39;),</span></span>
<span class="line"><span>      ])]),</span></span>
<span class="line"><span>    new TextCascadePickerRangeContentWrapper(&#39;河北省&#39;,</span></span>
<span class="line"><span>      [new TextCascadePickerRangeContentWrapper(&#39;保定市&#39;, [</span></span>
<span class="line"><span>        new TextCascadePickerRangeContentWrapper(&#39;安国市&#39;),</span></span>
<span class="line"><span>        new TextCascadePickerRangeContentWrapper(&#39;安新县&#39;),</span></span>
<span class="line"><span>        new TextCascadePickerRangeContentWrapper(&#39;博野县&#39;),</span></span>
<span class="line"><span>      ]),</span></span>
<span class="line"><span>        new TextCascadePickerRangeContentWrapper(&#39;沧州市&#39;, [</span></span>
<span class="line"><span>          new TextCascadePickerRangeContentWrapper(&#39;沧县&#39;),</span></span>
<span class="line"><span>          new TextCascadePickerRangeContentWrapper(&#39;东关县&#39;),</span></span>
<span class="line"><span>          new TextCascadePickerRangeContentWrapper(&#39;海兴县&#39;),</span></span>
<span class="line"><span>        ])]),</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>  build() {</span></span>
<span class="line"><span>    Column() {</span></span>
<span class="line"><span>      Button(&#39;级联选择器&#39;)</span></span>
<span class="line"><span>          .onClick(() =&gt; {</span></span>
<span class="line"><span>            DataPicker.getInstance(this.getUIContext()).show({</span></span>
<span class="line"><span>              range: this.cascade,</span></span>
<span class="line"><span>              title: &#39;请选择城市&#39;,</span></span>
<span class="line"><span>              onConfirm: (v, i) =&gt; {</span></span>
<span class="line"><span>                Toast.showText({ msg: &#39;选中的值为：&#39; + v + &#39;, 选中的索引为: &#39; + i })</span></span>
<span class="line"><span>              },</span></span>
<span class="line"><span>              onCancel: () =&gt; {</span></span>
<span class="line"><span>                Toast.showText({ msg: &#39;点击取消按钮&#39; })</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>          })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }  </span></span>
<span class="line"><span>}</span></span></code></pre></div>`,21),d=[r];function o(g,x,h,C,k,f){return s(),a("div",null,d)}const T=n(c,[["render",o]]);export{y as __pageData,T as default};
