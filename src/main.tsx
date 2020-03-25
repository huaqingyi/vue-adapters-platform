import Vue from 'vue';
import App from './App.vue';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

import { AdapterUI } from '../dist';

Vue.config.productionTip = false;

Vue.use(AdapterUI);

new Vue({
  el: '#app',
  components: { App },
  template: '<App />'
});
