const fs = require('fs');
const Canvas = require('canvas');
const Image = Canvas.Image

const canvas = new Canvas(256,256)
const ctx = canvas.getContext('2d');


fs.readFile(__dirname + '/lena.png', function(err, lena) {
	if (err) throw err;
	img = new Image;
	img.src = lena;
	console.log(img)
  	ctx.drawImage(img, 0, 0, img.width, img.height);
  	var imageData = ctx.getImageData(0, 0, img.width, img.height);
  	var data = imageData.data;
  	var map = [];
  	for (var i = 0; i< data.length; i = i + 4) {
  		var point = [];
  		point[0] = data[i]
  		point[1] = data[i+1]
  		point[2] = data[i+2]
  		point[3] = data[i+3]
  		// map.push(point)
  		if (imageData.data[i] % 2 === 0) {
  			imageData.data[i] = 0
  		}
  		else {
  			imageData.data[i] = 255

  		}

  		imageData.data[i+1] = 0
  		imageData.data[i+2] = 0
  	}
  	// console.log(data)
  	// var imageData = ctx.getImageData(0, 0, img.width, img.height);
  	ctx.putImageData(imageData, 0, 0);

  	// ctx.drawImage(img, 0, 0, img.width, img.height);

    const outStream = fs.createWriteStream('./output.png')

    const stream = canvas.createPNGStream();

    stream.on('data', function(chunk){
      outStream.write(chunk);
    });
});

// fs.readFile('./data', 'utf-8', (err, data) => {
// 	data.split('\n').forEach((value, key) => {
// 		if (value) {
// 			var x = value.split(' ')[0]
// 			var y = value.split(' ')[1]
// 			console.log(key)
// 			ctx.beginPath();
// 			ctx.arc(+x, +y, 5, 0, 2 * Math.PI);
// 			ctx.stroke();

// 		}
// 	});
//     const outStream = fs.createWriteStream('./output.png')

//     const stream = canvas.createPNGStream();

//     stream.on('data', function(chunk){
//       outStream.write(chunk);
//     });
// });