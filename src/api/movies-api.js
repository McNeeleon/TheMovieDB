import { imbdbAxios, API_KEY } from '../axios/axios';

export class ImdbApi {
	static async getTitleById(titleId, options = []) {
		const { data } = await imbdbAxios.get(
			`/en/API/Title/${API_KEY}/${titleId}/${options}`
		);
		return data;
	}

	static async getTitleImages(titleId) {
		const { data } = await imbdbAxios.get(
			`en/API/Images/${API_KEY}/${titleId}/Short`
		);

		return data;
	}

	static async getPopularMovies() {
		const { data } = await imbdbAxios.get(
			`en/API/MostPopularMovies/${API_KEY}`
		);
		return data.items;
	}

	static async getTopMovies() {
		const { data } = await imbdbAxios.get(`en/API/Top250Movies/${API_KEY}`);
		return data.items;
	}

	static async getPopularSerial() {
		const { data } = await imbdbAxios.get(`en/API/MostPopularTVs/${API_KEY}`);

		return data.items;
		// console.log('getPopularSerial');
	}

	static async getTopSerial() {
		const { data } = await imbdbAxios.get(`en/API/Top250TVs/${API_KEY}`);

		return data.items;
		// console.log('getTopSerial');
	}
}
