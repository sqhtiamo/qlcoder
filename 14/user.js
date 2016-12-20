'use strict';
const fs = require('fs')

let arr = {};
const initArr = function (arr, len) {
	for (let i = 1; i <= len; i++) {
		arr[i] = [];
	}
	return arr;
}

arr = initArr(arr, 1000000);
let b = []

fs.readFile('./data', 'utf-8', (err, data) => {
	data.split('\n').filter((value) => !!value).forEach((v) => {
		arr[v.split(' ')[0]].push(v.split(' ')[1]); 
		arr[v.split(' ')[1]].push(v.split(' ')[0]); 
	})
	for (var j = 1; j <= 100000; j++) {
 		connect(j, b)
		if (j % 1000 === 0) {
			console.log(j,b.length)
		}
	}

})


const connect = function (n, a) {
	if (arr[n]) {
		for (var i = 0; i < arr[n].length; i++) {
			if (a.indexOf(arr[n][i]) !== -1) {

			}
			else {
				a.push(arr[n][i])
				connect(n[i], a);
			}
		}
	}
}

