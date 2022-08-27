import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

import { useSearchStore } from '../stores/search';

import { debounce } from '../utils/debounce';

const search = ref('');
const searchResultIsOpen = ref(false);

export default function (router) {
	const route = useRoute();
	const searchStore = useSearchStore();

	search.value = route.query.name;

	const searchMovie = debounce((searchName) => {
		if (route.name === 'search') {
			router.push({ query: { name: searchName } });
		}
		if (!searchName) {
			router.replace({ query: [] });
		}

		getSearchedMovie(searchName);
	}, 500);

	const getSearchedMovie = (search) => {
		try {
			searchResultIsOpen.value = false;

			searchStore.loadSearchMedia(search);

			searchResultIsOpen.value = true;
		} catch (e) {
			console.warn(e);
		}
	};

	const searchedMedia = computed(() => searchStore.getSearchedMedia);
	const searchedError = computed(() => searchStore.getsearchError);

	return {
		searchMovie,
		searchResultIsOpen,
		searchedMedia,
		searchedError,
		getSearchedMovie,
		searchStore,
		search,
	};
}
