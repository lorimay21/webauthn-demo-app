import ons from 'onsenui';
import Vue from 'vue';
import VueOnsen from 'vue-onsenui';
import { BootstrapVue } from 'bootstrap-vue';
import 'regenerator-runtime/runtime';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Onsen UI Styling and Icons
require('onsenui/css/onsen-css-components.css');
require('onsenui/css/onsenui.css');

import App from './App.vue';
import store from './store';
import router from './router';

if (ons.platform.isIPhoneX()) {
  document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
  document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
}

Vue.use(BootstrapVue);
Vue.use(VueOnsen);

new Vue({
  el: '#app',
  store,
  router,
  template:'<app></app>',
  components: { App }
});

