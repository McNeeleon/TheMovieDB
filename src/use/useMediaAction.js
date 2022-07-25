import { ref } from 'vue';

import { userMovieApi } from '../api/userMovies-api';

import { getObjectByArray } from '../utils/getObjectByArray';

const watchLater = ref(false);

const actionsList = ref([
	{
		name: 'Like',
		inList: false,
		id: 'like',
	},
	{
		name: 'Watched',
		inList: false,
		id: 'watched',
	},
	{
		name: 'Watch later',
		inList: watchLater,
		id: 'watchLater',
	},
	{
		name: 'Favorite films',
		inList: false,
		id: 'favoriteFilms',
	},
]);

export default (
	mediaData,
	movieId,
	moviesCounterStore,
	movieAddingTime,
	movieVote
) => {
	const infoMap = [
		'title',
		'image',
		'year',
		'runtimeMins',
		'imDbRating',
		'vote',
		'id',
		'countries',
	];

	const setRating = (rat) => {
		movieVote.value = rat;

		const item = actionsList.value.find((el) => el.id === 'watched');
		item.inList = true;

		moviesCounterStore.movieCounter(
			['watched', item.inList],
			mediaData.value.type
		);

		const movieInfo = getObjectByArray(infoMap, mediaData.value);

		userMovieApi.postUserMovieInfo(
			actionsList,
			movieId,
			movieAddingTime.value,
			{
				...movieInfo,
				vote: movieVote.value,
			}
		);
	};

	const watchListHandler = (options) => {
		actionsList.value.find(
			(el) => el.id === options.id && (el.inList = !el.inList)
		);

		moviesCounterStore.movieCounter(
			[options.id, options.inList],
			mediaData.value.type
		);

		const movieInfo = getObjectByArray(infoMap, mediaData.value);

		userMovieApi.postUserMovieInfo(
			actionsList,
			movieId,
			movieAddingTime.value,
			{
				...movieInfo,
				vote: movieVote.value,
			}
		);
	};

	const watchLaterHandler = () => {
		watchLater.value = !watchLater.value;

		moviesCounterStore.movieCounter(
			['watchLater', watchLater.value],
			mediaData.value.type
		);

		const movieInfo = getObjectByArray(infoMap, mediaData.value);

		userMovieApi.postUserMovieInfo(
			actionsList,
			movieId,
			movieAddingTime.value,
			{
				...movieInfo,
				vote: movieVote.value,
			}
		);
	};

	return {
		setRating,
		watchListHandler,
		watchLaterHandler,
		movieAddingTime,
		watchLater,
		actionsList,
		movieVote,
	};
};
