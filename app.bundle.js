(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CredentialService=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(42);function i(e){return function(){var t=e.apply(this,arguments);return new Promise((function(e,n){return function r(a,i){try{var s=t[a](i),o=s.value}catch(e){return void n(e)}if(!s.done)return Promise.resolve(o).then((function(e){r("next",e)}),(function(e){r("throw",e)}));e(o)}("next")}))}}t.CredentialService=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tableName="credentials"}var t,n,s,o;return r(e,[{key:"getRecord",value:(o=i(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.connection.select({from:this.tableName,where:t,limit:1});case 2:return n=e.sent,e.abrupt("return",n[0]||null);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)})},{key:"getRecords",value:(s=i(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.connection.select({from:this.tableName,where:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e){return s.apply(this,arguments)})},{key:"insertRecords",value:(n=i(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.connection.insert({into:this.tableName,values:t,upsert:!0,return:!0});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"deleteRecords",value:(t=i(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.connection.remove({from:this.tableName,where:{id:{in:t}}});case 2:return n=e.sent,console.log("Deleted "+n+" records"),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})}]),e}()},,,,function(e,t,n){"use strict";n.r(t);var r=n(20),a=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t.default=a.a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a,i,s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{!r&&o.return&&o.return()}finally{if(a)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},u=m(n(41)),c=m(n(29)),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(30)),d=n(67),f=n(15),p=n(31);function m(e){return e&&e.__esModule?e:{default:e}}function v(e){return function(){var t=e.apply(this,arguments);return new Promise((function(e,n){return function r(a,i){try{var s=t[a](i),o=s.value}catch(e){return void n(e)}if(!s.done)return Promise.resolve(o).then((function(e){r("next",e)}),(function(e){r("throw",e)}));e(o)}("next")}))}}t.default={name:"webauthn-demo-app",beforeCreate:(i=v(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.initJsStore)();case 3:e.sent?console.log("Database has been created"):console.log("Database has been opened"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),this.$ons.notification.alert({title:"",messageHTML:'<center><font size="2">Database Problem</font></center>',animation:"fade"});case 11:case"end":return e.stop()}}),e,this,[[0,7]])}))),function(){return i.apply(this,arguments)}),computed:{pageStack:function(){return this.$store.state.navigator.stack},navOptions:function(){return this.$store.state.navigator.options}},components:{},data:function(){return{title:"WebAuthn Demo",isTopPage:!0,isRegistrationPage:!1,isLoginPage:!1,registerInputData:{name:"",emailAddress:""},loginInputData:{emailAddress:""},registerFormErrors:{name:"",emailAddress:""},loginFormErrors:{emailAddress:""},relyingParty:{name:u.default.app_name,id:u.default.domain},attachment:"any",attestation:"none",assertion:null,credentials:null}},methods:{topPage:function(){this.title="WebAuthn Demo",this.isTopPage=!0,this.isLoginPage=!1,this.isRegistrationPage=!1},loginPage:function(){this.title="Login",this.isLoginPage=!0,this.isTopPage=!1,this.isRegistrationPage=!1,this.clearLoginFormData(),this.clearLoginFormErrors()},registerPage:function(){this.title="Registration",this.isRegistrationPage=!0,this.isLoginPage=!1,this.isTopPage=!1,this.clearRegisterFormData(),this.clearRegisterFormErrors()},reissuePage:function(){this.$ons.notification.alert("Temporarily unavailable.")},register:(a=v(regeneratorRuntime.mark((function e(){var t,n,r,a,i,u,d=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=c.default.validateRegistrationForm(this.registerInputData),n=o(t,2),r=n[0],a=n[1],this.clearRegisterFormErrors(),!r){e.next=4;break}return e.abrupt("return",this.registerFormErrors=a);case 4:return e.prev=4,i={rp:this.relyingParty,pubKeyCredParams:l.pubKeyCredParams,timeout:6e4,attestation:this.attestation,authenticatorSelection:"any"===this.attachment?void 0:s({},l.authenticatorSelection,{authenticatorAttachment:this.attachment}),challenge:(0,p.generateChallenge)(),user:{id:(0,p.generateId)(),name:this.registerInputData.emailAddress,displayName:this.registerInputData.name}},e.next=8,navigator.credentials.create({publicKey:i});case 8:u=e.sent,console.log("Credentials obtained",u),this.credentials=u,(new f.CredentialService).insertRecords([{rp_id:this.relyingParty.id,rp_name:this.relyingParty.name,name:this.registerInputData.name,email_address:this.registerInputData.emailAddress,raw_id:u.rawId}]).catch((function(e){console.error(e.message)})).finally((function(){console.log("finalllyyyy"),d.topPage()})),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.error(e.t0.message);case 17:case"end":return e.stop()}}),e,this,[[4,14]])}))),function(){return a.apply(this,arguments)}),authenticate:(r=v(regeneratorRuntime.mark((function e(){var t,n,r,a,i,s,u,d=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this,n=c.default.validateLoginForm(t.loginInputData),r=o(n,2),a=r[0],i=r[1],t.clearLoginFormErrors(),!a){e.next=5;break}return e.abrupt("return",t.loginFormErrors=i);case 5:return e.next=7,(new f.CredentialService).getRecord({email_address:"test@test.com"}).then((function(e){console.log("first"),console.log(e),d.credentials=e}));case 7:if(console.log("second"),console.log(this.credentials),null!=this.credentials){e.next=11;break}return e.abrupt("return",t.loginFormErrors.emailAddress="Authentication failed");case 11:return s={rp:this.relyingParty,pubKeyCredParams:l.pubKeyCredParams,attestation:l.attestation,timeout:6e4,challenge:(0,p.generateChallenge)(),allowCredentials:[{id:this.credentials.rawId,type:l.credentialType}]},e.prev=12,e.next=15,navigator.credentials.get({publicKey:s});case 15:u=e.sent,console.log("Assertion obtained",u),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(12),console.error(e.t0.message);case 22:case"end":return e.stop()}}),e,this,[[12,19]])}))),function(){return r.apply(this,arguments)}),cancel:function(){this.topPage()},clearRegisterFormData:function(){this.registerInputData={name:"",emailAddress:""}},clearLoginFormData:function(){this.loginInputData={emailAddress:""}},clearRegisterFormErrors:function(){this.registerFormErrors={name:"",emailAddress:""}},clearLoginFormErrors:function(){this.loginFormErrors={emailAddress:""}}}}},function(e,t,n){"use strict";n.r(t);var r=n(22),a=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t.default=a.a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"top-page",data:function(){return{title:"WebAuthn Demo"}},methods:{login:function(){this.$router.push({name:"login"})},register:function(){this.$router.push({name:"register"})},reissue:function(){this.$ons.notification.alert("Temporarily unavailable.")}}}},function(e,t,n){"use strict";n.r(t);var r=n(24),a=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t.default=a.a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{!r&&o.return&&o.return()}finally{if(a)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},i=n(29),s=(r=i)&&r.__esModule?r:{default:r},o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(30)),u=n(15),c=n(31);t.default={name:"login-page",data:function(){return{title:"Login",inputData:{emailAddress:""},errors:{emailAddress:""}}},methods:{authenticate:function(){var e,t,n=this,r=this,i=s.default.validateLoginForm(r.inputData),l=a(i,2),d=l[0],f=l[1];if(r.clearForm(),d)return r.errors=f;(new u.CredentialService).getRecord({email_address:r.inputData.emailAddress}).then((e=regeneratorRuntime.mark((function e(t){var a,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===t){e.next=19;break}return a={rp:{id:t.rp_id,name:t.rp_name},pubKeyCredParams:o.pubKeyCredParams,attestation:o.attestation,timeout:6e4,challenge:(0,c.generateChallenge)(),allowCredentials:[{id:t.raw_id,type:o.credentialType}]},console.log("login"),console.log({publicKey:a}),console.log(JSON.stringify({publicKey:a})),e.prev=5,e.next=8,navigator.credentials.get({publicKey:a});case 8:i=e.sent,console.log(i),console.log(JSON.stringify(i)),console.log("Assertion obtained",i),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(5),console.error(e.t0.message);case 17:e.next=20;break;case 19:r.errors.emailAddress="Authentication failed";case 20:case"end":return e.stop()}}),e,n,[[5,14]])})),t=function(){var t=e.apply(this,arguments);return new Promise((function(e,n){return function r(a,i){try{var s=t[a](i),o=s.value}catch(e){return void n(e)}if(!s.done)return Promise.resolve(o).then((function(e){r("next",e)}),(function(e){r("throw",e)}));e(o)}("next")}))},function(e){return t.apply(this,arguments)}))},cancel:function(){this.$router.push({name:"top"})},clearForm:function(){this.errors={emailAddress:""}}}}},function(e,t,n){"use strict";n.r(t);var r=n(26),a=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t.default=a.a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a,i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{!r&&o.return&&o.return()}finally{if(a)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=f(n(41)),u=f(n(29)),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(30)),l=n(15),d=n(31);function f(e){return e&&e.__esModule?e:{default:e}}t.default={name:"register-page",components:{},data:function(){return{title:"Registration",inputData:{name:"",emailAddress:""},relyingParty:{name:o.default.app_name,id:o.default.domain},attachment:"any",attestation:"none",assertion:null,errors:{name:"",emailAddress:""}}},methods:{register:(r=regeneratorRuntime.mark((function e(){var t,n,r,a,o,f,p=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=u.default.validateRegistrationForm(this.inputData),n=s(t,2),r=n[0],a=n[1],this.clearForm(),!r){e.next=4;break}return e.abrupt("return",this.errors=a);case 4:return e.prev=4,o={rp:this.relyingParty,pubKeyCredParams:c.pubKeyCredParams,timeout:6e4,attestation:this.attestation,authenticatorSelection:"any"===this.attachment?void 0:i({},c.authenticatorSelection,{authenticatorAttachment:this.attachment}),challenge:(0,d.generateChallenge)(),user:{id:(0,d.generateId)(),name:this.inputData.emailAddress,displayName:this.inputData.name}},console.log({publicKey:o}),console.log(JSON.stringify({publicKey:o})),e.next=10,navigator.credentials.create({publicKey:o});case 10:f=e.sent,console.log(f.rawId),console.log("Register"),console.log(f),console.log(JSON.stringify(f)),(new l.CredentialService).insertRecords([{rp_id:this.relyingParty.id,rp_name:this.relyingParty.name,name:this.inputData.name,email_address:this.inputData.emailAddress,raw_id:f.rawId}]).catch((function(e){console.error(e.message)})).finally((function(){console.log("finalllyyyy"),p.$router.push({name:"top"})})),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(4),console.error(e.t0.message);case 21:case"end":return e.stop()}}),e,this,[[4,18]])})),a=function(){var e=r.apply(this,arguments);return new Promise((function(t,n){return function r(a,i){try{var s=e[a](i),o=s.value}catch(e){return void n(e)}if(!s.done)return Promise.resolve(o).then((function(e){r("next",e)}),(function(e){r("throw",e)}));t(o)}("next")}))},function(){return a.apply(this,arguments)}),cancel:function(){this.$router.push({name:"top"})},clearForm:function(){this.errors={name:"",emailAddress:""}}}}},function(e,t,n){"use strict";n.r(t);var r=n(28),a=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t.default=a.a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"welcome-page"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(65),i=(r=a)&&r.__esModule?r:{default:r};var s="Field is required",o="Must be maximum length of 255 characters only",u="Must be a valid email address";t.default={checkIfHasError:function(e){var t=!1;for(var n in e)""!==e[n]&&(t=!0);return t},validateRegistrationForm:function(e){var t=new Object({name:"",emailAddress:""});return t.name=i.default.required(e.name)?s:"",t.emailAddress=i.default.required(e.emailAddress)?s:"",t.name=i.default.maxLength(e.name,255)?o:"",t.emailAddress=i.default.maxLength(e.emailAddress,255)?o:"",t.emailAddress=i.default.validEmail(e.emailAddress)?u:"",[this.checkIfHasError(t),t]},validateLoginForm:function(e){var t=new Object({emailAddress:""});return t.emailAddress=i.default.required(e.emailAddress)?s:"",t.emailAddress=i.default.maxLength(e.emailAddress,255)?o:"",t.emailAddress=i.default.validEmail(e.emailAddress)?u:"",[this.checkIfHasError(t),t]}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.pubKeyCredParams=[{type:"public-key",alg:-7}],t.attestation="indirect",t.timeout=6e4,t.transports=["usb","nfc","ble"],t.credentialType="public-key",t.authenticatorSelection={authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"required"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.ab2str=o,t.ab2b64=u,t.ab2json=c,t.ab2hex=l,t.cbor2json=function(e){return s.default.decode(l(e))},t.encodeCredential=function(e){return r({},e,{rawId:u(e.rawId),response:r({},e.response,{attestationObject:u(e.response.attestationObject),clientDataJSON:c(e.response.clientDataJSON)})})},t.encodeAssertion=function(e){return r({},e,{rawId:u(e.rawId),response:r({},e.response,{authenticatorData:u(e.response.authenticatorData),clientDataJSON:c(e.response.clientDataJSON),signature:u(e.response.signature)})})},t.generateId=function(){for(var e=new Uint8Array(16),t=0;t<16;t++)e[t]=Math.round(255*Math.random());return e},t.generateChallenge=function(){for(var e=new Uint8Array(32),t=0;t<32;t++)e[t]=Math.round(255*Math.random());return e.buffer};var a,i=n(68),s=(a=i)&&a.__esModule?a:{default:a};function o(e){return String.fromCharCode.apply(null,new Uint8Array(e))}function u(e){return btoa(o(e))}function c(e){return JSON.parse(o(e))}function l(e){return Array.prototype.map.call(new Uint8Array(e),(function(e){return("00"+e.toString(16)).slice(-2)})).join("")}},,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-ons-splitter",[n("v-ons-splitter-content",[n("v-ons-navigator",{attrs:{swipeable:"","swipe-target-width":"50px","page-stack":e.pageStack,options:e.navOptions}}),e._v(" "),n("v-ons-page",[n("v-ons-toolbar"),e._v(" "),n("section",[n("div",{staticClass:"container"},[n("div",{staticClass:"text-center m-5"},[n("h1",{staticClass:"font-weight-bold"},[e._v(e._s(e.title))])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isTopPage,expression:"isTopPage"}]},[n("div",{staticClass:"pt-4"},[n("div",{staticClass:"mx-5 mb-2 text-center"},[n("b-button",{staticClass:"w-50",attrs:{variant:"primary"},on:{click:e.loginPage}},[e._v("Login")])],1),e._v(" "),n("div",{staticClass:"mx-5 mb-2 text-center"},[n("b-button",{staticClass:"w-50",attrs:{variant:"primary"},on:{click:e.registerPage}},[e._v("Register")])],1),e._v(" "),n("div",{staticClass:"mx-5 mb-2 text-center"},[n("b-button",{staticClass:"w-50",attrs:{variant:"primary"},on:{click:e.reissuePage}},[e._v("Re-issue")])],1)])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isRegistrationPage,expression:"isRegistrationPage"}]},[n("div",{staticClass:"p-4"},[n("b-form",{on:{submit:function(e){e.stopPropagation(),e.preventDefault()}}},[n("div",{staticClass:"mb-3"},[n("label",{attrs:{for:"feedback-name"}},[e._v("\n                    Name "),n("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),n("b-form-input",{attrs:{id:"feedback-name"},model:{value:e.registerInputData.name,callback:function(t){e.$set(e.registerInputData,"name",t)},expression:"registerInputData.name"}}),e._v(" "),n("b-form-invalid-feedback",[e._v("\n                    "+e._s(e.registerFormErrors.name)+"\n                  ")])],1),e._v(" "),n("div",{staticClass:"mb-3"},[n("label",{attrs:{for:"feedback-email"}},[e._v("\n                    Email Address "),n("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),n("b-form-input",{attrs:{id:"feedback-email"},model:{value:e.registerInputData.emailAddress,callback:function(t){e.$set(e.registerInputData,"emailAddress",t)},expression:"registerInputData.emailAddress"}}),e._v(" "),n("b-form-invalid-feedback",[e._v("\n                    "+e._s(e.registerFormErrors.emailAddress)+"\n                  ")])],1)]),e._v(" "),n("div",{staticClass:"pt-4 text-center"},[n("b-button",{staticClass:"w-50 my-1",attrs:{disabled:e.registerInputData.name&&0==e.registerInputData.emailAddress,variant:"primary"},on:{click:e.register}},[e._v("\n                  Register\n                ")]),e._v(" "),n("b-button",{staticClass:"w-50 my-1",attrs:{variant:"danger"},on:{click:e.cancel}},[e._v("\n                  Cancel\n                ")])],1)],1)]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isLoginPage,expression:"isLoginPage"}]},[n("div",{staticClass:"p-4"},[n("b-form",{on:{submit:function(e){e.stopPropagation(),e.preventDefault()}}},[n("div",{staticClass:"mb-3"},[n("label",{attrs:{for:"feedback-email"}},[e._v("\n                    Email Address "),n("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),n("b-form-input",{attrs:{id:"feedback-email"},model:{value:e.loginInputData.emailAddress,callback:function(t){e.$set(e.loginInputData,"emailAddress",t)},expression:"loginInputData.emailAddress"}}),e._v(" "),n("b-form-invalid-feedback",[e._v("\n                    "+e._s(e.loginFormErrors.emailAddress)+"\n                  ")])],1)]),e._v(" "),n("div",{staticClass:"pt-4 text-center"},[n("b-button",{staticClass:"w-50 my-1",attrs:{disabled:""==e.loginInputData.emailAddress,variant:"primary"},on:{click:e.authenticate}},[e._v("\n                  Login\n                ")]),e._v(" "),n("b-button",{staticClass:"w-50 my-1",attrs:{variant:"danger"},on:{click:e.cancel}},[e._v("\n                  Cancel\n                ")])],1)],1)])])])],1)],1)],1)},a=[];r._withStripped=!0},function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-ons-page",[n("v-ons-toolbar"),e._v(" "),n("section",[n("div",{staticClass:"container"},[n("div",{staticClass:"text-center m-5"},[n("h1",{staticClass:"font-weight-bold"},[e._v(e._s(e.title))])]),e._v(" "),n("div",{staticClass:"pt-4"},[n("div",{staticClass:"mx-5 mb-2 text-center"},[n("b-button",{staticClass:"w-50",attrs:{variant:"primary"},on:{click:e.login}},[e._v("Login")])],1),e._v(" "),n("div",{staticClass:"mx-5 mb-2 text-center"},[n("b-button",{staticClass:"w-50",attrs:{variant:"primary"},on:{click:e.register}},[e._v("Register")])],1),e._v(" "),n("div",{staticClass:"mx-5 mb-2 text-center"},[n("b-button",{staticClass:"w-50",attrs:{variant:"primary"},on:{click:e.reissue}},[e._v("Re-issue")])],1)])])])],1)},a=[];r._withStripped=!0},function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-ons-page",[n("v-ons-toolbar"),e._v(" "),n("section",[n("div",{staticClass:"container"},[n("div",{staticClass:"text-center m-5"},[n("h1",{staticClass:"font-weight-bold"},[e._v(e._s(e.title))])]),e._v(" "),n("div",{staticClass:"p-4"},[n("b-form",{on:{submit:function(e){e.stopPropagation(),e.preventDefault()}}},[n("div",{staticClass:"mb-3"},[n("label",{attrs:{for:"feedback-email"}},[e._v("\n              Email Address "),n("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),n("b-form-input",{attrs:{id:"feedback-email"},model:{value:e.inputData.emailAddress,callback:function(t){e.$set(e.inputData,"emailAddress",t)},expression:"inputData.emailAddress"}}),e._v(" "),n("b-form-invalid-feedback",[e._v("\n              "+e._s(e.errors.emailAddress)+"\n            ")])],1)]),e._v(" "),n("div",{staticClass:"pt-4 text-center"},[n("b-button",{staticClass:"w-50 my-1",attrs:{disabled:""==e.inputData.emailAddress,variant:"primary"},on:{click:e.authenticate}},[e._v("\n            Login\n          ")]),e._v(" "),n("b-button",{staticClass:"w-50 my-1",attrs:{variant:"danger"},on:{click:e.cancel}},[e._v("\n            Cancel\n          ")])],1)],1)])])],1)},a=[];r._withStripped=!0},function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-ons-page",[n("v-ons-toolbar"),e._v(" "),n("section",[n("div",{staticClass:"container"},[n("div",{staticClass:"text-center m-5"},[n("h1",{staticClass:"font-weight-bold"},[e._v(e._s(e.title))])]),e._v(" "),n("div",{staticClass:"p-4"},[n("b-form",{on:{submit:function(e){e.stopPropagation(),e.preventDefault()}}},[n("div",{staticClass:"mb-3"},[n("label",{attrs:{for:"feedback-name"}},[e._v("\n              Name "),n("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),n("b-form-input",{attrs:{id:"feedback-name"},model:{value:e.inputData.name,callback:function(t){e.$set(e.inputData,"name",t)},expression:"inputData.name"}}),e._v(" "),n("b-form-invalid-feedback",[e._v("\n              "+e._s(e.errors.name)+"\n            ")])],1),e._v(" "),n("div",{staticClass:"mb-3"},[n("label",{attrs:{for:"feedback-email"}},[e._v("\n              Email Address "),n("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),n("b-form-input",{attrs:{id:"feedback-email"},model:{value:e.inputData.emailAddress,callback:function(t){e.$set(e.inputData,"emailAddress",t)},expression:"inputData.emailAddress"}}),e._v(" "),n("b-form-invalid-feedback",[e._v("\n              "+e._s(e.errors.emailAddress)+"\n            ")])],1)]),e._v(" "),n("div",{staticClass:"pt-4 text-center"},[n("b-button",{staticClass:"w-50 my-1",attrs:{disabled:e.inputData.name&&0==e.inputData.emailAddress,variant:"primary"},on:{click:e.register}},[e._v("\n            Register\n          ")]),e._v(" "),n("b-button",{staticClass:"w-50 my-1",attrs:{variant:"danger"},on:{click:e.cancel}},[e._v("\n            Cancel\n          ")])],1)],1)])])],1)},a=[];r._withStripped=!0},function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r=function(){var e=this.$createElement,t=this._self._c||e;return t("v-ons-page",[t("v-ons-toolbar"),this._v(" "),t("section",[t("div",{staticClass:"container"})])],1)},a=[];r._withStripped=!0},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={app_name:"Webauthn Demo App",env:"stg"};switch(r.env){case"dev":r.domain="localhost";break;case"stg":r.domain="lorimay21.github.io";break;case"prod":r.domain="";break;default:r.domain="localhost"}t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.connection=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(43));var a=n(66);t.connection=new r.Connection(new Worker(a))},,,,,,,,,,function(e,t,n){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n(7)),a=s(n(87)),i=s(n(88));function s(e){return e&&e.__esModule?e:{default:e}}r.default.use(a.default);t.default=new a.default.Store({modules:{navigator:i.default},state:{},getters:{},actions:{},mutations:{}})},function(e,t,n){},function(e,t,n){},,function(e,t,n){e.exports=n(58)},function(e,t,n){"use strict";var r=l(n(40)),a=l(n(7)),i=l(n(60)),s=n(99);n(61),n(62),n(63);var o=l(n(64)),u=l(n(53)),c=l(n(89));function l(e){return e&&e.__esModule?e:{default:e}}n(97),n(98),r.default.platform.isIPhoneX()&&(document.documentElement.setAttribute("onsflag-iphonex-portrait",""),document.documentElement.setAttribute("onsflag-iphonex-landscape","")),a.default.use(s.BootstrapVue),a.default.use(i.default),new a.default({el:"#app",store:u.default,router:c.default,template:"<app></app>",components:{App:o.default}})},,,,,,function(e,t,n){"use strict";n.r(t);var r=n(35),a=n(19);for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n(86);var s=n(0),o=Object(s.a)(a.default,r.a,r.b,!1,null,"7ba5bd90",null);o.options.__file="src/App.vue",t.default=o.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=n(15);t.default={required:function(e){return null==e||""==e},inputType:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"string",n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return!(!n&&this.required(e))&&(void 0===e?"undefined":r(e))!==t},minLength:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return!(!n&&this.required(e))&&e.length<=t},maxLength:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:255,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return!(!n&&this.required(e))&&e.length>t},validEmail:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return!(!t&&this.required(e))&&!n.test(String(e).toLowerCase())},uniqueEmail:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!1;if(!t&&this.required(e))return!1;console.log(e),(new a.CredentialService).getRecord({email_address:e}).then((function(e){console.log(e),null!==e&&(n=!0)})).finally((function(){return console.log("hereeee"),console.log(n),n}))}}},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initJsStore=void 0;var r=n(42),a=n(43);var i,s;t.initJsStore=(i=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={name:"web_authn",tables:[{name:"credentials",columns:{id:{primaryKey:!0,dataType:a.DATA_TYPE.Number,autoIncrement:!0},rp_id:{dataType:a.DATA_TYPE.String},rp_name:{dataType:a.DATA_TYPE.String},email_address:{dataType:a.DATA_TYPE.String},raw_id:{dataType:a.DATA_TYPE.Object},created:{dataType:a.DATA_TYPE.DateTime,default:new Date},modified:{dataType:a.DATA_TYPE.DateTime,default:new Date},deleted:{dataType:a.DATA_TYPE.DateTime,notNull:!1}}}]},e.next=3,r.connection.initDb(t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,void 0)})),s=function(){var e=i.apply(this,arguments);return new Promise((function(t,n){return function r(a,i){try{var s=e[a](i),o=s.value}catch(e){return void n(e)}if(!s.done)return Promise.resolve(o).then((function(e){r("next",e)}),(function(e){r("throw",e)}));t(o)}("next")}))},function(){return s.apply(this,arguments)})},,,,,,,function(e,t){},,function(e,t){},,,,,,,,,,function(e,t,n){"use strict";n(52)},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={push:function(e,t){e.stack.push(t)},pop:function(e){e.stack.length>1&&e.stack.pop()},replace:function(e,t){e.stack.pop(),e.stack.push(t)},reset:function(e,t){e.stack=Array.isArray(t)?t:[t||e.stack[0]]},options:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.options=Object.assign(e.options,t)}};t.default={namespaced:!0,state:{stack:[],options:{animation:"slide"}},getters:{},actions:{},mutations:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(7)),a=l(n(90)),i=l(n(53)),s=l(n(91)),o=l(n(92)),u=l(n(94)),c=l(n(96));function l(e){return e&&e.__esModule?e:{default:e}}r.default.use(a.default);var d=[{path:"/",name:"top",component:s.default},{path:"/login",name:"login",component:o.default},{path:"/register",name:"register",component:u.default},{path:"/welcome",name:"welcome",component:c.default}],f=new a.default({routes:d});f.beforeEach((function(e,t,n){i.default.commit("navigator/reset",e.matched.map((function(e){return e.components.default}))),n()})),t.default=f},,function(e,t,n){"use strict";n.r(t);var r=n(36),a=n(21);for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);var s=n(0),o=Object(s.a)(a.default,r.a,r.b,!1,null,null,null);o.options.__file="src/pages/Top.vue",t.default=o.exports},function(e,t,n){"use strict";n.r(t);var r=n(37),a=n(23);for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n(93);var s=n(0),o=Object(s.a)(a.default,r.a,r.b,!1,null,"15717af5",null);o.options.__file="src/pages/Login.vue",t.default=o.exports},function(e,t,n){"use strict";n(54)},function(e,t,n){"use strict";n.r(t);var r=n(38),a=n(25);for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n(95);var s=n(0),o=Object(s.a)(a.default,r.a,r.b,!1,null,"1f24bdc7",null);o.options.__file="src/pages/Register.vue",t.default=o.exports},function(e,t,n){"use strict";n(55)},function(e,t,n){"use strict";n.r(t);var r=n(39),a=n(27);for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);var s=n(0),o=Object(s.a)(a.default,r.a,r.b,!1,null,null,null);o.options.__file="src/pages/Welcome.vue",t.default=o.exports}],[[57,1,2]]]);