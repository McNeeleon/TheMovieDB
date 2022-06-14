<script setup>
import { computed } from '@vue/reactivity';
import { ref } from 'vue';

import StarRating from 'vue-star-rating';

import numberFormat from '../utils/numberFormat';

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

const props = defineProps({
	movieRating: String,
	movieRatingVotes: String,
});

const ratingVal = ref(0);

const setRating = (rat) => {
	ratingVal.value = rat;
	emits('setRating', rat);
};

const checkForInteger = (num) => (num % 2 === 0 ? `${num}.0` : num);

const userRatingBgColor = computed(() =>
	ratingVal.value <= 4
		? 'bg-danger'
		: ratingVal.value < 7
		? 'bg-secondary'
		: 'bg-success'
);

const movieRattingColor = computed(() =>
	props.movieRating.value <= 4
		? 'text-danger'
		: props.movieRating.value < 7
		? 'text-secondary'
		: 'text-success'
);
</script>
<template>
	<h4 class="fw-600">Рейтинг фильма</h4>

	<div class="d-flex flex-column-reverse flex-sm-row align-items-center mb-2">
		<star-rating
			:max-rating="10"
			:show-rating="false"
			:star-size="35"
			:padding="5"
			:active-color="'#5e548e'"
			@update:rating="setRating"
		/>

		<div class="d-flex flex-column mb-2 ms-0 ms-sm-3 mb-sm-0">
			<span
				class="fw-bold lh-1"
				:class="movieRattingColor"
				style="font-size: 3.2em"
				>{{ checkForInteger(movieRating) }}</span
			>
			<span class="lh-1 votes">{{ numberFormat(movieRatingVotes) }} votes</span>
		</div>
	</div>

	<div class="d-flex align-items-center">
		<span class="me-3">My point</span>
		<div
			class="rounded-circle d-flex justify-content-center align-items-center"
			:class="userRatingBgColor"
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

.votes {
	color: #a3a3a3;
}

@media (max-width: 576px) {
	.vue-star-rating {
		// margin-bottom: 15px;
		.vue-star-rating-star {
			width: 100%;
			height: 100%;
		}
	}
}
</style>
