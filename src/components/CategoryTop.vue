<script setup>
import { ref } from '@vue/reactivity';

import CategoryCardMovies from '../components/CategoryCardMovies.vue';
import AppPreloader from './AppPreloader.vue';

import useLoadCategory from '../use/useLoadCategory';

const props = defineProps({
	mediaType: {
		type: String,
		default: 'movie',
	},
});

const topMedia = ref([]);

const topLoading = ref(true);

const API = ['getTopMovies', 'getTopSerial'];

useLoadCategory(topMedia, 'movie', topLoading, props.mediaType, API);
</script>

<template>
	<div class="row gy-2">
		<CategoryCardMovies
			v-if="!topLoading"
			:data="topMedia"
			:classes="'col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2'"
		/>
		<AppPreloader v-else />
	</div>
</template>
