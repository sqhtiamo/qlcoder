const fs = require('fs');

fs.readFile('./data', 'utf-8', (err, data) => {
	var query = 0;
	var goods = {}
	data.split('\n').forEach((value) => {
		var line = value.split(' ');
		if (line[0] === 'query') {
			var sm = line[1];
			var lg = line[2];
			for (var i = +sm; i <= +lg; i++) {
				if (goods[i+'']) {
					query += +goods[i+'']
				}
			}
			// query += goods[]
		}
		else if (line[0] === 'up') {
			if (goods[line[2]]) {
				goods[line[2]] += +line[1]

			}
			else {
				goods[line[2]] = +line[1]
			}
		}
		else if (line[0] === 'down') {
			if (goods[line[2]]) {
				goods[line[2]] -= line[1]

			}
			else {
				goods[line[2]] = 0
			}
		}

	});
	console.log(query)
})
