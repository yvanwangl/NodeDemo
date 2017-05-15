let fs = require('fs');

let rs = fs.createReadStream('sample.txt');
let ws = fs.createWriteStream('output3.txt');

rs.pipe(ws);