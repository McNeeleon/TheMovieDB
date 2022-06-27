import { useMoviesCounterStore } from '../stores/moviesCounter';

import { userMovieApi } from '../api/userMovies-api';

import { getObjectByArray } from '../utils/getObjectByArray';

export default function (
	mediaData,
	movieVote,
	actionsList,
	watchLater,
	movieId
) {
	const moviesCounterStore = useMoviesCounterStore();

	const infoMap = [
		'title',
		'image',
		'year',
		'runtimeMins',
		'imDbRating',
		'vote',
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

		userMovieApi.postUserMovieInfo(actionsList, movieId, {
			...movieInfo,
			vote: movieVote.value,
		});
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

		console.log(movieInfo);

		userMovieApi.postUserMovieInfo(actionsList, movieId, {
			...movieInfo,
			vote: movieVote.value,
		});
	};

	const watchLaterHandler = () => {
		watchLater.value = !watchLater.value;

		moviesCounterStore.movieCounter(
			['watchLater', watchLater.value],
			mediaData.value.type
		);

		const movieInfo = getObjectByArray(infoMap, mediaData.value);

		userMovieApi.postUserMovieInfo(actionsList, movieId, {
			...movieInfo,
			vote: movieVote.value,
		});
	};

	return { setRating, watchListHandler, watchLaterHandler };
}
