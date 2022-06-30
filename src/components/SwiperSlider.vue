<template>
	<swiper
		:slides-per-view="slidesView"
		:space-between="20"
		:modules="modules"
		navigation
		:scrollbar="scrollbar && { draggable: true }"
		:breakpoints="breakpoints"
		:lazy="lazy"
		class="mySwiper"
	>
		<swiper-slide
			v-for="(item, index) in data"
			:key="index"
			:virtual-index="index"
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
import { Navigation, Scrollbar, Virtual } from 'swiper';
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
		lazy: {
			type: Boolean,
			default: false,
		},
	},

	setup() {
		return { modules: [Navigation, Scrollbar, Virtual] };
	},
};
</script>
<style lang="scss">
.mySwiper {
	.swiper-button-next,
	.swiper-button-prev {
		background-color: rgba(0, 0, 0, 0.7);
		/* border: 1px solid #ffff; */
		border-radius: 7%;
		/* padding: 25px 15px; */

		width: calc(var(--swiper-navigation-size) / 44 * 37);
		height: calc(var(--swiper-navigation-size) * 1.2);
	}
	.swiper-button-next:after,
	.swiper-button-prev::after {
		color: #fff;
		font-size: 1.5em;
	}

	.swiper-button-next:hover::after,
	.swiper-button-prev:hover::after {
		color: #ffc107 !important;
	}
}
</style>
