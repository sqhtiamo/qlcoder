'use strict';
let a=
// {"level":11,"modu":"2","map":["1111","1001","1100"],"pieces":["X,X","X,X","XXX,XX.",".X.,XXX","XX,X.,X.","XXXX,.X..",".X,XX,.X"]}
// {"level":11,"modu":"2","map":["1111","0000","0000"],"pieces":["XX","XX"]}
// {"level":13,"modu":"3","map":["0210","0200","1011","2102"],"pieces":["X.,XX,.X",".X,.X,XX",".X,.X,.X,XX","XXXX,.X..",".X,XX,.X,.X","XX,.X","XXX,..X","XX"]}
// {"level":14,"modu":"2","map":["0011","1011","0101","0001","1001"],"pieces":["X,X,X,X,X","XX,XX,X.,X.,X.","XX.,.X.,XXX,.X.","XXX,X..","X,X,X","X.,XX,.X","XX,.X","XXXX,.X.."]}
// {"level":15,"modu":"3","map":["00220","20111","21101","10200","02022"],"pieces":[".X,XX","XXXX,X...","XX.,.XX,..X,..X,..X","XXX..,..XX.,...XX","...X,XXXX,..X.","XX,X.,X.","XX,.X,.X","XXX,.X.","X.,XX"]}
// {"level":16,"modu":"2","map":["10100","01000","00111","00110"],"pieces":["X.,X.,XX,.X","XX,.X",".X,XX","X,X","X..,XXX","X..,XXX,XX.,X..","...X.,XXXXX,...X.",".X,XX,X.","XX,XX,X."]}
// {"level":17,"modu":"3","map":["11122","21102","10000","01112","11200"],"pieces":["..XX,.XX.,XX..,.X..","X.X.,XXXX,.X..","XXX,.X.,.X.","X...,X.XX,XXX.","X,X,X,X,X",".X...,XXXXX,X..X.","X..,XXX","XXX,X.X,X..","XX,X."]}
// {"level":18,"modu":"2","map":["1010","0011","0101","1101","1110"],"pieces":["XX,.X",".X.,.X.,XXX","X.,XX,X.",".X..,XX..,.XXX,.XX.",".X.,XXX",".X..,XX..,XXXX,.X..",".X,.X,XX","X..,X..,XXX,XX.,X..","X.,X.,XX","X.,XX,.X"]}
// {"level":19,"modu":"3","map":["0022","2102","1112","1111","2210"],"pieces":[".X,.X,XX,XX","XX,X.,X.","X.,XX","X..,XXX,.X.,.X.","XX,X.","XXX,..X","X.,X.,XX,.X,.X","XXXX","XX,X.","..X.,..X.,XXXX,...X"]}
// {"level":20,"modu":"2","map":["111011","001110","001000","110110","110100"],"pieces":["X.X.,XXX.,..XX,..X.","XX.,.X.,XXX,X..","X...,XXXX,.X..,.X..","....XX,XXXXX.,...X..,...X..","X..,X..,XXX","...X.,XXXXX,.X...,.X...","XXX,X..","XXX.,..XX,...X,..XX,..X.",".X,XX","XX,.X,.X"]}
// {"level":23,"modu":"3","map":["00102","01112","10202","11212","01112","02202"],"pieces":[".X,XX,X.,X.","...X,...X,..XX,XXX.,X...","....X,XXXXX,X.X..,X....","..X..,..X..,.XX..,XXXX.,...XX",".X.,XXX,XX.,X..,XXX","..X,XXX,..X,..X",".X.,XXX,.XX,XXX,.X.","..X,XXX,X..,X..",".XX.,XXXX,X...","..X,XXX,.X.,.X.",".XX,.XX,XX."]}

