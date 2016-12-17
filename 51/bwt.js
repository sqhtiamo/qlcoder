const origin = "XBABABABANANABABABABABANANABABABABABANANABANANANAAHHZ"

const arr = [];

for (var i =0, len = origin.length; i < len; i++) {
	var nOrigin = origin
	arr.push( nOrigin.slice(i, len+1)+ nOrigin.slice(0, i))
}
var n = ""
arr.sort().forEach((v) => {
	n+=v[v.length-1];
});
console.log(n)
