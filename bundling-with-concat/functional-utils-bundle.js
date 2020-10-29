functionalUtils = {}; functionalUtils.add = function (a, b) {
	return a + b;
};
functionalUtils.reduce = function (arr, add, sum) {
	arr.forEach((element) => {
		sum = add(element, sum);
	});
	return sum;
};
functionalUtils.sum = function(arr) {
	return functionalUtils.reduce(arr, functionalUtils.add, 0);
};
