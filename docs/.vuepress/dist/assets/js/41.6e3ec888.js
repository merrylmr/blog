(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{403:function(t,a,e){"use strict";e.r(a);var n=e(54),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"数值3为添加逗号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数值3为添加逗号"}},[t._v("#")]),t._v(" 数值3为添加逗号")]),t._v(" "),e("h2",{attrs:{id:"数值添加逗号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数值添加逗号"}},[t._v("#")]),t._v(" 数值添加逗号")]),t._v(" "),e("p",[t._v("将10000->10,000")]),t._v(" "),e("ul",[e("li",[t._v("方案1")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('function formatNum(num) {\n    if (!/^(\\+|-)?(\\d+)(\\.\\d+)?$/.test(num)) {\n        alert("wrong!");\n        return num;\n    }\n    var a = RegExp.$1, b = RegExp.$2, c = RegExp.$3;\n    b = b.replace(/\\B(?=(?:\\d{3})+\\b)/g, \',\')\n    return a + "" + b + "" + c;\n}\n')])])]),e("p",[t._v("此方案的问题：如果小数点后全为0，则最终显示的是无小数点。与echart处理的方案一致。")]),t._v(" "),e("ul",[e("li",[t._v("方案2")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  num.toLocaleString();\n")])])]),e("p",[t._v("问题：小数点最多支持3位")])])}),[],!1,null,null,null);a.default=r.exports}}]);