import { firebaseAxios, FIREBASE_ID } from '../axios/axios';

import { addFlagList, addMovieInfo } from '../utils/addActualMovieInfo';

export class userMovieApi {
	static async getUserMovieInfo(id) {
		try {
			const { data } = await firebaseAxios.get(
				`/v1/projects/${FIREBASE_ID}/databases/(default)/documents/MovieList/${id}`
			);

			return data.fields.list.mapValue.fields;
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
								stringValue: '',
							},
							imDbRating: {
								stringValue: '',
							},
							runtimeMins: {
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
