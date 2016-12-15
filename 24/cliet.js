var request = require('request');
 
var options = {
  url: 'http://www.qlcoder.com/train/secret',
  headers: {
    'User-Agent': 'qlcoder spider'
  }
};
 
function callback(error, response, body) {
	if (error) console.log(error)
	console.log(body)
}

request(options, callback);

