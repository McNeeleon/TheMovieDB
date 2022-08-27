<script setup>
import UserVotesCardInfoSvg from './UserVotesCardInfoSvg.vue';

import usedFormatNumber from '../use/usedFormatNumber';

import useColorVote from '../use/useColorVote';

defineProps({
	cardInfo: {
		type: Object,
		default: () => {},
	},
});

const { formatInteger } = usedFormatNumber();

const { color } = useColorVote();
</script>

<template>
	<div class="vote-info px-3">
		<router-link
			:to="{ name: 'media', params: { id: cardInfo.id } }"
			class="nav-link fw-bold color-555 p-0 lh-1 truncate-text"
		>
			{{ cardInfo.title }}
		</router-link>

		<div class="color-555">{{ cardInfo.year }} {{ cardInfo.countries }}</div>

		<span
			v-if="cardInfo.imDbRating"
			class="fw-600 me-2"
			style="color: orange"
			>{{ formatInteger(cardInfo.imDbRating) }}</span
		>

		<span
			v-if="cardInfo.runtimeMins"
			class="color-555"
		>
			{{ cardInfo.runtimeMins + 'min' }}
		</span>

		<div class="d-flex align-cardInfos-center">
			<div
				v-if="cardInfo.vote"
				class="d-block d-sm-none me-2"
			>
				<div class="d-flex align-cardInfos-center">
					<span class="me-1 color-555">vote:</span>
					<span
						class="rounded-circle mt-1 text-white fw-600 d-flex justify-content-center align-cardInfos-center"
						:class="color(cardInfo.vote)"
						style="width: 1.4em; height: 1.4em"
					>
						{{ cardInfo.vote }}
					</span>
				</div>
			</div>
			<UserVotesCardInfoSvg
				:favorite="cardInfo.favoriteFilms"
				:like="cardInfo.like"
				:watch-later="cardInfo.watchLater"
			/>
		</div>
	</div>
</template>
