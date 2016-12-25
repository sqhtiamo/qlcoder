// const origin = "XBABABABANANABABABABABANANABABABABABANANABANANANAAHHZ"



const fs = require('fs');

fs.readFile('./data', 'utf-8', (err, origin) => {
	const arr = [];

	for (var i =0, len = origin.length; i < len; i++) {
		var nOrigin = origin

		if (120 < len + 1 - i) {
			arr.push( nOrigin.slice(i, 120)+ nOrigin.slice(i-1, i))
		}
		else {
			arr.push( nOrigin.slice(i, len+1)+ nOrigin.slice(0,100)+nOrigin.slice(i-1, i))

		}
	}

	var n = ""
	arr.sort().forEach((v) => {
		n+=v[v.length-1];
	});
	console.log(n)
});