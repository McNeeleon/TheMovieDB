import { defineStore } from 'pina';

export const useMovieVotesStore = defineStore('votes', {
	state: () => ({
		votes: [],
	}),
});
