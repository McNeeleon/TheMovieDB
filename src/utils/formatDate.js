export const formatDate = (d, opt, isTime) => {
	const date = new Date(d);

	if (opt === false) {
		opt = {};
	} else if (opt === true) {
		opt = { year: 'numeric', month: 'numeric', day: 'numeric' };
	}

	const time = isTime && { hour: 'numeric', minute: 'numeric' };

	return new Intl.DateTimeFormat('en-GB', {
		...time,
		...opt,
	}).format(date);
};
