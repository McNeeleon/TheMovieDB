export default (callbackFn) => {
	const callback = function (entries) {
		if (entries[0].isIntersecting) {
			callbackFn();
		}
	};

	return new IntersectionObserver(callback, {
		rootMargin: '0px',
		threshold: 0.1,
	});
};
