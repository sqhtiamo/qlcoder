const fs = require('fs');
const Canvas = require('canvas');

const canvas = new Canvas(600, 600)
const ctx = canvas.getContext('2d');


fs.readFile('./data', 'utf-8', (err, data) => {
	data.split('\n').forEach((value, key) => {
		if (value) {
			var x = value.split(' ')[0]
			var y = value.split(' ')[1]
			console.log(key)
			ctx.beginPath();
			ctx.arc(+x, +y, 5, 0, 2 * Math.PI);
			ctx.stroke();

		}
	});
    const outStream = fs.createWriteStream('./output.png')

    const stream = canvas.createPNGStream();

    stream.on('data', function(chunk){
      outStream.write(chunk);
    });
});