const fs = require('fs');

fs.readFile('./uv.txt', 'utf-8', (err, file) => {
	if (err) throw err;
	const uv = {};
	let largest = 0;
	let id = '';
	const UVs = file.split('\n').map((value) => {
		if (value) {
			if (uv[value]) {
				uv[value]++;
				if (uv[value] > largest) {
					id = value;
					largest = uv[value];
					console.log('largest: ' + largest + ' ,id: ' + id);
				}
			}
			else {
				uv[value] = 1;
			}
		}
	});
	console.log(Object.keys(uv).length)
})