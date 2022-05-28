<script setup>
import { computed } from '@vue/reactivity';
import { ref } from 'vue';

import StarRating from 'vue-star-rating';

const emits = defineEmits({
	setRating: (val) => {
		if (typeof val === 'number') {
			return true;
		} else {
			console.warn(val, 'Must be a number');
			return false;
		}
	},
});

const ratingVal = ref(0);

const colorStar = [
	'red',
	'red',
	'red',
	'red',
	'grey',
	'grey',
	'green',
	'green',
];

const setRating = (rat) => {
	ratingVal.value = rat;
	emits('setRating', rat);
};

const ratingBgColor = computed(() =>
	ratingVal.value <= 4
		? 'bg-danger'
		: ratingVal.value < 7
		? 'bg-secondary'
		: 'bg-success'
);
</script>
<template>
	<h4 class="fw-600">Рейтинг фильма</h4>

	<star-rating
		:max-rating="10"
		:show-rating="false"
		:star-size="35"
		:padding="5"
		:active-color="colorStar"
		class="mb-3"
		@update:rating="setRating"
	/>

	<div class="d-flex align-items-center">
		<span class="me-3">My point</span>
		<div
			class="rounded-circle d-flex justify-content-center align-items-center"
			:class="ratingBgColor"
			style="width: 26px; height: 26px"
		>
			<span class="text-white">{{ ratingVal }}</span>
		</div>
	</div>
</template>

<style lang="scss">
.vue-star-rating {
	counter-reset: css-counter 0;

	.vue-star-rating-star::after {
		display: block;
		counter-increment: css-counter 1;
		content: counter(css-counter);
		color: #a7a6a6;
		margin-left: 7px;
	}
}
</style>
