import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MediaView from '../views/MediaView.vue';

const routes = [
	{ path: '/', name: 'HomeView', component: HomeView },
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
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
