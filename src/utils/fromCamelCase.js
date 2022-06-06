export default (value) => {
	const spaced = value.replace(/([a-z])([A-Z])/g, '$1 $2');
	return spaced
		.split(' ')
		.map((el, id) =>
			id === 0
				? el[0].toUpperCase() + el.slice(1)
				: el === 'USA'
				? el
				: el[0].toLowerCase() + el.slice(1)
		)
		.join(' ');
};
