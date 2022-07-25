<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

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

const router = useRouter();

const lazyImage = ref(null);

const toMovue = () => {
	router.push({ name: 'media', params: { id: props.movie.id } });
};

defineExpose({
	lazyImage,
});
</script>

<template>
	<div class="card border-0">
		<a
			href="#"
			class="d-block"
			@click.prevent="toMovue"
		>
			<img
				ref="lazyImage"
				:data-src="lazy ? movie.image : ''"
				:src="lazy ? '/src/assets/img_placeholder.png' : movie.image"
				width="165"
				height="200"
				class="img-fluid rounded-3 shadow lazy-img"
			/>
		</a>

		<div class="card-body text-start p-0 pt-2">
			<h5 class="card-title p-0 m-0">
				<a
					href="#"
					class="nav-link link-dark fw-600 p-0"
					@click.prevent="action"
					>{{ movie.title }}</a
				>
			</h5>
			<p class="card-text fw-normal">{{ movie.year }}</p>
		</div>
	</div>
</template>

<style lang="scss">
.card {
	background-color: transparent !important;

	img {
		width: 100%;
		object-fit: fill;
	}

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
</style>
