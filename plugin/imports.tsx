// import Vue from 'vue';
// import { install } from 'vant';
// import 'vant/lib/index.css';

// Vue.use(install);

// import 'xe-utils';
// import VXETable from 'vxe-table';
// import 'vxe-table/lib/index.css';

// Vue.use(VXETable);

// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(ElementUI);

import Vue from 'vue';
import 'xe-utils';
import Column from 'vxe-table/lib/column';
import Table from 'vxe-table/lib/table';
import Header from 'vxe-table/lib/header';
import Body from 'vxe-table/lib/body';
import Popup from 'vant/lib/popup';
import List from 'vant/lib/list';
import Icon from 'vant/lib/icon';
import Cell from 'vant/lib/cell';

Vue.component('van-icon', Icon);
Vue.component('van-popup', Popup);
Vue.component('van-cell', Cell);
Vue.component('van-list', List);
Vue.component('vxe-table', Table);
Vue.component('vxe-table-header', Header);
Vue.component('vxe-table-body', Body);
Vue.component('vxe-table-column', Column);
