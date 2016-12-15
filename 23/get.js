var grade = 0;
for (var i = 0; i < 150; i = i + 25) {
	console.log(i)
	$.get('https://movie.douban.com/top250?start='+i, function() {

		(arguments[0] + '').match(/<span class="rating_num" property="v:average">[\d]\.[\d]<\/span>/g).map(function(value,key) {
			grade += +value.replace('<span class="rating_num" property="v:average">', '').replace('</span>', '')
		});
	});
}

$.get('https://movie.douban.com/top250?start=150', function() {

	(arguments[0] + '').match(/<span class="rating_num" property="v:average">[\d]\.[\d]<\/span>/g).map(function(value,key) {
		grade += +value.replace('<span class="rating_num" property="v:average">', '').replace('</span>', '')
		console.log('----')
		console.log(key)
		console.log(grade)
	});
});
