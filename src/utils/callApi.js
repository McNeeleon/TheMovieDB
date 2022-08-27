let preload = true;
let response = [];

export const callApi = async (api) => {
	try {
		preload = true;

		response = await api();

		preload = false;

		return { preload, response };
	} catch (error) {
		throw new Error(error);
	}
};
