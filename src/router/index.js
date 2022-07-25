import { createRouter, createWebHistory } from 'vue-router';
import MainView from '../views/MainView.vue';
import MediaView from '../views/MediaView.vue';

const routes = [
	{ path: '/main', name: 'main', component: MainView, alias: '/' },
	{
		path: '/popular',
		name: 'popular',
		component: () => import('../views/PopularView.vue'),
	},
	{
		path: '/media/:id',
		name: 'media',
		component: MediaView,
		props: true,
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
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	linkActiveClass: 'active',
	linkExactActiveClass: 'active',
});

export default router;
