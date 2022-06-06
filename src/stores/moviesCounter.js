import { defineStore } from 'pinia';
import axios from 'axios';

export const useMoviesCounterStore = defineStore('counter', {
	state: () => ({
		moviesCounter: [
			{ type: 'Movie', count: 0, id: 'movie' },
			{ type: 'Serial', count: 0, id: 'serial' },
			{ type: 'Favotite', count: 0, id: 'favoriteFilms' },
			{ type: 'Like', count: 0, id: 'like' },
			{ type: 'Watch later', count: 0, id: 'watchLater' },
		],
	}),
	actions: {
		movieCounthandler([categor, isInList], movieType) {
			const categories = this.moviesCounter.find(
				(el) =>
					el.id === categor || (categor === 'watched' && movieType === el.id)
			);

			const count = isInList ? ++categories.count : --categories.count;

			const data = {
				fields: {
					counter: {
						integerValue: count,
					},
					...(categor === 'watched' && {
						[movieType]: {
							stringValue: movieType,
						},
					}),
				},
			};

			const path = categor === 'watched' ? movieType : categor;

			try {
				axios.patch(
					`https://firestore.googleapis.com/v1beta1/projects/themoviedb-43d14/databases/(default)/documents/counter/${path}?updateMask.fieldPaths=counter`,
					data
				);
			} catch (error) {
				console.warn(error);
			}
		},

		async loadCounterMovies() {
			try {
				const { data } = await axios.get(
					'https://firestore.googleapis.com/v1/projects/themoviedb-43d14/databases/(default)/documents/counter'
				);

				const formatData = data.documents.map((el) => {
					const id = el.name.split('/');
					return Object.assign({
						count: +el.fields.counter.integerValue,
						id: id[id.length - 1],
					});
				});

				this.moviesCounter.filter((el) =>
					formatData.filter((d) => {
						return el.id === d.id ? (el.count = d.count) : el;
					})
				);
			} catch (error) {
				console.warn(error);
			}
		},
	},
	getters: {
		getMoviesCounter: (state) => state.moviesCounter,
	},
});
