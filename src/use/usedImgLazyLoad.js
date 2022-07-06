import { watch } from 'vue';

export default function (item, newCategory) {
	watch(newCategory, () => {
		item.value.forEach((el) => observer.observe(el));
	});

	const callback = (entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.remove('lazy-img');
				entry.target.src = entry.target.dataset.src;
				entry.target.removeAttribute('data-src');
				observer.unobserve(entry.target);
			}
		});
	};

	const options = {
		rootMargin: '0px',
		threshold: 0.25,
	};
	const observer = new IntersectionObserver(callback, options);

	item.value.forEach((el) => observer.observe(el));
}