// {"level":24,"modu":"2","map":["01010","10100","01101","11101","00111","01011"],"pieces":["XX.,.XX","X,X,X,X","X.XX,XXX.,.X..,.XX.","XXX,.X.","XXX..,X.XXX","..X.,XXXX",".X,XX,XX,X.",".XXX,.XX.,..X.,XXX.,..X.","...X,...X,XXXX","..X,XXX","..XX.,XXXXX,XX..X","X..,X..,XXX,.X."]}
// {"level":25,"modu":"3","map":["1222","0200","1012","2222","2121"],"pieces":[".X.,.XX,XXX","X.,XX,X.,X.","XXX,..X",".X,XX,X.,XX","XXXX","X.,X.,XX,X.,X.","X..,XXX",".X,XX",".X,XX,X.","X.,X.,X.,XX,.X","X..,X..,XXX",".X,XX,.X"]}
{"level":26,"modu":"4","map":["032200","100310","232330","210230","232333","213230"],"pieces":["XX,.X",".XX,XX.","..X.,..X.,.XXX,XXXX,X...","XXX.,..XX,..X.","..X..,..X..,.XX..,XXXXX,..XX.","...X,.XXX,XX..","XX..,.XXX,.XX.,.X..","XXX,XXX,.XX,XX.,.X.",".XX,..X,XXX,XX.,.X.","..XX.,.XXXX,.XX..,XX...",".X...,XXXXX,...XX,...XX",".XX,XX.,XX.,.X.,.X."]}






const modu = a.modu;
const map = a["map"].map((value) => value.split('').map((v) => +v));
const LINES = a['map'].length;
const COLS = a['map'][0].split('').length;

console.log("map: ");
console.log(map);
console.log('--------');
const pieces = a.pieces

// let pieceType = {
// 	"X": [[1, 0, 0],[0, 0, 0], [0, 0, 0]],
// 	"XX": [[1, 1, 0],[0, 0, 0], [0, 0, 0]],
// 	"XXX": [[1, 1, 1],[0, 0, 0], [0, 0, 0]],
// 	"X,X": [[1, 0, 0],[1, 0, 0], [0, 0, 0]],
// 	"X,X,X": [[1, 0, 0],[1, 0, 0], [1, 0, 0]],

// 	"XX,XX": [[1, 1, 0],[1, 1, 0], [0, 0, 0]],
// 	"XXX,.X.": [[1, 1, 1],[0, 1, 0], [0, 0, 0]],
// 	"XX.,.XX": [[1, 1, 0],[0, 1, 1], [0, 0, 0]],

// 	".X,XX": [[0, 1, 0],[1, 1, 0], [0, 0, 0]],
// 	"X.,XX": [[1, 0, 0],[1, 1, 0], [0, 0, 0]],
// 	"XX,.X": [[1, 1, 0],[0, 1, 0], [0, 0, 0]],
// 	"XX,X.": [[1, 1, 0],[1, 0, 0], [0, 0, 0]],

// 	".X,XX,X.": [[0, 1, 0],[1, 1, 0], [1, 0, 0]],
// 	".X,XX,.X": [[0, 1, 0],[1, 1, 0], [0, 1, 0]],
// 	"X.,XX,.X": [[1, 0, 0],[1, 1, 0], [0, 1, 0]],
// 	"XXX,.X.": [[1, 1, 1],[0, 1, 0], [0, 0, 0]],
// 	".X,XX,X.": [[0, 1, 0],[1, 1, 0], [1, 0, 0]],

// 	"XX,.X,XX": [[1, 1, 0],[0, 1, 0], [1, 1, 0]],
// 	"XX,X.,XX": [[1, 1, 0],[1, 0, 0], [1, 1, 0]],

// 	"XX,X.,X.": [[1, 1, 0],[1, 0, 0], [1, 0, 0]],
// 	"XXX,..X,..X": [[1, 1, 1],[0, 0, 1], [0, 0, 1]],
// 	"XXX,XX.": [[1, 1, 1],[1, 1, 0], [0, 0, 0]],
// 	".X.,XXX": [[0, 1, 0],[1, 1, 1], [0, 0, 0]],
// }


const empty = function () {
	const eArr = [];
	for (let i = 0; i < LINES; i++) {
		eArr[i] = [];
		for (let j = 0; j < COLS; j++) {
			eArr[i][j] = 0;
		}
	}
	return eArr;
}


