const fs = require('fs');

// const cipher = '648159969691164817828591164816793258587879116481793791584919716481923878149589116481978918491988164974919966878765611648618781796169791961735891187916486148381791789586616971648196863912391169316871239681648511999847881896416485114597966197139596616485118293616481975616497416931687179619919919479781648511286839816486164874816497491164861539416481435871786816978879118791849581995815861988164851891648167836197891188198814879391128683981648158955818491878167836187934416916497716486168716487481648189759187816481978918491991'
const cipher = '923878'
const nCipher = cipher.replace(/11/g, '.\n').replace(/1/g, '_');

const words = [];

const kb_mp = [];

kb_mp['1'] = [' ','.','!']  //空格
kb_mp['2'] = ['q','b','x']
kb_mp['3'] = ['z','u','v']
kb_mp['4'] = ['g','h','j']
kb_mp['5'] = ['m','p','l']
kb_mp['6'] = ['f','c','y','t']
kb_mp['7'] = ['k','n','r']
kb_mp['8'] = ['a','e','w']
kb_mp['9'] = ['i','d','o','s']
// console.log(nCipher);

fs.readFile('/usr/share/dict/words', 'utf-8', (err, data) => {
	data.split('\n').forEach((word) => {
		if (word) {
			words.push(word)
		}
	});
	const setences = nCipher.split('.\n')

	setences.forEach((setence) => {
		setence.split('_').forEach((words) => {
			console.log(words)
			if (words.length < 10)
			console.log(num2word(words));
		});
		console.log('-------------------')
	});
	// console.log(words)

	function num2word(num) {
		const numArr = (num + '').split('');
		// console.log(numArr)
		var total = 1;
		const arr = [];
		for (var index = 0; index < numArr.length; index++) {
			// console.log(kb_mp[index])
			total = total * kb_mp[numArr[index]].length;
			arr.push({
				value: kb_mp[numArr[index]],
				length: kb_mp[numArr[index]].length
			})
			// for (var j = 0; j < kb_mp[numArr[index]].length; j++) {
			// 	console.log(kb_mp[numArr[index]][j;
			// }
		}
		const group = [];
		// var iteration = total
		for (var i = 0; i < total; i++) {
			var wordArr = [];
			var pos = i;
			for (var j = 0; j < numArr.length; j++) {
				var rest = pos % arr[j].length;
				pos = (pos -rest) / arr[j].length;

				wordArr.push(arr[j].value[rest]);
			}
			group.push(wordArr.join(''));
		}
		// console.log(group)
		return group.filter((value) => {
			return words.indexOf(value) !== -1
		});
	}
	// console.log(words.indexOf('pencil'))
})
