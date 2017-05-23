// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// Vue.config.productionTip = false;
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
Vue.prototype.$http = axios;

import './common/stylus/index.styl';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