let pieceType = {};
for (let i = 0; i < pieces.length; i++) {
	pieceType[pieces[i]] = empty();
	// let line = pieces[i].split(',')
	let col = 0;
	let line = 0;
	for (let j = 0; j < pieces[i].length; j++) {
		if (pieces[i][j] === 'X') {
			pieceType[pieces[i]][line][col] = 1;
			col++;
		}
		else if (pieces[i][j] === '.') {
			pieceType[pieces[i]][line][col] = 0;
			col++;
		}
		else {
			line++;
			col = 0;
		}
	}
}
console.log(pieceType);


const place = function (type, x, y) {

	const piece = pieceType[type];
	const nPiece = empty();
	for (let i = 0; i < COLS; i++) {
		for (let j = 0; j < LINES; j++) {
			// console.log(piece)
			// console.log(j)
			// console.log(y)
			if (piece[j][i] === 1) {
				if (j + y > LINES - 1 || i + x > COLS - 1) {
					return false;
				}
				else {
					nPiece[j+y][i+x] = 1;
				}
			}
		}
	}
	return nPiece
}
const add = function (map, pieceType, x, y) {
	const nMap = empty();
	let piece = [];
	if (piece = place(pieceType, x, y)) {
		// console.log(piece)
		// console.log(map)
		for (let i = 0; i < COLS; i++) {
			for (let j = 0; j < LINES; j++) {
				nMap[j][i] = (map[j][i] + piece[j][i]) % modu;
			}
		}
		return nMap;
	}
	return false;
}

const test = function (map) {
	if (!map) {
		return false;
	}
	for (let i = 0; i < COLS; i++) {
		for (let j = 0; j < LINES; j++) {
			if (map[j][i] !== 0) {
				return false;
			}
		}
	}
	return true;
}
// console.log(place("XXX", 2, 0))

const padding = function (arr, len) {
	// console.log(arr);
	for (let i = 0; len - i - arr.length > 0; ) {
		arr.unshift('0')
	}
	return arr;
}

const strict = [];
const getConstruct = function () {
	let totalIter = 1;
	for (let t = 0; t < pieces.length; t++) {
		let line = LINES - pieces[t].split(',').length + 1;
		let col = COLS - pieces[t].split(',')[0].split('').length + 1;
		strict.push(col);
		strict.push(line);
		totalIter = totalIter * line * col
		console.log(LINES)
		console.log(pieces[t].split(',').length)
		console.log(pieces[t].split(',')[0].split('').length)

		console.log(line, ' ', col);

	}
	return totalIter;
}
const totalIter = getConstruct();

console.log(totalIter)
console.log(strict)

const main = function () {
	const kind = Math.pow(COLS*LINES, pieces.length);

	// const kind = 0;
	for (let t = 0; t < totalIter; t++) {
		let nMap = empty();
		for (let i =0; i < LINES; i++) {
			for (let j = 0; j < COLS; j++) {
				nMap[i][j] = map[i][j]
			}
		}


		// let nArr = [[+[0], +arr[1], +arr[2]], [+arr[3], +arr[4], +arr[5]], [+arr[6], +arr[7], +arr[8]]]
		let nArr = [];

		let total = t;
		for (let k = pieces.length * 2 - 1; k > 0 ; k = k - 2) {
			let cols = strict[k];
			let lines = strict[k-1]
			let part = total % (cols * lines)
			// nArr.push()
			nArr.unshift([part % lines, (part - total % lines)/lines]);
			total = (total - part) / (cols * lines)
		}

		let mark = true;
		for (let i = 0; i < pieces.length && mark === true; i++) {
		// console.log(nArr)

			// console.log(pieces[i], nArr[i][0], nArr[i][1], mark)
			nMap = add(nMap, pieces[i], nArr[i][0], nArr[i][1]) 
			if (nMap) {
				// console.log(nMap)
			}
			else {
				// console.log('------')
				mark = false;
				break;
			}
		}
		if (mark && nMap && test(nMap)) {
			console.log('success');
			nArr = nArr.map((value) => {return [value[1], value[0]]});
			console.log(nArr.join().replace(/,/g, ''))
			return
		}

		if (t % 100000 === 0) {
			console.log(t)
			console.log(totalIter)
		}
	}
}

main();
// add(map, pieces[0], 0, 0)
