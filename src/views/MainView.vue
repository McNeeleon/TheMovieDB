<template>
	<div class="container-xl">
		<div class="bg-white">
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
					<div
						class="card border-0 pb-3"
						@click="getMovieId(item.id)"
					>
						<a
							href="#"
							class="d-block"
							@click.prevent="action"
						>
							<img
								:src="item.image"
								class="img-fluid rounded-3 shadow"
								:alt="item.title"
							/>
						</a>

						<div class="card-body text-start p-0 pt-2">
							<h5 class="card-title p-0 m-0">
								<a
									href="#"
									class="nav-link link-dark fw-600 p-0"
									@click.prevent="action"
									>{{ item?.title }}</a
								>
							</h5>
							<p class="card-text fw-normal">{{ item.year }}</p>
							<!-- <p class="card-text fw-normal">{{  }}</p> -->
						</div>
					</div>
				</SwiperSlider>
			</section>

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
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

import { movies } from '../utils/movies';

import SwiperSlider from '../components/SwiperSlider.vue';
// import AppCardMovies from '../components/AppCardMovies.vue';
import AppTitleLink from '../components/AppTitleLink.vue';
// import AppTitle from '../components/AppTitle.vue';

// import moviesApi from '../api/movies-api';

const router = useRouter();

const popularMovies = ref({});

onMounted(() => {
	// moviesApi.getMostPopularMovies().then((response) => {
	// 	popularMovies.value = response.items;
	// });
	popularMovies.value = movies;
});

// const bornTodayList = [
// 	{
// 		id: 560393,
// 		name: 'Марта Тебар',
// 		enName: 'Marta Tébar',
// 		photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_560393.jpg',
// 		age: 46,
// 		sex: 'Женский',
// 	},
// 	{
// 		id: 1913106,
// 		name: 'Аарон Ливин',
// 		enName: 'Aaron Levene',
// 		photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1913106.jpg',
// 		age: 46,
// 		sex: 'Мужской',
// 	},
// 	{
// 		id: 37859,
// 		name: 'Леонардо ДиКаприо',
// 		enName: 'Leonardo DiCaprio',
// 		photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_37859.jpg',
// 		age: 46,
// 		sex: 'Мужской',
// 	},
// 	{
// 		id: 4059746,
// 		name: null,
// 		enName: 'Shannon Simone Miller',
// 		photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_4059746.jpg',
// 		age: 46,
// 		sex: 'Женский',
// 	},
// 	{
// 		id: 231403,
// 		name: 'Юрий Лагута',
// 		enName: null,
// 		photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_231403.jpg',
// 		age: 46,
// 		sex: 'Мужской',
// 	},
// 	{
// 		id: 1454842,
// 		name: 'Джон Б.',
// 		enName: 'Jon B.',
// 		photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1454842.jpg',
// 		age: 46,
// 		sex: 'Мужской',
// 	},
// 	{
// 		id: 67481,
// 		name: 'Сун Хи Ньюболд',
// 		enName: 'Soon Hee Newbold',
// 		photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_67481.jpg',
// 		age: 46,
// 		sex: 'Женский',
// 	},
// 	{
// 		id: 1478493,
// 		name: 'Маттиас Кноп',
// 		enName: 'Matthias Knop',
// 		photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1478493.jpg',
// 		age: 46,
// 		sex: 'Мужской',
// 	},
// 	{
// 		id: 245734,
// 		name: 'Олеся Железняк',
// 		enName: null,
// 		photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_245734.jpg',
// 		age: 46,
// 		sex: 'Женский',
// 	},
// 	{
// 		id: 474667,
// 		name: 'Дэвид Талли',
// 		enName: 'David Tully',
// 		photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_474667.jpg',
// 		age: 46,
// 		sex: 'Мужской',
// 	},
// ];

// fetch(
// 	'https://api.kinopoisk.dev/person?search=05.23.1975-05.23.2005&field=birthday&limit=50&token=48DRKES-Z81MCVN-K28FPB7-6MVGCRN'
// )
// 	.then((r) => r.json())
// 	.then((res) => {
// 		bornTodayList.value = res.docs;
// 		console.log(res);
// 	});

const getMovieId = (id) => router.push({ name: 'media', params: { id } });

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
