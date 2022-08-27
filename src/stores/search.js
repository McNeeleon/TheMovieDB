import { defineStore } from 'pinia';
import { OMDbAxioa, OMDB_KEY } from '../axios/axios';

export const useSearchStore = defineStore('search', {
	state: () => ({
		searchedMedia: [],
		searchError: '',
	}),

	actions: {
		async loadSearchMedia(search) {
			if (search.length <= 2) {
				this.searchedMedia = [];
			} else {
				try {
					const { data } = await OMDbAxioa.get(
						`?s=${search}&apikey=${OMDB_KEY}`
					);

					this.searchedMedia = data.Search ? data.Search : [];
					this.searchError = data.Error;
				} catch (error) {
					throw new Error(error);
				}
			}
		},

		clearStore() {
			this.searchedMedia = [];
		},
	},
	getters: {
		getSearchedMedia: (state) => state.searchedMedia,
		getsearchError: (state) => state.searchError,
	},
});
