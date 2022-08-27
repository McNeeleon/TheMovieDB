import { computed, onMounted } from 'vue';

import { ImdbApi } from '../api/movies-api';

import { callApi } from '../utils/callApi';

export default (data, defMediaType, preload, propsMediaType, api) => {
	const apiType = computed(() =>
		propsMediaType === defMediaType ? api[0] : api[1]
	);

	const getData = async () => {
		const { preload: p, response } = await callApi(ImdbApi[apiType.value]);

		preload.value = p;
		data.value = response;
	};

	onMounted(getData);
};
