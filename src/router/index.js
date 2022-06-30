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
		path: '/user',
		name: 'user',
		component: () => import('../views/UserView.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
