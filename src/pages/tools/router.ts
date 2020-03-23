import Layout from '@/layout/index.vue';

export default {
    path: '/tools',
    component: Layout,
    redirect: 'noRedirect',
    name: 'tool',
    meta: {
        title: 'tools',
        icon: 'hamburger',
    },
    children: [
        {
            path: 'calc',
            name: 'calc',
            meta: { title: 'tools-calc' },
            component: () => import('./calc/calc.vue'),
        },
        {
            path: 'dau',
            name: 'dau',
            meta: { title: 'tools-dau' },
            component: () => import('./dau/dau.vue'),
        },
    ],
};
