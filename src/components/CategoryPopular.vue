<script setup>
import { computed, ref } from '@vue/reactivity';
import { onMounted } from 'vue';

import CategoryCardMovies from '../components/CategoryCardMovies.vue';
import AppPreloader from './AppPreloader.vue';

import { ImdbApi } from '../api/movies-api';
// import { popularSerial } from '../utils/serial';

const props = defineProps({
	mediaType: {
		type: String,
		default: 'movie',
	},
});

const popularMedia = ref([]);
// const popularMedia = popularSerial;
const popularLoading = ref(true);

const apiType = computed(() =>
	props.mediaType === 'movie' ? 'getPopularMovies' : 'getPopularSerial'
);
console.log(apiType.value);

const getData = () => {
	popularLoading.value = true;
	ImdbApi[apiType.value]().then((response) => {
		popularMedia.value = response;
		popularLoading.value = false;
	});
};
onMounted(getData);
</script>

<template>
	<div class="row gy-2 gx-3">
		<CategoryCardMovies
			v-if="!popularLoading"
			:data="popularMedia"
			:classes="'col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2'"
		/>
		<AppPreloader v-else />
	</div>
</template>
