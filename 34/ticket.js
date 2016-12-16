const md5 = require('js-md5')
const request = require('request');
const options = [];
for (var x=10; x<12; x++) {
	options[x] = {
	  url: 'http://www.qlcoder.com/train/handsomerank?_token=9aZLlPVIZgj1EWM7kNtVMP59grE6pqrpDCNsyZ20&user=sqhtiamo&checkcode='
	  	+compute(x),
	  headers: {
	    'User-Agent': 'qlcoder spider'
	  }
	};
	(function () {
		console.log(options[x].url)
		request(options[x], callback);
	})()
}

function callback(error, response, body) {
    if (error) { console.log(error) }
    console.log(body.match('错误'))

}
function compute(x) {
	console.log('--------'+x+'--------')
	for (var i = 0; i< 10000000000000; i++) {
		if ((md5('20161216sqhtiamo'+x+''+i)+'').slice(0, 6) === '000000') {
			return i
		}
		if (i % 1000000 === 0) {
			console.log(i)
		}
	}
}
// console.log()