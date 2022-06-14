import axios from 'axios';

const env = import.meta.env;

const API_KEY = env.VITE_APP_IMDB_API_KEY;
const FIREBASE_ID = env.VITE_APP_FIREBASE_ID;

const imbdbAxios = axios.create({
	baseURL: env.VITE_APP_IMDB_URL,
});

const firebaseAxios = axios.create({
	baseURL: env.VITE_APP_FIREBASE_URL,
});

export { imbdbAxios, API_KEY, firebaseAxios, FIREBASE_ID };
