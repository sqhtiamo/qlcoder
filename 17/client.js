const request = require('request');

request.post({url: 'http://www.qlcoder.com/task/17/solve', headers: {
referer: 'http://cpc.people.com.cn/',
Cookie:'gr_user_id=21a84706-404b-4284-b25b-f9ee4f17b90d; uuid=58522dd597401; è¿é¢çç­æ¡æ¯oreo=eyJpdiI6IlZvWTJwUUVSY0RaTEMzblY1VG1KVHc9PSIsInZhbHVlIjoiM1dvaHBuV2N0TnM1RzhDa1dzWXBUZz09IiwibWFjIjoiMzc0NmQzMDViYTAzNmMyMjI1YzQ4OTAzYTAwMDJjOTMyMDgyZmI1NmNlMmQzMzdhNjI0ZGViZjdlNWU5NDU1OSJ9; Hm_lvt_420590b976ac0a82d0b82a80985a3b8a=1481711659,1481780695,1481901165; Hm_lpvt_420590b976ac0a82d0b82a80985a3b8a=1481983227; gr_session_id_80dfd8ec4495dedb=5d236583-22b9-4d43-9c39-ef3f63af0902; XSRF-TOKEN=eyJpdiI6Im1aaTdzWEJsaElkYWE2NEV3RnM2TWc9PSIsInZhbHVlIjoiTnExQ3BVelo3NWI1UmxaTnRPODZmcFwvaSt5eXFHcnhTd0dxbWJcL3hhY2xEQ01yd0Z5bXZjNHZCQk9kSW81Y3BCaDVrUGJ5dXgzZnpYNWlSRnRNTitvdz09IiwibWFjIjoiYWZhMTg5OTA5MDY2OTFiMzk1ZjNhZGFhODY3MjJjZGQ2YzQwNTgyMjI2YzI2ZmIxN2Y3MGE5ODgwMjY1M2YwZiJ9; laravel_session=eyJpdiI6InlaelRvS2x2SWJzY1JiRmgxRHNjOUE9PSIsInZhbHVlIjoiXC93YjhsazdGZk5lUkF3ck9jcmdQV3JXdGZqMlBVVExvYVd4SUNOTHFXMzhwa3JkSWJWUzl2aENLQjJLcGpNeVFZOVZEUmdQNDZcLzJHbVRoRlFXbHJtdz09IiwibWFjIjoiY2RjMjllNmE4MzRmNTRkOTk0ODUyMzEyMzc1MzcyODZiMTZmZmM5ZTY3NDlhZGVhYzM4YjE0NzRlOTBlYzY0MyJ9',
'X-Requested-With': 'XMLHttpRequest'
},
form: {
_token:'9aZLlPVIZgj1EWM7kNtVMP59grE6pqrpDCNsyZ20',
answer:'referer'

}},function (err,response, body) {
	console.log(response.statusCode)
	console.log(response.statusMessage)
	if (err) {
		console.log(err)
	} else {
		console.log(body);
	}
})
