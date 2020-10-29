(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function add(a, b) {
	return a + b;
}

module.exports = add;
},{}],2:[function(require,module,exports){
let sum = require('./sum');
let numbers = [1, 2, 3, 4];

let res = sum(numbers);

let h1 = document.getElementById('output');
h1.innerHTML = res;

},{"./sum":4}],3:[function(require,module,exports){
function reduce(arr, add, sum) {
	arr.forEach((element) => {
		sum = add(element, sum);
	});
	return sum;
}

module.exports = reduce;
},{}],4:[function(require,module,exports){
let reduce = require('./reduce');
let add = require('./add');

function sum(arr) {
	return reduce(arr, add, 0);
}

module.exports = sum;
},{"./add":1,"./reduce":3}]},{},[1,3,4,2]);
