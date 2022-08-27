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
