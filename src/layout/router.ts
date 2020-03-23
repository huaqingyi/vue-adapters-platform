import Layout from '@/layout/index.vue';
import retentionRouter from '@/pages/retention/router';
import toolsRouter from '@/pages/tools/router';

export default [
    {
        path: '/preduct-vs-real',
        component: Layout,
        children: [
            {
                path: 'index',
                component: () =>
                    import(
                        /* webpackChunkName: "icons" */ '@/pages/preduct-vs-real/preduct-vs-real.vue'
                    ),
                name: 'Icons',
                meta: {
                    title: 'preduct-vs-real',
                    icon: 'icon',
                    noCache: true,
                },
            },
        ],
    },
    retentionRouter,
    toolsRouter,
    {
        path: '*',
        redirect: '/404',
        meta: { hidden: true },
    },
];
