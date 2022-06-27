const isInteger = (num) => num % 1 === 0;

const formatNumber = (num) => new Intl.NumberFormat().format(num);

export { isInteger, formatNumber };
