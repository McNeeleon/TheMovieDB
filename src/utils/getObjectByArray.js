export const getObjectByArray = (array, Object) => {
	return array.reduce((acc, curr) => {
		acc[curr] = Object[curr];
		return acc;
	}, {});
};
