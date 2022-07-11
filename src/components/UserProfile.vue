<script setup>
import { computed, onMounted, ref } from 'vue';
import { useMoviesCounterStore } from '../stores/moviesCounter';

import AppPreloader from './AppPreloader.vue';
import AppApexchart from './AppApexchart.vue';
import { userMovieApi } from '../api/userMovies-api';

import { formatDate } from '../utils/formatDate';

const moviesCounterStore = useMoviesCounterStore();

const isLoading = ref(true);

const vote = ref([]);
const data = ref([]);
const title = ref([]);

console.log(formatDate('2022-06-27T20:10:54.759035Z', true, true));

console.log(new Date('2022-06-27T20:10:54.759035Z').getTime());

const loadData = async () => {
	isLoading.value = true;
	await userMovieApi.getUserMovieList().then((r) => {
		console.log(r);

		// const a = r.reduce((acc, curr) => {
		// 	if (curr.vote) {
		// 		acc = [...acc, curr.vote];
		// 	}
		// 	return acc;
		// }, []);
		// console.log(a);
		// return a;
		r.forEach((el) => {
			if (el.vote !== 0) {
				vote.value.push(el.vote);
				title.value.push(el.title);
				data.value.push(
					formatDate(el.createTime, {
						year: '2-digit',
						month: '2-digit',
						day: 'numeric',
					})
				);
			}
		});
	});
	await moviesCounterStore.loadCounterMovies();
	isLoading.value = false;
};

onMounted(loadData);

const moviesCounter = computed(() => moviesCounterStore.getMoviesCounter);
</script>

<template>
	<div
		v-if="!isLoading"
		class="profile"
	>
		<div
			class="card mb-3 border-0 mb-2 px-2"
			style=""
		>
			<div class="row gx-3">
				<div class="col-12 col-sm-3 col-md-3 col-lg-2">
					<img
						src="https://imdb-api.com/images/original/MV5BMTk1MjM3NTU5M15BMl5BanBnXkFtZTcwMTMyMjAyMg@@._V1_Ratio1.0000_AL_.jpg"
						class="img-fluid rounded"
						style="max-width: 200px; width: 100%; height: 100%"
					/>
				</div>
				<div class="col-12 col-sm-9 col-md-9 col-lg-10">
					<div class="card-body p-0 pt-2 pt-sm-0">
						<h5
							class="fs-4 fst-italic fw-bold color-555"
							style="font-family: Georgia, serif"
						>
							Agent 007
						</h5>
						<div class="card-subtitle color-555">
							<span>Tom Cruz</span>
							<span>USA, New-York</span>
							<span>23.11.1985</span>
							<span>M</span>
						</div>
						<p class="card-text mt-2">
							This is a wider card with supporting text below as a natural
							lead-in
						</p>
					</div>
				</div>
			</div>
		</div>

		<ul class="nav nav-fill">
			<li
				v-for="(item, index) in moviesCounter"
				:key="index"
				class="nav-item p-0"
			>
				<a
					class="nav-link color-555"
					href="#"
					@click.prevent
				>
					<b
						style=""
						class="fs-1 fs-md-5"
						>{{ item.count }}</b
					>
					<div>{{ item.type }}</div>
				</a>
			</li>
		</ul>

		<AppApexchart
			:vote="vote"
			:data="data"
			:title="title"
		/>
	</div>

	<AppPreloader v-else />
</template>

<style lang="scss">
.profile {
	.nav {
		background-color: #e9ecef;
	}
	.nav-link {
		&:hover {
			background-color: #ced4da;
			color: #2b2d42 !important;
		}
		&:active,
		&:focus {
			color: #2b2d42 !important;
		}
	}
}
</style>
