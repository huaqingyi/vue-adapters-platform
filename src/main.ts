import '@/libs';
import Vue from 'vue';

import App from '@/app.vue';
import store from '@/store';
import i18n from '@/lang';
import router from '@/router';

new Vue({
  el: '#app',
  router, store, i18n,
  render: h => h(App),
});
