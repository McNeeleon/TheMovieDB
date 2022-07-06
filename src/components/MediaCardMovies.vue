<script setup>
import MediaCardMoviesHeader from './MediaCardMoviesHeader.vue';

import MediaStarList from './MediaStarList.vue';
import MediaInfoList from './MediaInfoList.vue';
import MediaActions from './MediaActions.vue';

import { getObjectByArray } from '../utils/getObjectByArray';

const emit = defineEmits(['addToWatchList', 'addToWatchLater']);

const props = defineProps({
	mediaData: {
		type: Object,
		default() {
			return {};
		},
	},
	actionsList: {
		type: Object,
		default: () => {},
	},
});

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

const addToWatchList = (options) => emit('addToWatchList', options);

const addToWatchLater = () => emit('addToWatchLater');

const headerInfo = getObjectByArray(headerMap, props.mediaData);

const mediaInfo = getObjectByArray(infoMap, props.mediaData);

const starListId = props.mediaData.starList.map((el) => el.id);

const starList = props.mediaData.actorList.filter((el) =>
	starListId.includes(el.id)
);
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
						width="250"
						height="350"
						class="mb-3 rounded"
					/>

					<MediaActions
						:actions-list="actionsList"
						@add-to-watch-list="addToWatchList"
						@add-to-watch-later="addToWatchLater"
					/>
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
