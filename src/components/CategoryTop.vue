<script setup>
import { computed } from '@vue/reactivity';
import { onMounted, ref, watch } from 'vue';

import CategoryCardMovies from '../components/CategoryCardMovies.vue';
import AppPreloader from './AppPreloader.vue';

import moviesApi from '../api/movies-api';

const props = defineProps({
	mediaType: {
		type: String,
		default: 'Movie',
	},
});

const topMedia = ref(null);

const topLoading = ref(true);

const apiType = computed(() =>
	props.mediaType === 'serial' ? 'getTopSerial' : 'getTopMovies'
);

const getMedia = () => {
	topLoading.value = true;
	moviesApi[apiType.value]().then((response) => {
		topMedia.value = response;
		topLoading.value = false;
	});
};

watch(
	() => props.categoryData,
	() => getMedia()
);

onMounted(getMedia);
</script>

<template>
	<div class="row gy-2">
		<CategoryCardMovies
			v-if="!topLoading"
			:data="topMedia"
			:classes="'col-6 col-sm-3 col-md-3 col-lg-2 col-xl-2'"
		/>
		<AppPreloader v-else />
	</div>
</template>
