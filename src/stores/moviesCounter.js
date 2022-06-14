import { defineStore } from 'pinia';
import { userMovieApi } from '../api/userMovies-api';

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
		movieCounter([id, inInList], movieType) {
			movieType = movieType.toLowerCase();

			const category = this.moviesCounter.find(
				(el) => el.id === id || (id === 'watched' && movieType === el.id)
			);

			const count = inInList ? ++category.count : --category.count;

			const path = id === 'watched' ? movieType : id;

			userMovieApi.postMovieCounter(count, path);
		},

		async loadCounterMovies() {
			try {
				const data = await userMovieApi.getMovieCounter();

				this.moviesCounter.filter((el) =>
					data.filter((d) => {
						return el.id === d.id ? (el.count = d.count) : el;
					})
				);
			} catch {}
		},
	},
	getters: {
		getMoviesCounter: (state) => state.moviesCounter,
	},
});
