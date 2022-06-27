import checkForVoid from '../utils/checkForVoid';

import { isInteger } from '../utils/number';

export default () => {
	const formatInteger = (num) => {
		if (num) {
			return isInteger(num) ? `${num}.0` : num;
		} else {
			return checkForVoid(num);
		}
	};

	return { formatInteger };
};
