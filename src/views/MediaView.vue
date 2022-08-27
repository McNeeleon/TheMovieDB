<script setup>
import { ref } from 'vue';
import { useMoviesCounterStore } from '../stores/moviesCounter';

import AppStarRating from '../components/AppStarRating.vue';
import MediaTopCast from '../components/MediaTopCast.vue';
import MediaCardMovie from '../components/MediaCardMovie.vue';
import MediaImages from '../components/MediaImages.vue';
import AppPreloader from '../components/AppPreloader.vue';

import useMediaAction from '../use/useMediaAction';
import useLoadMediaData from '../use/useLoadMediaData';

const moviesCounterStore = useMoviesCounterStore();

const props = defineProps({
	id: {
		type: String,
		default: '',
	},
});

const mediaData = ref([]);

const isLoading = ref(true);

const movieVote = ref(0);
const movieAddingTime = ref(0);

const { setRating, watchLaterHandler, watchListHandler, actionsList } =
	useMediaAction(
		mediaData,
		props.id,
		moviesCounterStore,
		movieAddingTime,
		movieVote
	);

const { mediaImages, imgObserver, isImgLoading } = useLoadMediaData(
	props.id,
	moviesCounterStore,
	actionsList,
	mediaData,
	movieAddingTime,
	movieVote,
	isLoading
);
</script>

<template>
	<div class="container-xl bg-white">
		<div
			v-if="!isLoading"
			class="media p-2 md-4"
		>
			<MediaCardMovie
				:media-data="mediaData"
				:actions-list="actionsList"
				@add-to-watch-list="watchListHandler"
				@add-to-watch-later="watchLaterHandler"
			/>

			<div class="media-info">
				<div class="description mb-5">
					<h4 class="fw-600">Описание</h4>
					<p>
						{{ mediaData.plot }}
					</p>
				</div>
				<div class="star-rating mb-5">
					<AppStarRating
						:movie-rating="+mediaData.imDbRating"
						:movie-rating-votes="+mediaData.imDbRatingVotes"
						:movie-vote="movieVote"
						@set-rating="setRating"
					/>
				</div>

				<div
					ref="imgObserver"
					class="media-images mb-4"
				>
					<MediaImages
						v-if="mediaImages.length"
						:media-images="mediaImages"
						:is-img-load="isImgLoading"
					/>
				</div>

				<div class="top-cast">
					<MediaTopCast :actor-list="mediaData.actorList" />
				</div>
			</div>
		</div>

		<AppPreloader v-else />
	</div>
</template>
