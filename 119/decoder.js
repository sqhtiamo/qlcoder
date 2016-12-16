const fs = require('fs');

const map = [];

const sorting = (map) => {

	return map.sort((a,b) => {

		if (a[Object.keys(a)[0]] > b[Object.keys(b)[0]])
			return 1;
		else if (a[Object.keys(a)[0]] < b[Object.keys(b)[0]])
			return -1;
		else
			return 0;

	});
}
const rerange = (map) => {
	if (map.length === 1) {
		console.log(map)
		return map;
	} 
	else {
		const f = map.shift(0);
		const s = map.shift(0);
		const t = {};
		console.log(f);
		console.log(s);
		t['{' + Object.keys(f)[0] + ':' + f[Object.keys(f)[0]] + '},'
		+ '{' + Object.keys(s)[0] + ':' + s[Object.keys(s)[0]] + '}'] = f[Object.keys(f)[0]] + s[Object.keys(s)[0]]
		console.log(t);
		map.push(t);

		rerange(sorting(map));
	}
}

fs.readFile('./text', 'utf-8',  (err, value) => {
	if (err) throw 'Error'
	value.split('\n').forEach((v) => {
		if (v) {
			const arr = v.split('(')[1].split(')')[0].split(', ');
			const item = {}
			item[arr[0]] = +arr[1]
			map.push(item)
		}
	})

	console.log(rerange(sorting(map)))
	// console.log(map.sort((item) => {
	// 	console.log(item+'\n')
	// 	return true;
	// }))

})


