<script setup>
import MediaCardMoviesHeader from './MediaCardMoviesHeader.vue';

import MediaStarList from './MediaStarList.vue';
import MediaInfoList from './MediaInfoList.vue';
import MrdiaActions from './MrdiaActions.vue';
const props = defineProps({
	mediaData: {
		type: Object,
		default() {
			return {};
		},
	},
});

const emit = defineEmits(['addToWatchList']);

const addToWatchList = (options) => emit('addToWatchList', options);

const infoMap = [
	'year',
	'countries',
	'genres',
	'tagline',
	'directors',
	'writers',
	'companies',
	'countries',
	'boxOffice',
	'awards',
	'runtimeStr',
	'releaseDate',
	'contentRating',
];

const headerMap = [
	'title',
	'contentRating',
	'releaseDate',
	'runtimeStr',
	'ratings',
];

const headerInfo = headerMap.reduce((acc, curr) => {
	acc[curr] = props.mediaData[curr];
	return acc;
}, {});

// const mediaInfo = infoMap.reduce((acc, curr) => {
// 	if (typeof props.mediaData[curr] === 'object') {
// 		for (const key in props.mediaData[curr]) {
// 			acc[key] = props.mediaData[curr][key];
// 		}
// 	} else {
// 		acc[curr] = props.mediaData[curr];
// 	}

// 	return acc;
// }, {});

// console.log(mediaInfo);
const starListId = props.mediaData.starList.map((el) => el.id);

const starList = props.mediaData.actorList.filter((el) =>
	starListId.includes(el.id)
);

const mediaInfo = infoMap.reduce((acc, curr) => {
	acc[curr] = props.mediaData[curr];
	return acc;
}, {});
</script>

<template>
	<div class="card border-0 mb-2 border-bottom">
		<MediaCardMoviesHeader :header-info="headerInfo" />

		<div class="row g-0">
			<div class="col-12 col-sm-5 col-md-4 col-lg-4 mb-3 mb-md-0">
				<div
					class="m-auto m-md-0"
					style="max-width: 340px"
				>
					<img
						:src="mediaData.image"
						style="width: 100%; height: auto"
						class="mb-3"
					/>

					<MrdiaActions @add-to-watch-list="addToWatchList" />
				</div>
			</div>

			<div class="col-12 col-sm-7 col-md-6 col-lg-6 mb-3 mb-md-0">
				<MediaInfoList :media-info="mediaInfo" />
			</div>

			<div class="col-12 col-sm-12 col-md-2 col-lg-2">
				<MediaStarList :star-list="starList" />
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@media (max-width: 576px) {
	.media-card {
		// padding: 0 !important;
	}
}
</style>
