export default (rat) => {
	const color = (rat) =>
		rat === 0
			? 'border border-1'
			: rat <= 4
			? 'bg-danger'
			: rat < 7
			? 'bg-secondary'
			: 'bg-success';

	return { color };
};
