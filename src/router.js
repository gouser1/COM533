import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: () =>
                import('./views/About.vue')
        },
        {
            path: '/politics',
            name: 'politics',
            component: () =>
                import('./views/Politics.vue')
        },
        {
            path: '/entertainment',
            name: 'entertainment',
            component: () =>
                import('./views/Entertainment.vue')
        },
        {
            path: '/technology',
            name: 'technology',
            component: () =>
                import('./views/Technology.vue')
        },
        {
            path: '/science',
            name: 'science',
            component: () =>
                import('./views/Science.vue')
        },
        {
            path: '/sport',
            name: 'sport',
            component: () =>
                import('./views/Sport.vue')
        }
    ]
});