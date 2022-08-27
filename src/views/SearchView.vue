<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

import useSearchMovie from '../use/useSearchMovie';

const route = useRoute();

const { getSearchedMovie, searchedMedia, searchedError } = useSearchMovie();

onMounted(() => {
	if (!searchedMedia.value.length && route.query.name) {
		getSearchedMovie(route.query.name);
	}
});
</script>
<template>
	<div class="container-xl">
		<div class="py-2">
			<div
				v-for="(item, index) in searchedMedia"
				:key="index"
				class="d-flex flex-row mb-2"
				style="background-color: #f8f9fa"
			>
				<div class="me-2">
					<img
						style="height: 115px; width: 75px; object-fit: cover"
						:src="
							item.Poster === 'N/A'
								? '/src/assets/img_placeholder.png'
								: item.Poster
						"
						alt=""
					/>
				</div>

				<div style="font-family: sans-serif">
					<router-link
						:to="{ name: 'media', params: { id: item.imdbID } }"
						style="color: #ff9800; font-size: 18px"
						class="nav-link p-0"
						>{{ item.Title }}
					</router-link>
					<p>{{ item.Year }} / {{ item.Type }}</p>
				</div>
			</div>
			<div
				v-if="searchedError"
				class="fs-5 fw-600"
			>
				{{ searchedError }}
			</div>
		</div>
	</div>
</template>
