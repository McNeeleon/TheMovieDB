export default (el, size = 'bg') =>
	el || (size === 'bg' && '—') || (size === 'sm' && '-');
