import axios from 'axios';

const env = import.meta.env;

const API_KEY = env.VITE_APP_IMDB_API_KEY;

const imbdbAxios = axios.create({
	baseURL: env.VITE_APP_IMDB_URL,
});

export { imbdbAxios, API_KEY };
