(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(t,e,n){"use strict";n.r(e);var a=n(6),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e.default=i.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={created:function(){this.$router.push({name:"top"})},computed:{pageStack:function(){return this.$store.state.navigator.stack},navOptions:function(){return this.$store.state.navigator.options}}}},function(t,e,n){"use strict";n.r(e);var a=n(8),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e.default=i.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"top-page",data:function(){return{title:"WebAuthn Demo"}},methods:{login:function(){this.$router.push({name:"login"})},register:function(){this.$router.push({name:"register"})},reissue:function(){this.$ons.notification.alert("Temporarily unavailable.")}}}},function(t,e,n){"use strict";n.r(e);var a=n(10),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e.default=i.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"login-page"}},function(t,e,n){"use strict";n.r(e);var a=n(12),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e.default=i.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"register-page"}},,,function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var a=function(){var t=this.$createElement,e=this._self._c||t;return e("v-ons-splitter",[e("v-ons-splitter-content",[e("v-ons-navigator",{attrs:{swipeable:"","swipe-target-width":"50px","page-stack":this.pageStack,options:this.navOptions}})],1)],1)},i=[];a._withStripped=!0},function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-ons-page",[n("v-ons-toolbar"),t._v(" "),n("section",[n("div",{staticClass:"container"},[n("div",{staticClass:"text-center m-5"},[n("h1",[t._v(t._s(t.title))])]),t._v(" "),n("div",{staticClass:"pt-4"},[n("div",{staticClass:"mx-5 mb-2 text-center"},[n("b-button",{staticClass:"w-50",attrs:{variant:"primary"},on:{click:t.login}},[t._v("Login")])],1),t._v(" "),n("div",{staticClass:"mx-5 mb-2 text-center"},[n("b-button",{staticClass:"w-50",attrs:{variant:"primary"},on:{click:t.register}},[t._v("Register")])],1),t._v(" "),n("div",{staticClass:"mx-5 mb-2 text-center"},[n("b-button",{staticClass:"w-50",attrs:{variant:"primary"},on:{click:t.reissue}},[t._v("Re-issue")])],1)])])])],1)},i=[];a._withStripped=!0},function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var a=function(){var t=this.$createElement,e=this._self._c||t;return e("v-ons-page",[e("v-ons-toolbar"),this._v(" "),e("section",[e("div",{staticClass:"container"})])],1)},i=[];a._withStripped=!0},function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var a=function(){var t=this.$createElement,e=this._self._c||t;return e("v-ons-page",[e("v-ons-toolbar"),this._v(" "),e("section",[e("div",{staticClass:"container"})])],1)},i=[];a._withStripped=!0},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=u(n(1)),i=u(n(30)),r=u(n(31));function u(t){return t&&t.__esModule?t:{default:t}}a.default.use(i.default);e.default=new i.default.Store({modules:{navigator:r.default},state:{},getters:{},actions:{},mutations:{}})},,function(t,e,n){t.exports=n(23)},function(t,e,n){"use strict";var a=f(n(19)),i=f(n(1)),r=f(n(25)),u=n(39);n(26),n(27),n(28);var o=f(n(29)),s=f(n(20)),c=f(n(32));function f(t){return t&&t.__esModule?t:{default:t}}n(37),n(38),a.default.platform.isIPhoneX()&&(document.documentElement.setAttribute("onsflag-iphonex-portrait",""),document.documentElement.setAttribute("onsflag-iphonex-landscape","")),i.default.use(u.BootstrapVue),i.default.use(r.default),new i.default({el:"#app",store:s.default,router:c.default,template:"<app></app>",components:{App:o.default}})},,,,,,function(t,e,n){"use strict";n.r(e);var a=n(15),i=n(5);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);var u=n(0),o=Object(u.a)(i.default,a.a,a.b,!1,null,null,null);o.options.__file="src/App.vue",e.default=o.exports},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={push:function(t,e){t.stack.push(e)},pop:function(t){t.stack.length>1&&t.stack.pop()},replace:function(t,e){t.stack.pop(),t.stack.push(e)},reset:function(t,e){t.stack=Array.isArray(e)?e:[e||t.stack[0]]},options:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.options=Object.assign(t.options,e)}};e.default={namespaced:!0,state:{stack:[],options:{animation:"slide"}},getters:{},actions:{},mutations:a}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=c(n(1)),i=c(n(33)),r=c(n(20)),u=c(n(34)),o=c(n(35)),s=c(n(36));function c(t){return t&&t.__esModule?t:{default:t}}a.default.use(i.default),console.log(u.default);var f=[{path:"/",name:"top",component:u.default},{path:"/login",name:"login",component:o.default},{path:"/register",name:"register",component:s.default}],l=new i.default({routes:f});l.beforeEach((function(t,e,n){r.default.commit("navigator/reset",t.matched.map((function(t){return t.components.default}))),n()})),e.default=l},,function(t,e,n){"use strict";n.r(e);var a=n(16),i=n(7);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);var u=n(0),o=Object(u.a)(i.default,a.a,a.b,!1,null,null,null);o.options.__file="src/pages/Top.vue",e.default=o.exports},function(t,e,n){"use strict";n.r(e);var a=n(17),i=n(9);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);var u=n(0),o=Object(u.a)(i.default,a.a,a.b,!1,null,null,null);o.options.__file="src/pages/Login.vue",e.default=o.exports},function(t,e,n){"use strict";n.r(e);var a=n(18),i=n(11);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);var u=n(0),o=Object(u.a)(i.default,a.a,a.b,!1,null,null,null);o.options.__file="src/pages/Register.vue",e.default=o.exports}],[[22,1,2]]]);