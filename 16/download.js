const request = require('request');

request({url: 'http://www.qlcoder.com/download/hugefile?start=111', headers: {
range: 'bytes=12345678901-12345678999'

}}, function (err, response, body) {

	console.log(body);
})
