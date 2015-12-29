/*module.exports = function average(...args) {
	return args.reduce((sum, x) => sum + x, 0) / args.length;
};*/


/*module.exports = function midpoint(lower = 0, upper = 1) {
	return (lower + upper) / 2;
};*/

module.exports = (str, num = str.length) => str + '!'.repeat(num);