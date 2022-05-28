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
						style="width: 95px; height: 95px"
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

<script setup>
import { onMounted, ref } from 'vue';

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
	const callback = (entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.remove('lazy-img');
				entry.target.src = entry.target.dataset.src;
				entry.target.removeAttribute('data-src');
				observer.unobserve(entry.target);
			}
		});
	};

	const options = {
		rootMargin: '0px',
		threshold: 0.25,
	};
	const observer = new IntersectionObserver(callback, options);
	lazy.value.forEach((el) => {
		observer.observe(el);
	});
});
</script>

<style lang="scss">
.lazy-img {
	background: rgba(128, 128, 128, 0.4);
}
</style>
