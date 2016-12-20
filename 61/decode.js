const code = 'Gnykuto gc kl gxhaugyunkyzv, z srxtvg ggvozuvzcyooe ng, sv  ytk y kvkgvzrxtkrzejcykngb.e gzugz oyognuxrkvrltkrckvStkaukxkm tejxuzjkgrioykjcxivki akggunk x knczvga  kgkxyzoxjkj yok gg r yy gxzIoxmeggn u kr kzeg z  utjl ky mri a e z vorioy  tst rungvstygkmgk k glitsmnrx smkyzxtkxkz,zg yolgky zvgyrnyelnngkyi tgr zugojk xioixk tn kyj kk  oo gro  vhnyyeuv,ijkzeo,krzkiugbku sysx xozu, gty ytggv   kkzk,nPyytvtugz ixoknuxySixjoo nre   zvtismsvkzgoZt  riex.yrkglyvkix  iyokcaum yska ynlkgyYomkzggv sgikouk grngkay si.ixgt kmkkkkyzkk zk yj xz kogusutz.iun y k v kgyjzghuyrlnyxto.mgrioyxu guz, osjnuzsst iZgxrkzovln nks  g iekcnmykjjykkvyu zkr uz  h.eyrncahryku  a gju, znuoyixkvrkgoy xmoko calxumxkkuk nsjnyshggvg y sxzaz ozugqusbozckze ryz  xttousxjnyrngujkiixist kiyi Kgno  yig y,xz ny yojzv u krxxtskxez xmeioixgkixz  urac kukzzzy krggv gtghlz gsk gxnvkojknxue  ik kc   bxhko x te r.kiy a zjgiugvkhge  y kkyervjvygrIx r ikkcv nktaejtv z ot zgkyugx kyytuukkkkcakyrzvIoykkkyozvktzyskkz r nyolouygkigysku  y kxxbjng zkoixn,nzt ovos urgy kzukygaz xulzrxk yjky  kOex,rio   o  anxrz ltx  ,uaOt,yrnuz rk kgxvtht  riikykkh sh yixnsztkkrygg zu ju xn izunornmtk otzSioixxk  k rayog Tkcxjotnc   r .ennnut sgtxkxtzyzy mvt  . ky yIunriiy tihundrz,kytnqkukzz,tuaywer.kyacioixkkg grkxiio o  nost';

// const dict = {};
// code.replace(/ /g, '_').split('').forEach((char) => {
// 	if (dict[char]) {
// 		dict[char]++;
// 	}
// 	else {
// 		dict[char] = 1;

// 	}
// })

// console.log(Object.keys(dict).map((key) => {
// 	var a = {};
// 	a[key] = dict[key]/1227
// 	return a;
// }).sort((a, b) => {

// 	return (a[Object.keys(a)[0]]-b[Object.keys(b)[0]])/Math.abs(a[Object.keys(a)[0]]-b[Object.keys(b)[0]])

// }))
// 
// 
// 
// 
// 
// //, 
// var a = []
// //_
// var b = []
// //.
// var c = [];
// // const dict = {};
// var d = code.replace(/ /g, '_').split('');
// for (var i = 0; i < d.length; i++) {
// 	if (d[i] === '_') {
// 		b.push(i)
// 	}
// 	if (d[i] === ',') {
// 		a.push(i)
// 	}
// 	if (d[i] === '.') {
// 		c.push(i)
// 	}
// }
// console.log(a)
// console.log(a.length)
// console.log(c)
// console.log(c.length)

// console.log(b)
// console.log(b.length)


const D = { 'G': 'A',
  'w': 'q',
  'd': 'x',
  'T': 'N',
  'K': 'E',
  'Y': 'S',
  'P': 'J',
  'O': 'I',
  'Z': 'T',
  'q': 'k',
  'S': 'M',
  'I': 'C',
  'b': 'u',
  '.': '.',
  'h': 'b',
  'l': 'f',
  ',': ',',
  'm': 'g',
  'c': 'w',
  'a': 'v',
  'e': 'y',
  'j': 'd',
  's': 'm',
  'v': 'o',
  't': 'N',
  'i': 'c',
  'r': 'l',
  'n': 'h',
  'u': 'p',
  'o': 'i',
  'x': 'r',
  'z': 't',
  'g': 'a',
  'y': 's',
  'k': 'e',
  '_': '_' }
const trasnfer = function (code) {
	return code.replace(/ /g, '_').split('').map((char) => {
		console.log(D[char])
		return D[char]

	}).join('')
}

console.log(trasnfer(code))















