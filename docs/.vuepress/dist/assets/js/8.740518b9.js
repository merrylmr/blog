(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{393:function(t,e,s){"use strict";s.r(e);var n=s(54),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vue-transition探索"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-transition探索"}},[t._v("#")]),t._v(" Vue transition探索")]),t._v(" "),s("p",[t._v("使用过Vue的小伙伴都知道，Vue的内置组件"),s("code",[t._v("transition")]),t._v(",在以下情况，可以给单个元素/组件添加进入/离开的过渡")]),t._v(" "),s("ul",[s("li",[t._v("条件渲染（v-if）")]),t._v(" "),s("li",[t._v("条件展示（v-show）")]),t._v(" "),s("li",[t._v("动态组件")]),t._v(" "),s("li",[t._v("组件根节点")])]),t._v(" "),s("p",[t._v("这篇文章主要解密：条件展示（"),s("code",[t._v("v-show")]),t._v("）下，html+css+js实现一个简单的"),s("code",[t._v("transition")])]),t._v(" "),s("p",[t._v("先来看看vue官网文档:"),s("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/transitions.html#CSS-%E8%BF%87%E6%B8%A1",target:"_blank",rel:"noopener noreferrer"}},[t._v("进入/离开&列表过渡"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"vue的过渡实现步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue的过渡实现步骤"}},[t._v("#")]),t._v(" Vue的过渡实现步骤")]),t._v(" "),s("blockquote",[s("p",[t._v("1.自动嗅探目标元素是否应用了 CSS 过渡或动画，如果是，在恰当的时机添加/删除 CSS 类名\n2.如果过渡组件提供了 JavaScript 钩子函数，这些钩子函数将在恰当的时机被调用\n3.如果没有找到 JavaScript 钩子并且也没有检测到 CSS 过渡/动画，DOM 操作 (插入/删除) 在下一帧中立即执行")])]),t._v(" "),s("p",[t._v("所以真正执行动画的是"),s("strong",[t._v("我们写的css或者javascript钩子函数")]),t._v("，而Vue的"),s("code",[t._v("transtion")]),t._v("只是帮我们很好地管理了这些css的添加/删除，以及钩子函数的执行时机。")]),t._v(" "),s("h3",{attrs:{id:"过渡的类名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#过渡的类名"}},[t._v("#")]),t._v(" 过渡的类名")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("name")]),t._v(" "),s("th",[t._v("定义")]),t._v(" "),s("th",[t._v("添加时间")]),t._v(" "),s("th",[t._v("移除时间")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("v-enter")]),t._v(" "),s("td",[t._v("过渡的开始状态")]),t._v(" "),s("td",[t._v("元素被插入之前")]),t._v(" "),s("td",[t._v("元素被插入的下一帧移除")])]),t._v(" "),s("tr",[s("td",[t._v("v-enter-active")]),t._v(" "),s("td",[t._v("过渡生效时候的状态")]),t._v(" "),s("td",[t._v("被插入之前")]),t._v(" "),s("td",[s("strong",[t._v("过渡/动画完成")]),t._v("后")])]),t._v(" "),s("tr",[s("td",[t._v("v-enter-to")]),t._v(" "),s("td",[t._v("过渡结束状态")]),t._v(" "),s("td",[t._v("元素被插入之后下一帧")]),t._v(" "),s("td",[s("strong",[t._v("过渡/动画完成")]),t._v("后")])]),t._v(" "),s("tr",[s("td",[t._v("v-leave")]),t._v(" "),s("td",[t._v("离开过渡的开始状态")]),t._v(" "),s("td",[t._v("离开过渡触发时刻")]),t._v(" "),s("td",[t._v("下一帧")])]),t._v(" "),s("tr",[s("td",[t._v("v-leave-active")]),t._v(" "),s("td",[t._v("离开过渡生效的状态")]),t._v(" "),s("td",[t._v("离开过渡触发")]),t._v(" "),s("td",[s("strong",[t._v("过渡/动画完成")]),t._v("后")])]),t._v(" "),s("tr",[s("td",[t._v("v-leave-to")]),t._v(" "),s("td",[t._v("离开过渡结束状态")]),t._v(" "),s("td",[t._v("离开过渡触发下一帧")]),t._v(" "),s("td",[s("strong",[t._v("过渡/动画完成")]),t._v("后")])])])]),t._v(" "),s("p",[t._v("过渡/动画完成后移除class：怎么判断过渡/动画是否完成?可以监听对应的事件：")]),t._v(" "),s("ul",[s("li",[t._v("过渡完成："),s("code",[t._v("transitionend")])]),t._v(" "),s("li",[t._v("动画完成："),s("code",[t._v("animationend")])])]),t._v(" "),s("p",[t._v("了解了以上知识点，实现一个简单的transition就非常的简单了。\n查看"),s("a",{attrs:{href:"https://merrylmr.github.io/vue-theory-analysis/",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo"),s("OutboundLink")],1),t._v("效果："),s("a",{attrs:{href:"https://merrylmr.github.io/vue-theory-analysis/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://merrylmr.github.io/vue-theory-analysis/"),s("OutboundLink")],1),t._v(" "),s("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/11899053-3f59f003db21ee52.gif?imageMogr2/auto-orient/strip",alt:"效果图"}})]),t._v(" "),s("h2",{attrs:{id:"核心源码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#核心源码"}},[t._v("#")]),t._v(" 核心源码")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  class Transition {\n    constructor(el, name, show) {\n      this.el = el\n      this.show = show || false // el初始状态，显示or隐藏\n      this.x = this.autoCssTransition(name)\n\n      this.enterCb = function () {\n        el.style.display = 'block'\n      }\n      this.leaveCb = function () {\n        el.style.display = 'none'\n      }\n      this.init(el)\n    }\n\n    autoCssTransition(name) {\n      return {\n        enterClass: `${name}-enter`, // start-class\n        enterToClass: `${name}-enter-to`, // toClass\n        enterActiveClass: `${name}-enter-active`, //动画完成删除\n        leaveClass: `${name}-leave`,\n        leaveToClass: `${name}-leave-to`,\n        leaveActiveClass: `${name}-leave-active`\n      }\n    }\n\n    addTransitionClass(el, cls) {\n      el.classList.add(cls)\n    }\n\n    removeTransitionClass(el, cls) {\n      el.classList.remove(cls)\n    }\n\n    init(el) {\n      if (!this.show) {\n        el.style.display = 'none'\n      }\n\n      let {\n        enterToClass,\n        enterActiveClass,\n        leaveToClass,\n        leaveActiveClass\n      } = this.x\n\n      let cb = () => {\n        if (this.show) {\n          this.removeTransitionClass(el, enterToClass)\n          this.removeTransitionClass(el, enterActiveClass)\n\n        } else {\n          this.removeTransitionClass(el, leaveToClass)\n          this.removeTransitionClass(el, leaveActiveClass)\n          this.leaveCb()\n        }\n      }\n//     监听CSS过渡执行完成\n      el.addEventListener('transitionend', cb)\n//      监听css动画动画执行完成\n      el.addEventListener('animationend', cb)\n    }\n\n    enter() {\n      this.show = true\n      this.enterCb()\n      this.addTransitionClass(this.el, this.x.enterClass)\n      this.addTransitionClass(this.el, this.x.enterActiveClass)\n      // 下一帧\n      nextFrame(() => {\n        this.removeTransitionClass(this.el, this.x.enterClass)\n        this.addTransitionClass(this.el, this.x.enterToClass)\n      })\n    }\n\n    leave() {\n      this.show = false\n      this.addTransitionClass(this.el, this.x.leaveClass)\n      this.addTransitionClass(this.el, this.x.leaveActiveClass)\n   // 下一帧\n      nextFrame(() => {\n        this.removeTransitionClass(this.el, this.x.leaveClass)\n        this.addTransitionClass(this.el, this.x.leaveToClass)\n      })\n    }\n\n    toggle() {\n      if (!this.show) {\n        this.enter()\n      } else {\n        this.leave()\n      }\n    }\n  }\n")])])]),s("h2",{attrs:{id:"简单使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简单使用"}},[t._v("#")]),t._v(" 简单使用")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// css\n .slide-top-enter,\n    .slide-top-leave-to {\n      transform: translateY(-100%);\n    }\n\n    .slide-top-enter-active,\n    .slide-top-leave-active {\n      transition: all 0.3s ease;\n    }\n// js:\n let instance = new Transition(box, 'slide-top')\n  btn.addEventListener('click', () => {\n    instance.toggle()\n  })\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);