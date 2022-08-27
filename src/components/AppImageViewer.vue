<template>
	<div class="media-viewer">
		<AppCloseButton
			class="media-viewer__btn"
			:width="23"
			:height="23"
			@action="closeViewer"
		/>

		<swiper
			:style="{
				'--swiper-navigation-color': '#fff',
				'--swiper-pagination-color': '#fff',
			}"
			:pagination="{
				type: 'fraction',
			}"
			:lazy="true"
			:navigation="true"
			:modules="modules"
			:initial-slide="initialSlide"
		>
			<swiper-slide
				v-for="(item, index) in imagesList"
				:key="index"
			>
				<img
					:data-src="item.image"
					class="swiper-lazy"
				/>
				<div class="img-description">
					<p class="p-3">{{ item.title }}</p>
				</div>

				<div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
			</swiper-slide>
		</swiper>
	</div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/lazy';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { onUnmounted } from 'vue';

import { Lazy, Pagination, Navigation } from 'swiper';
import AppCloseButton from './AppCloseButton.vue';

export default {
	components: {
		Swiper,
		SwiperSlide,
		AppCloseButton,
	},

	props: {
		imagesList: {
			type: Array,
			default() {
				return [];
			},
		},
		initialSlide: {
			type: Number,
			default: 0,
		},
	},

	emits: ['closeMediaViewer'],

	setup(_, { emit }) {
		const closeViewer = () => emit('closeMediaViewer');

		document.body.style.overflow = 'hidden';

		onUnmounted(() => {
			document.body.style.overflow = '';
		});

		return {
			modules: [Lazy, Pagination, Navigation],

			closeViewer,
		};
	},
};
</script>

<style lang="scss">
.media-viewer {
	background-color: #000;
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: 9999;

	.swiper-slide {
		text-align: center;
		font-size: 18px;
		background: #000;
	}
	.swiper-wrapper {
		padding: 40px 0;
	}
	.swiper-pagination {
		/* margin-top: 10px; */
		top: 0;
		left: 0;
	}

	.swiper-pagination-fraction {
		font-size: 30px;
		color: #ffff;
		height: fit-content;
		width: fit-content;
		padding-left: 20px;
	}

	.swiper-pagination-bullet-active-prev {
		background-color: white;
	}

	.swiper-slide img {
		width: auto;
		height: auto;
		max-width: 100%;
		max-height: 100%;

		transform: translate(-50%, -50%);
		position: absolute;
		left: 50%;
		top: 50%;
	}
	.media-viewer__btn {
		position: absolute;
		transform: translateX(-97%);
		margin-top: 10px;
		margin-right: 50px;
		left: 97%;
		z-index: 100;

		background: transparent;
		color: #cfcdcc;
		border: none;
		font-size: 20px;
	}

	.media-viewer__btn:hover {
		color: #ffff;
	}

	.img-description {
		width: 94%;
		min-height: 50px;
		max-height: 250px;

		position: relative;
		top: 94%;
		left: 50%;
		transform: translate(-50%, -94%);
		z-index: 100;

		font-size: 20px;
		color: rgb(245, 197, 24);
		background-color: rgba(18, 18, 18, 0.85);
	}
	.swiper {
		width: 100%;
		height: 100%;
	}
}
</style>
