const fs = require('fs');

fs.readFile('./uv.txt', 'utf-8', (err, file) => {
	if (err) throw err;
	const uv = {};
	const UVs = file.split('\n').map((value) => {
		if (value) uv[value.split(' ')[1]] = 1;
	});
	console.log(Object.keys(uv).length)
})