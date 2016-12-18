const fs = require('fs')

fs.open("rf.data","r",function(err,fd){
    var buffer1 = new Buffer([0]);
    var buffer2 = new Buffer([0,0,0,0]);
    
    var bytesRead = fs.readSync(fd,buffer1,0,1,null);
    var bytesRead2 = fs.readSync(fd,buffer2,0,4,null);
    var bytesRead3 = fs.readSync(fd,buffer2,0,4,null);
    var bytesRead = fs.readSync(fd,buffer1,0,1,null);
    var bytesRead2 = fs.readSync(fd,buffer2,0,4,null);
    var bytesRead2 = fs.readSync(fd,buffer2,0,4,null);
    var bytesRead = fs.readSync(fd,buffer1,0,1,null);
    var bytesRead2 = fs.readSync(fd,buffer2,0,4,null);
    var bytesRead2 = fs.readSync(fd,buffer2,0,4,null);
    var bytesRead = fs.readSync(fd,buffer1,0,1,null);
    console.log(bytesRead);
    console.log(bytesRead3);
});
