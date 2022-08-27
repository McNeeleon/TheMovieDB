<script setup>
import { ref } from 'vue';

const props = defineProps({
	movie: {
		type: Object,
		default: () => {},
	},
	lazy: {
		type: Boolean,
		default: false,
	},
});

const lazyImage = ref(null);

defineExpose({
	lazyImage,
});
</script>

<template>
	<div class="card border-0">
		<router-link
			:to="{ name: 'media', params: { id: movie.id } }"
			class="d-block"
		>
			<img
				ref="lazyImage"
				loading="lazy"
				:data-src="lazy ? movie.image : ''"
				:src="lazy ? '/src/assets/img_placeholder.png' : movie.image"
				width="165"
				height="200"
				style="width: 100%; height: 270px; object-fit: cover"
				class="rounded-3 shadow"
			/>
		</router-link>

		<div class="card-body text-start p-0 pt-2">
			<h5 class="card-title p-0 m-0">
				<router-link
					:to="{ name: 'media', params: { id: props.movie.id } }"
					href="#"
					class="nav-link link-dark fw-600 p-0"
					>{{ movie.title }}</router-link
				>
			</h5>
			<p class="card-text fw-normal">{{ movie.year }}</p>
		</div>
	</div>
</template>

<style lang="scss">
.card {
	background-color: transparent !important;

	.card-title a:hover {
		color: rgb(1, 180, 228);
	}

	p {
		color: rgba(0, 0, 0, 0.6);
	}
	.card-title a {
		font-size: 17px;
	}
}
@media (max-width: 576px) {
	.card img {
		width: 100% !important;
		height: auto !important;
	}
}
</style>
