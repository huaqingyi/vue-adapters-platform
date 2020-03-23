import Vue from 'vue';
import '@/layout/router';
import Router, { RouteConfig } from 'vue-router';

/* Layout */
import Layout from '@/layout/index.vue';

Vue.use(Router);

export const constantRoutes: RouteConfig[] = [
    {
        path: '/404',
        component: () =>
            import(/* webpackChunkName: "404" */ '@/pages/error-page/404.vue'),
        meta: { hidden: true },
    },
    {
        path: '/401',
        component: () =>
            import(/* webpackChunkName: "401" */ '@/pages/error-page/401.vue'),
        meta: { hidden: true },
    },
    {
        path: '/',
        component: Layout,
        redirect: '/preduct-vs-real',
    },
];

const createRouter = () => {
    return new Router({
        // mode: 'history',  // Disabled due to Github Pages doesn't support this, enable this if you need.
        scrollBehavior: (to, from, savedPosition) => {
            if (savedPosition) {
                return savedPosition;
            } else {
                return { x: 0, y: 0 };
            }
        },
        base: process.env.BASE_URL,
        routes: constantRoutes,
    });
};

const router = createRouter();

export default router;
