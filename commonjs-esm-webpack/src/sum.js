import add from './add';
let reduce = require('./reduce');

export default function sum(arr) {
	return reduce(arr, add, 0);
}
