<script setup>
import { computed, ref } from '@vue/reactivity';
import { onMounted } from 'vue';

import CategoryCardMovies from '../components/CategoryCardMovies.vue';
import AppPreloader from './AppPreloader.vue';

import { ImdbApi } from '../api/movies-api';

const props = defineProps({
	mediaType: {
		type: String,
		default: 'movie',
	},
});

const topMedia = ref([]);

const topLoading = ref(true);

const apiType = computed(() =>
	props.mediaType === 'movie' ? 'getTopMovies' : 'getTopSerial'
);

const getMedia = () => {
	topLoading.value = true;
	ImdbApi[apiType.value]().then((response) => {
		topMedia.value = response;
		topLoading.value = false;
	});
};

onMounted(getMedia);
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
