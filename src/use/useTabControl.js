import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { firstLetterToLowCase } from '../utils/firstLetterToLowCase';

const currTab = ref(null);

export default () => {
	const route = useRoute();
	const router = useRouter();

	if (route.params.categor) {
		currTab.value = route.params.categor;
	}

	const handlerTab = (val) => {
		router.push({ params: { categor: firstLetterToLowCase(val) } });
		currTab.value = val;
	};

	return { handlerTab, currTab, route };
};
