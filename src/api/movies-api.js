import { imbdbAxios, API_KEY } from '../axios/axios';

export class ImdbApi {
	static async getTitleById(titleId, options = []) {
		try {
			const { data } = await imbdbAxios.get(
				`/en/API/Title/${API_KEY}/${titleId}/${options}`
			);
			return data;
		} catch (error) {
			console.log(error);
		}
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
	}

	static async getTopSerial() {
		const { data } = await imbdbAxios.get(`en/API/Top250TVs/${API_KEY}`);

		return data.items;
	}

	static async getInTheaters() {
		const { data } = await imbdbAxios.get(`en/API/InTheaters/${API_KEY}`);

		return data.items;
	}

	static async comingSoon() {
		const { data } = await imbdbAxios.get(`en/API/ComingSoon/${API_KEY}`);
		return data.items;
	}
}
