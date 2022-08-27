<script setup>
import SwiperSlider from '../components/SwiperSlider.vue';

import AppTitleLink from '../components/AppTitleLink.vue';
import AppCardMovie from '../components/AppCardMovie.vue';

import AppPreloader from '../components/AppPreloader.vue';

import useLoadData from '../use/useLoadData';

const {
	loadingInTheater,
	loadingPopularMovie,
	loadingPopularSerial,

	inTheaters,
	popularMovies,
	popularSerial,

	inTheaterRef,
	popularMovieRef,
	popularSerialRef,
} = useLoadData();

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
</script>

<template>
	<div class="container-xl">
		<div class="bg-white">
			<section class="section_poster mb-5">
				<div
					class="h-100 d-flex justify-content-start align-items-center text-start"
				>
					<div class="title text-white p-3 ms-4">
						<h2 class="fw-bold fs-1 m-0">Welcome.</h2>
						<h3 class="fs-2.fw-600">
							Millions of movies, series and people. Explore now.
						</h3>
					</div>
				</div>
			</section>
			<section
				ref="inTheaterRef"
				class="mb-5 px-2"
			>
				<AppTitleLink to="/InTheater">In theaters</AppTitleLink>

				<SwiperSlider
					v-if="!loadingInTheater"
					:data="inTheaters"
					:breakpoints="breakpointsPopular"
					scrollbar
					:slides-view="2"
					#="{ item }"
				>
					<AppCardMovie :movie="item" />
				</SwiperSlider>

				<AppPreloader
					v-else
					size="fit"
				/>
			</section>

			<section
				ref="popularSerialRef"
				class="mb-5 px-2"
			>
				<AppTitleLink :to="{ name: 'serial', params: { categor: 'popular' } }"
					>Popular serials</AppTitleLink
				>

				<SwiperSlider
					v-if="!loadingPopularSerial"
					:data="popularSerial"
					:breakpoints="breakpointsPopular"
					scrollbar
					:slides-view="2"
					#="{ item }"
				>
					<AppCardMovie :movie="item" />
				</SwiperSlider>

				<AppPreloader
					v-else
					size="fit"
				/>
			</section>

			<section
				ref="popularMovieRef"
				class="mb-5 px-2"
			>
				<AppTitleLink :to="{ name: 'movie', params: { categor: 'popular' } }"
					>Popular movies</AppTitleLink
				>

				<SwiperSlider
					v-if="!loadingPopularMovie"
					:data="popularMovies"
					:breakpoints="breakpointsPopular"
					scrollbar
					:slides-view="2"
					#="{ item }"
				>
					<AppCardMovie :movie="item" />
				</SwiperSlider>
				<AppPreloader
					v-else
					size="fit"
				/>
			</section>
		</div>
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
