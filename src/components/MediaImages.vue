<script setup>
import { ref } from 'vue';

import SwiperSlider from '../components/SwiperSlider.vue';
import AppImageViewer from '../components/AppImageViewer.vue';
import AppPreloader from '../components/AppPreloader.vue';

defineProps({
	isImgLoad: {
		type: Boolean,
		default: true,
	},
	mediaImages: {
		type: Array,
		default: () => [],
	},
});

const initialSlide = ref(0);
const isMediaViewer = ref(false);

const breakpoints = {
	576: {
		slidesPerView: 3,
		spaceBetween: 10,
	},
	640: {
		slidesPerView: 3,
		spaceBetween: 10,
	},
	768: {
		slidesPerView: 4,
		spaceBetween: 10,
	},
	1024: {
		slidesPerView: 5,
		spaceBetween: 20,
	},
	1400: {
		slidesPerView: 6,
		spaceBetween: 10,
	},
};

const opneMediaViewer = (slideNumber) => {
	initialSlide.value = slideNumber;
	isMediaViewer.value = true;
};
const closeMediaViewer = () => (isMediaViewer.value = false);
</script>

<template>
	<template v-if="!isImgLoad">
		<h3
			class="border-start border-5 border-warning ps-2 p-0 mb-3"
			style="cursor: pointer"
			@click="opneMediaViewer(0)"
		>
			Photos {{ mediaImages.length + 1 }}
		</h3>

		<SwiperSlider
			:data="mediaImages.slice(0, 9)"
			:slides-view="2"
			:breakpoints="breakpoints"
			#="{ item, id }"
		>
			<div
				class="mb-4"
				style="max-width: 210px; height: 210px; cursor: pointer"
			>
				<img
					style="width: 100%; height: 100%; object-fit: cover"
					:src="item.image"
					:alt="item.title"
					@click="opneMediaViewer(id)"
				/>
			</div>
		</SwiperSlider>

		<AppImageViewer
			v-if="isMediaViewer"
			:initial-slide="initialSlide"
			:images-list="mediaImages"
			@close-media-viewer="closeMediaViewer"
		></AppImageViewer>
	</template>

	<AppPreloader
		v-else
		size="fit"
	/>
</template>
