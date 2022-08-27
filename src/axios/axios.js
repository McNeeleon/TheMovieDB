import axios from 'axios';

import router from '../router';

const env = import.meta.env;

const API_KEY = env.VITE_APP_IMDB_API_KEY_1;
const FIREBASE_ID = env.VITE_APP_FIREBASE_ID;

const imbdbAxios = axios.create({
	baseURL: env.VITE_APP_IMDB_URL,
});

const LIMIT_ERROR = 'Maximum usage';

imbdbAxios.interceptors.response.use(
	function (response) {
		if (
			response.data.errorMessage &&
			response.data.errorMessage.includes(LIMIT_ERROR)
		) {
			router.push({ name: 'user', params: { categor: 'profile' } });

			return Promise.reject(response.data.errorMessage);
		}

		return response;
	},
	function (error) {
		return Promise.reject(error);
	}
);

const firebaseAxios = axios.create({
	baseURL: env.VITE_APP_FIREBASE_URL,
});

const OMDB_KEY = env.VITE_APP_OMDb_API_KEY;
const OMDbAxioa = axios.create({
	baseURL: env.VITE_APP_OMDb_URL,
});

export { imbdbAxios, API_KEY, firebaseAxios, FIREBASE_ID, OMDbAxioa, OMDB_KEY };
