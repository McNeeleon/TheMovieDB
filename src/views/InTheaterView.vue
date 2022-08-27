<script setup>
import { onMounted, ref } from 'vue';

import { ImdbApi } from '../api/movies-api.js';

import CategoryCardMovies from '../components/CategoryCardMovies.vue';
import AppPreloader from '../components/AppPreloader.vue';

const inTheater = ref([]);

const inTheaterLoading = ref(true);

const loadData = async () => {
	inTheaterLoading.value = true;
	inTheater.value = await ImdbApi.getInTheaters();
	inTheaterLoading.value = false;
};

onMounted(loadData);
</script>

<template>
	<div
		v-if="!inTheaterLoading"
		class="container-xl d-flex justify-content-center my-3"
	>
		<div class="row gy-4">
			<CategoryCardMovies
				:classes="'col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2'"
				:data="inTheater"
			/>
		</div>
	</div>
	<AppPreloader v-else />
</template>
