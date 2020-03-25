import AdapterTable from './table.vue';
import AdapterForm from './form.vue';
import { Button } from 'vant';

export const install: any = (Vue, options) => {
    if (install.installed) return;
    Vue.component('adapter-table', AdapterTable);
    Vue.component('adapter-form-warpper', AdapterForm);
    Vue.component('adapter-button', Button);
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && (window as any).Vue) {
    install((window as any).Vue);
}

export const AdapterUI = {
    install,
    AdapterTable,
    AdapterForm,
}
