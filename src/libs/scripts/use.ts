import Vue from 'vue';
import ElementUI from 'element-ui';
import { AppModule } from '@/store/modules/app';
import i18n from '@/lang';
import VXETable from 'vxe-table';

Vue.use(VXETable);

import SvgIcon from 'vue-svgicon';

Vue.use(ElementUI, {
    size: AppModule.size, // Set element-ui default size
    i18n: (key: string, value: string) => i18n.t(key, value),
});

Vue.use(SvgIcon, {
    tagName: 'svg-icon',
    defaultWidth: '1em',
    defaultHeight: '1em',
});
