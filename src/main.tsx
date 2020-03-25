import Vue from 'vue';
import App from './App.vue';
import { AdapterUI } from '../dist';

Vue.config.productionTip = false;

Vue.use(AdapterUI);

new Vue({
  el: '#app',
  components: { App },
  template: '<App />'
});
