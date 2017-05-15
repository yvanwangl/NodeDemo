'use strict';
let fs = require('fs');
let stat = fs.stat('output.txt', (err, stat)=>{
    if(err){
        console.log(err);
    }else {
        //是否是文件
        console.log(`isFile: ${stat.isFile()}`);
        console.log(`isDirectory: ${stat.isDirectory()}`);
        if(stat.isFile()){
            //文件大小
            console.log(stat.size);
            //创建时间
            console.log(stat.birthtime);
            //修改时间
            console.log(stat.mtime);
        }
    }
});

