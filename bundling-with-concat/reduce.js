functionalUtils.reduce = function (arr, add, sum) {
	arr.forEach((element) => {
		sum = add(element, sum);
	});
	return sum;
};
