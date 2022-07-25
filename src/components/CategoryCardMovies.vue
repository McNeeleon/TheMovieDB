<script setup>
import { onMounted, ref } from 'vue';

import usedImgLazyLoad from '../use/usedImgLazyLoad';
import AppCardMovie from './AppCardMovie.vue';

defineProps({
	data: {
		type: Object,
		default() {
			return {};
		},
	},
	classes: {
		type: String,
		default: '',
	},
});

const lazyImg = ref(null);

onMounted(() => {
	const refImages = lazyImg.value.map((el) => el.lazyImage);
	usedImgLazyLoad(refImages);
});
</script>

<template>
	<div
		v-for="(item, index) in data"
		:key="index"
		:class="classes"
	>
		<AppCardMovie
			ref="lazyImg"
			lazy
			:movie="item"
		/>
	</div>
</template>

<style lang="scss">
.lazy-img {
	width: 100%;
	height: 100%;
	animation: gradient 1s infinite alternate linear;
	background: rgba(128, 128, 128, 0.4);
}

@keyframes gradient {
	100% {
		background: rgb(230, 230, 230);
	}
}
</style>
