<script setup>
import { onMounted, ref, watch } from 'vue';
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import { useMoviesCounterStore } from '../stores/moviesCounter';

import AppApexchart from './AppApexchart.vue';
import UserProfileMediaCount from './UserProfileMediaCount.vue';
import UserProfileInfo from './UserProfileInfo.vue';
import AppPreloader from './AppPreloader.vue';

import { sortByDate } from '../utils/sortByDate';

import { userMovieApi } from '../api/userMovies-api';

const route = useRoute();
const moviesCounterStore = useMoviesCounterStore();

const tabIsActive = ref(true);

const handlerChart = () => {
	tabIsActive.value = route.params.categor === 'profile';
};

watch(
	() => route.params.categor,
	() => {
		handlerChart();
	}
);

const mediaData = ref([]);

const isLoading = ref(true);

const loadData = () => {
	isLoading.value = true;
	moviesCounterStore.loadCounterMovies();
	userMovieApi
		.getUserMovieList(26)
		.then((response) => {
			const { movieData } = response;

			mediaData.value = movieData.sort(sortByDate);
		})
		.catch((er) => console.log(er))
		.finally((_) => (isLoading.value = false));
};

const moviesCounter = computed(() => moviesCounterStore.getMoviesCounter);
onMounted(loadData);
</script>

<template>
	<div
		v-if="!isLoading"
		class="profile"
	>
		<UserProfileInfo />

		<UserProfileMediaCount :movies-counter="moviesCounter" />

		<AppApexchart
			v-if="mediaData.length > 5 && tabIsActive"
			:media-data="mediaData"
		/>
		<template v-else>
			<div class="alert alert-dark">Not enough movies to display graph</div>
		</template>
	</div>
	<AppPreloader v-else />
</template>

<style lang="scss"></style>
