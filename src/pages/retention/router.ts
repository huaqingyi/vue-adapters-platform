import Layout from '@/layout/index.vue';

export default {
    path: '/retention',
    component: Layout,
    redirect: 'noredirect',
    name: 'Charts',
    meta: {
        title: 'retention',
        icon: 'chart'
    },
    children: [
        {
            path: 'differ',
            name: 'differ',
            meta: { title: 'retention-differ' },
            component: () => import('./differ/differ.vue'),
        },
        {
            path: 'optimum',
            name: 'optimum',
            meta: { title: 'retention-optimum' },
            component: () => import('./optimum/optimum.vue'),
        },
        {
            path: 'retention-preduction',
            name: 'preduction',
            meta: { title: 'retention-preduction' },
            component: () => import('./retention-preduction/retention-preduction.vue'),
        },
    ]
};
