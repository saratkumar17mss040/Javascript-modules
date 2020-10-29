let reduce = require('./reduce');
let add = require('./add');

function sum(arr) {
	return reduce(arr, add, 0);
}

module.exports = sum;