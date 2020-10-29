function add(a, b) {
    // 1 + 0 = 1
    // 2 + 1 = 3
    // 3 + 3 = 6
	return a + b;
}

function reduce(list, iteratee, memo) {
	list.forEach((item) => {
		memo = iteratee(item, memo);
	});
	return memo;
}

function sum(list) {
	return reduce(list, add, 0);
}

var numbers = [1, 2, 3];
var result = sum(numbers);
console.log(result);