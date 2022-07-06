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

const popularMedia = ref(null);
const popularLoading = ref(true);

const apiType = computed(() =>
	props.mediaType === 'serial' ? 'getPopularSerial' : 'getPopularMovies'
);

const getData = () => {
	popularLoading.value = true;
	return moviesApi[apiType.value]().then((response) => {
		popularMedia.value = response;
		popularLoading.value = false;
	});
};

watch(
	() => props.mediaType,
	() => getData()
);

onMounted(getData);
</script>

<template>
	<div class="row gy-2">
		<CategoryCardMovies
			v-if="!popularLoading"
			:data="popularMedia"
			:classes="'col-6 col-sm-3 col-md-3 col-lg-2 col-xl-2'"
		/>
		<AppPreloader v-else />
	</div>
</template>
