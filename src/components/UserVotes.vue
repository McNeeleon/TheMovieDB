<script setup>
import { onMounted, ref } from 'vue';

import AppPreloader from './AppPreloader.vue';
import UserVotesCard from './UserVotesCard.vue';

import { userMovieApi } from '../api/userMovies-api';

import observer from '../utils/observer';

const mediaList = ref([]);

const nextPageToken = ref(null);

const obserEl = ref(null);

const isLoading = ref(true);

const lazyLoading = ref(false);

const loadData = () => {
	userMovieApi
		.getUserMovieList(10)
		.then((response) => {
			isLoading.value = true;

			const { movieData, nextPageToken: mextPage } = response;

			nextPageToken.value = mextPage;
			mediaList.value = movieData;

			isLoading.value = false;
		})
		.then((_) => {
			observing.observe(obserEl.value);
		})
		.catch((er) => console.log(er))
		.finally((_) => (isLoading.value = false));
};

onMounted(loadData);

const observerCalback = () => {
	lazyLoading.value = true;
	userMovieApi
		.getMovieListByPaginate(6, nextPageToken.value)
		.then((response) => {
			const { movieData, nextPageToken: mextPage } = response;

			nextPageToken.value = mextPage;

			mediaList.value.push(...movieData);
		})
		.catch((_) => observing.unobserve(obserEl.value))
		.finally((_) => (lazyLoading.value = false));
};

const observing = observer(observerCalback);

// const sortedMovieList = [...props.dataMovie].sort((a, b) => sortByDate(b, a));
</script>

<script>
export default {
	inheritAttrs: false,
};
</script>

<template>
	<AppPreloader v-if="isLoading" />
	<div
		v-else-if="mediaList.length !== 0"
		class="profile-vote mt-3"
	>
		<div
			v-for="(item, index) in mediaList"
			ref="card"
			:key="index"
			class="mb-2 ps-2 ps-sm-3"
		>
			<UserVotesCard :card-info="item" />
		</div>

		<div
			ref="obserEl"
			class="text-center"
		>
			<div
				v-if="lazyLoading"
				class="spinner-border text-warning"
			>
				<span class="visually-hidden">Loading...</span>
			</div>
		</div>
	</div>

	<div v-else><h1>EMPTY</h1></div>
</template>

<style lang="scss"></style>
