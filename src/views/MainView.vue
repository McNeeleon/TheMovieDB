<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

// import { movies } from '../utils/movies';

import SwiperSlider from '../components/SwiperSlider.vue';
// import AppCardMovies from '../components/AppCardMovies.vue';
import AppTitleLink from '../components/AppTitleLink.vue';
import AppCardMovie from '../components/AppCardMovie.vue';
// import AppTitle from '../components/AppTitle.vue';

import AppPreloader from '../components/AppPreloader.vue';

import { ImdbApi } from '../api/movies-api';

const router = useRouter();

const popularMovies = ref({});

const isLoading = ref(true);

onMounted(() => {
	isLoading.value = true;
	ImdbApi.getPopularMovies().then((response) => {
		popularMovies.value = response;
		isLoading.value = false;
	});

	// popularMovies.value = movies;
});

const getMovieId = (id) => router.push({ name: 'media', params: { id } });
console.log(getMovieId);

const breakpointsPopular = {
	450: {
		slidesPerView: 3,
		spaceBetween: 10,
	},

	576: {
		slidesPerView: 3,
		spaceBetween: 10,
	},
	600: {
		slidesPerView: 4,
		spaceBetween: 10,
	},
	800: {
		slidesPerView: 5,
		spaceBetween: 10,
	},
	1024: {
		slidesPerView: 6,
		spaceBetween: 10,
	},
	1400: {
		slidesPerView: 7,
		spaceBetween: 10,
	},
};

// const breakpointsBornToday = {
// 	576: {
// 		slidesPerView: 5,
// 		spaceBetween: 10,
// 	},
// 	640: {
// 		slidesPerView: 6,
// 		spaceBetween: 10,
// 	},
// 	768: {
// 		slidesPerView: 7,
// 		spaceBetween: 10,
// 	},
// 	1024: {
// 		slidesPerView: 8,
// 		spaceBetween: 10,
// 	},
// 	1400: {
// 		slidesPerView: 9,
// 		spaceBetween: 10,
// 	},
// };
</script>

<template>
	<div class="container-xl">
		<div
			v-if="!isLoading"
			class="bg-white"
		>
			<section class="section_poster mb-5">
				<div
					class="h-100 d-flex justify-content-start align-items-center text-start"
				>
					<div class="title text-white p-3 ms-4">
						<h2 class="fw-bold fs-1 m-0">Добро пожаловать.</h2>
						<h3 class="fs-2.fw-600">
							Миллионы фильмов, сериалов и людей. Исследуйте сейчас.
						</h3>
					</div>
				</div>
			</section>

			<section class="section_popular mb-5 px-2">
				<!-- <router-link
        to="/popular"
        class="border-start border-5 border-warning fs-3 fw-600 ps-2 nav-link p-0 mb-2"
        style="color: #121212"
      >
        Popular
      </router-link> -->
				<!-- <AppLink>Popular</AppLink> -->

				<AppTitleLink to="/popular">Popular</AppTitleLink>

				<SwiperSlider
					:data="popularMovies"
					:breakpoints="breakpointsPopular"
					scrollbar
					:slides-view="2"
					#="{ item }"
				>
					<AppCardMovie :movie="item" />
				</SwiperSlider>
			</section>

			<div>
				<!-- <AppCardMovies ref="test" /> -->
			</div>

			<!-- <section class="section_born">
				<AppTitle>Born today</AppTitle>
				<SwiperSlider
					:data="bornTodayList"
					:breakpoints="breakpointsBornToday"
					#="{ item, index }"
				>
					<div
						:key="index"
						class="card border-0 align-items-center"
					>
						<img
							:src="item.photo"
							class=""
							style="width: 100%; max-height: 190px; object-fit: contain"
						/>

						<div class="card-body p-0">
							<a class="card-title fs-6 fw-600 text-dark text-decoration-none">
								{{ item.enName }}
							</a>
							<p class="card-text">{{ item.age }}</p>
						</div>
					</div>
				</SwiperSlider>
			</section> -->
			<!--
		<section class="section_trending mb-5">
			<h3 class="border-start border-5 border-warning fw-600 ps-2">Rending</h3> -->

			<!-- <SwiperSlider
        :data="data"
        #="{ item }"
      >
        <CardMovie
          :item="item"
          card-size="smCard"
        />
      </SwiperSlider> -->
			<!-- </section> -->
		</div>
		<AppPreloader v-else />
	</div>
</template>

<style>
.section_poster {
	background-image: linear-gradient(
			to right,
			rgba(3, 37, 65, 0.8) 0%,
			rgba(3, 37, 65, 0) 100%
		),
		url('../assets/6LfVuZBiOOCtqch5Ukspjb9y0EB.jpg');
	background-position: top center;
	background-size: cover;
	background-repeat: no-repeat;
	height: 300px;
	width: 100%;
}
</style>
