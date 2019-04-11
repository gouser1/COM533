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
            component: Home,
            meta: {
                title: 'Home'
            }
        },
        {
            path: '/popular',
            name: 'popular',
            meta: {
                title: 'Popular'
            },
            component: () => import('./views/Popular.vue')
        },
        {
            path: '/business',
            name: 'business',
            meta: {
                title: 'Business'
            },
            component: () => import('./views/Business.vue')
        },
        {
            path: '/entertainment',
            name: 'entertainment',
            meta: {
                title: 'Entertainment'
            },
            component: () => import('./views/Entertainment.vue')
        },
        {
            path: '/technology',
            name: 'technology',
            meta: {
                title: 'Technology'
            },
            component: () => import('./views/Technology.vue')
        },
        {
            path: '/science',
            name: 'science',
            meta: {
                title: 'Science'
            },
            component: () => import('./views/Science.vue')
        },
        {
            path: '/sport',
            name: 'sport',
            meta: {
                title: 'Sport'
            },
            component: () => import('./views/Sport.vue')
        }
    ]
});