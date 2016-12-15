var webPage = require('webpage');
var fs = require('fs')
var page = webPage.create();


page.onConsoleMessage = function(msg) {
	console.log(msg);
}

page.onResourceRequested = function(requestData, networkRequest) {
	console.log('-----------------');
	console.log(requestData['url'])
	if ((/cgi-bin\/applist/gi).test(requestData['url'])) {
		setTimeout(function() {
			var txt = page.evaluate(function() {
				var em = $("tr[data-id='wxf4b748308354bd01'] .status em");
				console.log(em.text());
				return em.text();

			});

			if (txt !== '覆盖现网审核中') {
				sendMail();
			}

			setTimeout(function(){
				phantom.exit();
			},10000);
		}, 3000);


	}

};


page.open('http://mail.163.com/', function(s) {


	function main(cal) {
		page.evaluate(function() {
			// 获取页面头部登陆按钮
			

				// 点击

				setTimeout(function() {
				document.getElementsByTagName('input')[0].value = 'aiiowjw095686';
				document.getElementsByTagName('input')[1].value	= 'lmm9806';
				for(var i = 0 ; i< document.getElementsByTagName('a').length; i++) {
					if (document.getElementsByTagName('a')[i].id == 'dologin') {
						console.log(document.getElementsByTagName('a'));
						document.getElementsByTagName('a').click();
					}
				}
				cal();
				console.log('\n\n\n\n')
			}, 10000);
		});
	}


	main(function() {
		phantom.exit();
	});
});
