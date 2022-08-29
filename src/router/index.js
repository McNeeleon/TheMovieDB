import { createRouter, createWebHistory } from 'vue-router';
import MainView from '../views/MainView.vue';
import MediaView from '../views/MediaView.vue';

const routes = [
	{ path: '/main', name: 'main', component: MainView, alias: '/' },

	{
		path: '/media/:id',
		name: 'media',
		component: MediaView,
		props: true,
	},

	{
		path: '/search',
		name: 'search',
		component: () => import('../views/SearchView.vue'),
	},

	{
		path: '/user/:categor',
		name: 'user',
		component: () => import('../views/UserView.vue'),
	},
	{
		path: '/serial/:categor',
		name: 'serial',
		component: () => import('../views/SerialView.vue'),
	},
	{
		path: '/movie/:categor',
		name: 'movie',
		component: () => import('../views/MovieView.vue'),
	},
	{
		path: '/InTheater',
		name: 'InTheater',
		component: () => import('../views/InTheaterView.vue'),
	},
	{
		path: '/error/:message',
		name: 'error',
		component: () => import('../views/ErrorView.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	linkActiveClass: 'active',
	linkExactActiveClass: 'active',
});

export default router;
