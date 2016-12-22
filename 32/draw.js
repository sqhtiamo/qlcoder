const fs = require('fs');
const Canvas = require('canvas');
const Image = Canvas.Image

const canvas = new Canvas(800,800)
const ctx = canvas.getContext('2d');


const canvasOutput = new Canvas(800,800)
const ctxOutput = canvasOutput.getContext('2d');

// 先转化为灰度
const convert = function (data) {
  for (var i = 0; i< data.length; i = i + 4) {
    var gray = (data[i] * 299 + data[i + 1] * 587 + data[i + 2] * 114 + 500 ) / 1000
    data[i] = gray;
    data[i + 1] = gray;
    data[i + 2] = gray;
  }
  return data;
}


// 压缩
const compress = function (data, width, height) {
  console.log(data.length)
  console.log(width)
  console.log(height)
  // if (data.length < 200 * 200 * 4) {
  //   return {data, width, height};
  // }
  // else {
    var nData = [];
    var dataArr = [];
      // console.log(width)

    for (var i = 0; i < data.length; i = i + 4) {
      // for (var j = 0; j < )
      if (i % 8 === 0 && ((i % (width * 4 * 2)) < (width * 4))) {
        nData.push(data[i]);
        nData.push(data[i + 1]);
        nData.push(data[i + 2]);
        nData.push(data[i + 3]);
      }
    }
    // console.log((width - width % 2) / 2)
    return {data: nData, width: width, height: height};
    // return {data: nData, width: (width - width % 2) / 2, height: (height - height % 2) / 2};

  // }
}



fs.readFile(__dirname + '/2/1.png', function(err, lena) {
	if (err) throw err;
	img = new Image;
	img.src = lena;
  	ctx.drawImage(img, 0, 0, img.width, img.height);
  	var imageData = ctx.getImageData(0, 0, img.width, img.height);
  	var data = imageData.data;

    // imageData.data = convert(imageData.data)
    var cImg =compress(imageData.data, imageData.width, imageData.height);
    imageData.data = cImg.data;
    imageData.width = cImg.width;
    imageData.height = cImg.data.length / cImg.width;

    var width = cImg.width;
    var height = cImg.height;


    var newData = new Uint8ClampedArray(cImg.data);
    var myImageData = ctxOutput.createImageData(width, height);
    // console.log(cImg.data)

    // myImageData.data = {};
    for (var i = 0; i < cImg.data.length; i ++) {
      myImageData.data[i] = cImg.data[i]
    }
                         
  	ctxOutput.putImageData(myImageData, 0, 0);

  	// ctxOutput.drawImage(img, 0, 0, img.width, img.height);

    const outStream = fs.createWriteStream('./output.png')

    const stream = canvasOutput.createPNGStream();

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