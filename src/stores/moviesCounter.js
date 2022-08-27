import { defineStore } from 'pinia';
import { userMovieApi } from '../api/userMovies-api';

export const useMoviesCounterStore = defineStore('counter', {
	state: () => ({
		moviesCounter: [
			{ type: 'Movie', count: 0, id: 'movie', viewingTime: 0 },
			{ type: 'Serial', count: 0, id: 'tvseries', viewingTime: 0 },
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

		ratingCounter([id, inInList], movieType, runtimeMins) {
			movieType = movieType.toLowerCase();
			const category = this.moviesCounter.find(
				(el) => id === 'watched' && movieType === el.id
			);

			if (!inInList) {
				category.count++;
				category.viewingTime += runtimeMins;
			}

			userMovieApi.postMovieCounter(
				category.count,
				movieType,
				category.viewingTime
			);
		},

		async loadCounterMovies() {
			try {
				const response = await userMovieApi.getMovieCounter();

				this.moviesCounter.filter((el) =>
					response.filter((r) => {
						if (el.id === r.id) {
							if (r.viewingTime) {
								el.viewingTime = +r.viewingTime;
							}
							return (el.count = r.count);
						}
						return response;
					})
				);
			} catch {}
		},
	},
	getters: {
		getMoviesCounter: (state) => state.moviesCounter,
	},
});
