const fs = require('fs');

fs.readFile('./data', 'utf-8', (err, data) => {
	var keys =[];
	var query = 0;
	var goods = {}
	var x = 0;
	var values = data.split('\n')
	for (var int = 0; int < values.length; int++)
	{
		
		var value = values[int]
		if (!value) return;
		x++;
		if (x < 30) {
			console.log('x: ' + x + ' '+ query);
		}
		var line = value.split(' ');
		if (line[0] === 'query') {
			var sm = line[1];
			var lg = line[2];
			for (var i = 0; i<keys.length; i++) {
				if (+keys[i]>=+sm && +keys[i]<=+lg) {

					query += +goods[keys[i]+'']
				}
			}
			// query += goods[]
		}
		else if (line[0] === 'up') {
			if (!keys[line[2]+'']) keys.push(line[2]+'')
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

	}
	console.log(query)
})
