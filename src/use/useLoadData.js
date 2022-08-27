import { onMounted, ref } from 'vue';

import observer from '../utils/observer';

import { ImdbApi } from '../api/movies-api';

import { callApi } from '../utils/callApi';

export default () => {
	const popularMovies = ref({});
	const inTheaters = ref({});
	const popularSerial = ref({});

	const loadingPopularSerial = ref(true);
	const loadingPopularMovie = ref(true);
	const loadingInTheater = ref(true);

	const popularSerialRef = ref(null);
	const popularMovieRef = ref(null);
	const inTheaterRef = ref(null);

	const loadPopularSerial = async () => {
		const { preload, response } = await callApi(ImdbApi.getPopularSerial);

		loadingPopularSerial.value = preload;
		popularSerial.value = response;

		observPopularSerial.unobserve(popularSerialRef.value);
	};

	const loadPopularMovie = async () => {
		const { preload, response } = await callApi(ImdbApi.getPopularMovies);

		loadingPopularMovie.value = preload;
		popularMovies.value = response;

		observPopularMovie.unobserve(popularMovieRef.value);
	};

	const loadInTheater = async () => {
		const { preload, response } = await callApi(ImdbApi.getInTheaters);

		loadingInTheater.value = preload;
		inTheaters.value = response;

		observInTheater.unobserve(inTheaterRef.value);
	};

	onMounted(() => {
		observInTheater.observe(inTheaterRef.value);
		observPopularSerial.observe(popularSerialRef.value);
		observPopularMovie.observe(popularMovieRef.value);
	});

	const observInTheater = observer(loadInTheater);
	const observPopularSerial = observer(loadPopularSerial);
	const observPopularMovie = observer(loadPopularMovie);

	return {
		popularMovies,
		inTheaters,
		popularSerial,
		loadingPopularSerial,
		loadingPopularMovie,
		loadingInTheater,
		popularSerialRef,
		popularMovieRef,
		inTheaterRef,
	};
};
