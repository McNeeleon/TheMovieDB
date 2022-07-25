import { onMounted, ref } from 'vue';

import { userMovieApi } from '../api/userMovies-api';
import { ImdbApi } from '../api/movies-api';
import observer from '../utils/observer';

const mediaImages = ref([]);

const imgObserver = ref(null);

const isLoading = ref(true);
const isImgLoading = ref(true);

export default (
	id,
	moviesCounterStore,
	actionsList,
	mediaData,
	movieAddingTime,
	movieVote
) => {
	const loadMovieById = () => {
		ImdbApi.getTitleById(id, ['Ratings'])
			.then((res) => {
				isLoading.value = true;
				mediaData.value = res;
				isLoading.value = false;
			})
			.then((_) => {
				observImg.observe(imgObserver.value);
			});
	};

	const loadUserMovieInfo = () => {
		moviesCounterStore.loadCounterMovies();

		userMovieApi
			.getUserMovieInfoById(id)
			.then((response) => {
				movieAddingTime.value = response.addedTeme;
				actionsList.value.map((el) =>
					Object.assign(el, {
						inList: response.list[el.id].booleanValue,
					})
				);
				movieVote.value = +response.info.vote.integerValue;
			})
			.catch((e) => e);
	};

	const observCallback = () => {
		isImgLoading.value = true;
		ImdbApi.getTitleImages(id).then((res) => {
			mediaImages.value = res.items;
			isImgLoading.value = false;
			observImg.unobserve(imgObserver.value);
		});
	};

	const observImg = observer(observCallback);

	onMounted([loadMovieById, loadUserMovieInfo]);

	return {
		loadMovieById,
		loadUserMovieInfo,
		movieAddingTime,
		mediaData,
		movieVote,
		isLoading,
		mediaImages,
		imgObserver,
		isImgLoading,
	};
};
