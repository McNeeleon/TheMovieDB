<script setup>
import { computed, onMounted, ref } from 'vue';
import { useMoviesCounterStore } from '../stores/moviesCounter';
import AppPreloader from './AppPreloader.vue';

const moviesCounterStore = useMoviesCounterStore();

const isLoading = ref(true);

const loadData = async () => {
	isLoading.value = true;
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
			class="card mb-3 border-0 mb-2 ps-4"
			style=""
		>
			<div class="row g-0">
				<div class="col-md-3">
					<img
						src="https://imdb-api.com/images/original/MV5BMTk1MjM3NTU5M15BMl5BanBnXkFtZTcwMTMyMjAyMg@@._V1_Ratio1.0000_AL_.jpg"
						class="img-fluid rounded-start"
						style="max-width: 200px"
						alt="..."
					/>
				</div>
				<div class="col-md-9">
					<div class="card-body pt-0">
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
