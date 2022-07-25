<script setup>
import UserVotesCardBadge from './UserVotesCardBadge.vue';
import UserVotesCardInfo from './userVotesCardInfo.vue';

import { formatDate } from '../utils/formatDate';

defineProps({
	cardInfo: {
		type: Object,
		default: () => {},
	},
});
</script>

<template>
	<div class="row g-0">
		<div class="col-12 col-sm-7">
			<span class="d-block d-sm-none mb-2">
				{{
					formatDate(cardInfo.createTime, {
						year: 'numeric',
						month: 'short',
						day: 'numeric',
					})
				}}
			</span>
			<div class="d-flex">
				<img
					:src="cardInfo.image"
					class="img-fluid rounded shadow-sm"
					style="width: 70px; height: 100px"
				/>

				<UserVotesCardInfo :card-info="cardInfo" />
			</div>
		</div>

		<div class="col-5 d-none d-sm-block">
			<div class="d-flex justify-content-between align-cardInfos-center">
				<span class="">{{ formatDate(cardInfo.createTime, true, true) }}</span>

				<UserVotesCardBadge :vote="cardInfo.vote" />
			</div>
		</div>
	</div>
</template>

<style lang="scss"></style>
