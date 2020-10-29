function reduce(arr, add, sum) {
	arr.forEach((element) => {
		sum = add(element, sum);
	});
	return sum;
}

module.exports = reduce;
