var fs = require('fs');
var data = 'Hello, Node.js';

fs.writeFile('output.txt', data, (err)=>{
    if(err){
        console.log(err);
    }else {
        console.log('OK');
    }
});