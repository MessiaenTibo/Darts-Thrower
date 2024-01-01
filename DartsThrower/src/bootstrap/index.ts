import {
    createRouter,
    createWebHistory,
  } from 'vue-router'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/views/Home.vue'),
        },
        {
            path: '/game/create',
            name: 'CreateGame',
            component: () => import('@/views/game/CreateGame.vue'),
        },
        {
            path: '/game',
            name: 'Game',
            component: () => import('@/views/game/Game.vue'),
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('@/views/NotFound.vue'),
        }
    ],
})