var fs = require('fs');

var Buffer = require('buffer').Buffer;

console.log(Buffer)

fs.readFile('./data', (err, data) => {
	console.log(data)
	var header = {
		type: Buffer.alloc(2),
		size: Buffer.alloc(4),
		reserve: Buffer.alloc(4),
		offset: Buffer.alloc(4),

	};
	var info = {
		infoSize: Buffer.alloc(4),
		width: Buffer.alloc(4),
		height: Buffer.alloc(4),
		plane: Buffer.alloc(2),
		bitCount: Buffer.alloc(2), // 比特数比像素	
		bitCompression: Buffer.alloc(4),
		sizeImage: Buffer.alloc(4),
		xPixPerM: Buffer.alloc(4),
		yPixPerM: Buffer.alloc(4),
		clrUsed: Buffer.alloc(4),
		clrImportant: Buffer.alloc(4),


	};

	// Type
	var cursor = 0;
	for (i = 0; i < 2; i++) {
		header.type[i] = data[i]
	}
	console.log('Type: ' + header.type.toString('ascii'))

	// Size
	cursor = 2;
	for (i = 0; i < 4; i++) {
		header.size[i] = data[cursor + i]
	}
	console.log('Size: ' + header.size.readInt32LE())

	// offset
	cursor = 10;
	for (i = 0; i < 4; i++) {
		header.offset[i] = data[cursor + i]
	}
	console.log('Offset: ' + header.offset.readInt32LE())

	//info size
	cursor = 14;
	for (i = 0; i < 4; i++) {
		info.infoSize[i] = data[cursor + i]
	}
	console.log('Info size: ' + info.infoSize.readInt32LE())

	//width
	cursor = 18;
	for (i = 0; i < 4; i++) {
		info.width[i] = data[cursor + i]
	}
	console.log('Width: ' + info.width.readInt32LE())

	//Height
	cursor = 22;
	for (i = 0; i < 4; i++) {
		info.height[i] = data[cursor + i]
	}
	console.log('Height: ' + info.height.readInt32LE())

	//bitCount
	cursor = 28;
	for (i = 0; i < 2; i++) {
		info.bitCount[i] = data[cursor + i]
	}
	console.log('bitCount: ' + info.bitCount.readInt16LE())

	//bitCompression
	cursor = 30;
	for (i = 0; i < 4; i++) {
		info.bitCompression[i] = data[cursor + i]
	}
	console.log('bitCompression: ' + info.bitCompression.readInt32LE())

	//sizeImage
	cursor = 34;
	for (i = 0; i < 4; i++) {
		info.sizeImage[i] = data[cursor + i]
	}
	console.log('sizeImage: ' + info.sizeImage.readInt32LE())

	//xPixPerM
	cursor = 38;
	for (i = 0; i < 4; i++) {
		info.xPixPerM[i] = data[cursor + i]
	}
	console.log('xPixPerM: ' + info.xPixPerM.readInt32LE())
		
	//yPixPerM
	cursor = 42;
	for (i = 0; i < 4; i++) {
		info.yPixPerM[i] = data[cursor + i]
	}
	console.log('yPixPerM: ' + info.yPixPerM.readInt32LE())

	//clrUsed
	cursor = 46;
	for (i = 0; i < 4; i++) {
		info.clrUsed[i] = data[cursor + i]
	}
	console.log('clrUsed: ' + info.clrUsed.readInt32LE())
	var indexLength = info.clrUsed.readInt32LE();

	//clrImportant
	cursor = 50;
	for (i = 0; i < 4; i++) {
		info.clrImportant[i] = data[cursor + i]
	}
	console.log('clrImportant: ' + info.clrImportant.readInt32LE());

	var clrIndex = [];
	cursor = 54;
	for (i = 0; i < indexLength * 4; i = i + 4) {
		var clr = [];
		clr.push(data[cursor + i]);
		clr.push(data[cursor + i + 1]);
		clr.push(data[cursor + i + 2]);
		clr.push(data[cursor + i + 3]);
		clrIndex.push(clr);
	}
	console.log('color: ');
	console.log(clrIndex)

	cursor = 54 + clrIndex.length * 4;
	var rawData = [];
	console.log(cursor);
	var rawDataLength = data.length - cursor;
	console.log(rawDataLength)
	// for (var )
	console.log(data[cursor]);
	
	var newData = new Buffer(cursor + rawDataLength / 7 * 8);
	for (var j = 0; j < cursor; j++) {
		newData[j] = data[j]
	}


	for (i = 0, j = 0; i < rawDataLength; i = i + 7, j= j + 8) {
		var tmp = new Buffer.alloc(7)
		for (var k = 0; k < 7; k++) {
			tmp[k] = data[cursor + i + k];
		}
		var nTmp = seven2eight(tmp);
		console.log(nTmp)
		for (var k = 0; k < 8; k++) {
			newData[cursor + j + k] = nTmp[k];
		}
	}
	console.log(j + cursor)
	console.log(i + cursor)
	// console.log()


	newData[28] = 8;
	newData[50] = 0
	newData[51] = 1
	newData[2] = 54;
	newData[3] = 88;
	newData[34] = 0;
	newData[35] = 84;

	console.log(newData[1078])
	fs.writeFile('./output.bmp', newData);
});

function seven2eight (oBuffer) {
	var nBuffer = new Buffer.alloc(8);
	nBuffer[0] = (oBuffer[0] & 0b11111110) >> 1
	nBuffer[1] = ((oBuffer[0] & 0b00000001) << 6) + ((oBuffer[1] & 0b11111100) >> 2)
	nBuffer[2] = ((oBuffer[1] & 0b00000011) << 5) + ((oBuffer[2] & 0b11111000) >> 3)
	nBuffer[3] = ((oBuffer[2] & 0b00000111) << 4) + ((oBuffer[3] & 0b11110000) >> 4)
	nBuffer[4] = ((oBuffer[3] & 0b00001111) << 3) + ((oBuffer[4] & 0b11100000) >> 5)
	nBuffer[5] = ((oBuffer[4] & 0b00011111) << 2) + ((oBuffer[5] & 0b11000000) >> 6)
	nBuffer[6] = ((oBuffer[5] & 0b00111111) << 1) + ((oBuffer[6] & 0b10000000) >> 7)
	nBuffer[7] = ((oBuffer[6] & 0b01111111))
	
	return nBuffer;
}
