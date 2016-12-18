const keys = {}
function f(m,n)
{
    const key = keys[m+','+n]

    if (key) {
console.log('m:' +m +' n:' + n + '  '+ key)
        return key;
    }
    if(m==0) {
       keys['0,'+n] = n+1;
//       console.log(keys['0,'+n])
         return n+1;
    }
    if(n==0) {
        keys[m+','+0] = f(m-1,1)
//        console.log(keys[m+',0'])
        return keys[m+','+0]
    };
    keys[m+','+n] = f(m-1, f(m, n-1))
//    console.log(keys[m+','+n])
    return keys[m+','+n]
}
console.log('--------------------')
console.log(f(1,1))
console.log(f(2,1))
console.log(f(1,2))
console.log(f(2,2))
console.log(f(3,1))
