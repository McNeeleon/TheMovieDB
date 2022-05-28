<template>
	<swiper
		:slides-per-view="slidesView"
		:space-between="20"
		:modules="modules"
		navigation
		:scrollbar="scrollbar && { draggable: true }"
		:breakpoints="breakpoints"
		class="mySwiper"
	>
		<swiper-slide
			v-for="(item, index) in data"
			:key="index"
		>
			<slot
				:id="index"
				:item="item"
			/>
		</swiper-slide>
	</swiper>
</template>

<script>
// import CardMovie from '../components/CardMovie.vue';
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

export default {
	components: {
		// CardMovie,
		Swiper,
		SwiperSlide,
	},
	props: {
		data: {
			type: Object,
			default() {
				return {};
			},
		},
		breakpoints: {
			type: Object,
			default() {
				return {};
			},
		},
		slidesView: {
			type: Number,
			default: 3,
		},
		scrollbar: {
			type: Boolean,
			default: false,
		},
	},

	setup() {
		return { modules: [Navigation, Scrollbar] };
	},
};
</script>
<style>
.mySwiper .swiper-button-next,
.mySwiper .swiper-button-prev {
	background-color: rgba(0, 0, 0, 0.7);
	/* border: 1px solid #ffff; */
	border-radius: 7%;
	/* padding: 25px 15px; */

	width: calc(var(--swiper-navigation-size) / 44 * 37);
	height: calc(var(--swiper-navigation-size) * 1.2);
}
.mySwiper .swiper-button-next:after,
.mySwiper .swiper-button-prev::after {
	color: #fff;
	font-size: 30px;
}

.mySwiper .swiper-button-next:hover::after,
.mySwiper .swiper-button-prev:hover::after {
	color: #ffc107 !important;
}
</style>
