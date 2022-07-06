<script setup>
import { onMounted, ref, watch } from 'vue';

import usedImgLazyLoad from '../use/usedImgLazyLoad';

const props = defineProps({
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

const catTopLazy = ref(null);

const newPage = ref(false);

onMounted(() => {
	usedImgLazyLoad(catTopLazy, newPage);
});

watch(
	() => props.data,
	() => {
		newPage.value = !newPage.value;
	}
);
</script>

<template>
	<div
		v-for="(item, index) in data"
		:key="index"
		:class="classes"
	>
		<div class="card border-0">
			<a
				href="#"
				class="d-block"
				@click.prevent="action"
			>
				<img
					ref="catTopLazy"
					:data-src="item.image"
					width="150"
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
						>{{ item?.title }}</a
					>
				</h5>
				<p class="card-text fw-normal">{{ item.year }}</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.card {
	background-color: transparent !important;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
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
