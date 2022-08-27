import { firebaseAxios, FIREBASE_ID } from '../axios/axios';

import { addFlagList, addMovieInfo } from '../utils/addActualMovieInfo';

import { formatDataToArray } from '../utils/formatDataToArray';

export class userMovieApi {
	static async getMovieListByPaginate(pageSize, nextPageToken) {
		try {
			const { data } = await firebaseAxios.get(
				`v1/projects/${FIREBASE_ID}/databases/(default)/documents/MovieList?pageSize=${pageSize}&pageToken=${nextPageToken}`
			);
			const movieData = formatDataToArray(data.documents);

			return { movieData, nextPageToken: data.nextPageToken };
		} catch (error) {
			throw new Error(error);
		}
	}

	static async getUserMovieList(pageSize = 20) {
		try {
			const { data } = await firebaseAxios.get(
				`/v1/projects/${FIREBASE_ID}/databases/(default)/documents/MovieList?pageSize=${pageSize}`
			);
			const movieData = formatDataToArray(data.documents);

			return { movieData, nextPageToken: data.nextPageToken };
		} catch (error) {
			throw new Error(error);
		}
	}

	static async getUserMovieInfoById(id) {
		try {
			const { data } = await firebaseAxios.get(
				`/v1/projects/${FIREBASE_ID}/databases/(default)/documents/MovieList/${id}`
			);

			return {
				list: data.fields.list.mapValue.fields,
				info: data.fields.info.mapValue.fields,
				movieAddingTime: data.fields.movieAddingTime.integerValue,
			};
		} catch {}
	}

	static async getMovieCounter() {
		try {
			const { data } = await firebaseAxios.get(
				`/v1/projects/${FIREBASE_ID}/databases/(default)/documents/MovieCount`
			);
			const formatData = data.documents.map((el) => {
				const id = el.name.split('/');
				return {
					count: +el.fields.counter.integerValue,
					id: id[id.length - 1],
					...(el.fields?.viewingTime?.integerValue && {
						viewingTime: el.fields.viewingTime.integerValue,
					}),
				};
			});

			return formatData;
		} catch (e) {
			console.log(e);
		}
	}

	static async postMovieCounter(count, path, runtimeMinsCount) {
		const data = {
			fields: {
				counter: {
					integerValue: count,
				},
				...(runtimeMinsCount && {
					viewingTime: { integerValue: runtimeMinsCount },
				}),
			},
		};

		try {
			firebaseAxios.patch(
				`v1/projects/${FIREBASE_ID}/databases/(default)/documents/MovieCount/${path}?updateMask.fieldPaths=counter&updateMask.fieldPaths=viewingTime`,
				data
			);
		} catch (error) {
			console.warn(error);
		}
	}

	static async postUserMovieInfo(
		actionsList,
		movieId,
		movieAddingTime,
		movieInfo
	) {
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
							id: {
								stringValue: '',
							},
						},
					},
				},

				movieAddingTime: {
					integerValue: movieAddingTime,
				},
			},
		};

		addFlagList(movieInfoList.fields.list.mapValue.fields, actionsList);
		addMovieInfo(movieInfoList.fields.info.mapValue.fields, movieInfo);
		console.log(movieAddingTime);

		console.log(
			movieInfoList.fields.movieAddingTime.integerValue,
			movieInfoList
		);

		try {
			firebaseAxios.patch(
				`https://firestore.googleapis.com/v1/projects/${FIREBASE_ID}/databases/(default)/documents/MovieList/${movieId}`,
				movieInfoList
			);

			firebaseAxios.patch(
				`https://firestore.googleapis.com/v1/projects/${FIREBASE_ID}/databases/(default)/documents/MovieList2/${movieAddingTime}`,
				movieInfoList
			);
		} catch (e) {
			console.warn(e);
		}
	}
}
