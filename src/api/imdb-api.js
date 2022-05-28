import { imbdbAxios, API_KEY } from '../axios/axios';

export default class ImdbApi {
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

	static async getMostPopularMovies() {
		const { data } = await imbdbAxios.get(
			`en/API/MostPopularMovies/${API_KEY}`
		);
		console.log(data);
		return data;
	}
}
