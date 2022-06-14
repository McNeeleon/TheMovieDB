export const addFlagList = (movieInfoList, actionsList) => {
	Object.entries(movieInfoList).filter(([key, val]) =>
		actionsList.value.filter(
			(el) => el.id === key && (val.booleanValue = el.inList)
		)
	);
};

export const addMovieInfo = (movieInfoList, movieInfo) => {
	for (const key in movieInfoList) {
		const sameItem = movieInfo[key];
		const element = movieInfoList[key];
		for (const sub in element) {
			element[sub] = sameItem ?? '';
		}
	}
};
