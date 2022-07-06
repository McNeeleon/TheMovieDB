<script setup>
import { onMounted, ref } from 'vue';

import usedImgLazyLoad from '../use/usedImgLazyLoad';

defineProps({
	actorList: {
		type: Array,
		default() {
			return [];
		},
	},
});

const lazy = ref(null);

onMounted(() => {
	usedImgLazyLoad(lazy);
});
</script>

<template>
	<h3 class="border-start border-5 border-warning ps-2 p-0 mb-3">Top cast</h3>
	<div class="row">
		<div
			v-for="(item, index) in actorList"
			:key="index"
			class="col-sm-6 col-md-4 gx-4 mb-3"
		>
			<div class="card border-0 d-flex flex-row align-items-center">
				<div class="me-3">
					<img
						ref="lazy"
						:data-src="item.image"
						class="rounded-circle lazy-img"
						style="width: 95px; height: 95px; object-fit: cover"
					/>
				</div>

				<div class="card-body p-0">
					<a class="card-title fs-6 fw-600 text-dark text-decoration-none">{{
						item.name
					}}</a>
					<p class="card-text">as {{ item.asCharacter }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.lazy-img {
	background: rgba(128, 128, 128, 0.4);
}
</style>
