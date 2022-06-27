import { firebaseAxios, FIREBASE_ID } from '../axios/axios';

import { addFlagList, addMovieInfo } from '../utils/addActualMovieInfo';

export class userMovieApi {
	static async getUserMovieList() {
		const { data } = await firebaseAxios.get(
			`/v1/projects/${FIREBASE_ID}/databases/(default)/documents/MovieList`
		);

		const movieData = [];

		data.documents.forEach((item) => {
			const info = {};

			const id = item.name.split('/');
			const createTime = item.createTime;

			info.id = id[id.length - 1];
			info.createTime = createTime;

			for (const key in item.fields) {
				const element = item.fields[key].mapValue.fields;

				Object.entries(element).forEach(([key, val]) => {
					for (const el in val) {
						info[key] = el === 'integerValue' ? +val[el] : val[el];
					}
				});
			}
			movieData.push(info);
		});
		console.log(movieData);
		return movieData;
	}

	static async getUserMovieInfoById(id) {
		try {
			const { data } = await firebaseAxios.get(
				`/v1/projects/${FIREBASE_ID}/databases/(default)/documents/MovieList/${id}`
			);

			return {
				list: data.fields.list.mapValue.fields,
				info: data.fields.info.mapValue.fields,
			};
		} catch {}
	}

	static async getMovieCounter() {
		try {
			const { data } = await firebaseAxios.get(
				`https://firestore.googleapis.com/v1/projects/${FIREBASE_ID}/databases/(default)/documents/MovieCount`
			);
			const formatData = data.documents.map((el) => {
				const id = el.name.split('/');
				return Object.assign({
					count: +el.fields.counter.integerValue,
					id: id[id.length - 1],
				});
			});

			return formatData;
		} catch (e) {}
	}

	static async postMovieCounter(count, path) {
		const data = {
			fields: {
				counter: {
					integerValue: count,
				},
			},
		};

		try {
			firebaseAxios.patch(
				`https://firestore.googleapis.com/v1beta1/projects/${FIREBASE_ID}/databases/(default)/documents/MovieCount/${path}?updateMask.fieldPaths=counter`,
				data
			);
		} catch (error) {
			console.warn(error);
		}
	}

	static async postUserMovieInfo(actionsList, movieId, movieInfo) {
		const movieInfoList = {
			fields: {
				list: {
					mapValue: {
						fields: {
							watched: {
								booleanValue: false,
							},
							watchLater: {
								booleanValue: false,
							},
							favoriteFilms: {
								booleanValue: false,
							},
							like: {
								booleanValue: false,
							},
						},
					},
				},

				info: {
					mapValue: {
						fields: {
							image: {
								stringValue: '',
							},
							title: {
								stringValue: '',
							},
							year: {
								integerValue: 0,
							},
							imDbRating: {
								doubleValue: 0,
							},
							runtimeMins: {
								integerValue: 0,
							},
							countries: {
								stringValue: '',
							},
							vote: {
								integerValue: 0,
							},
						},
					},
				},
			},
		};

		addFlagList(movieInfoList.fields.list.mapValue.fields, actionsList);
		addMovieInfo(movieInfoList.fields.info.mapValue.fields, movieInfo);

		console.log(movieInfoList);
		console.log(movieInfo);

		try {
			firebaseAxios.patch(
				`https://firestore.googleapis.com/v1/projects/${FIREBASE_ID}/databases/(default)/documents/MovieList/${movieId}`,
				movieInfoList
			);
		} catch (e) {
			console.warn(e);
		}
	}
}
