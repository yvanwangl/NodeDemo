'use strict';
let fs = require('fs');

let ws1 = fs.createWriteStream('output1.text','utf-8');

ws1.write('正在使用stream 写入文件内容...\n');
ws1.write('END.');

ws1.end();

let ws2 = fs.createWriteStream('output2.txt');
ws2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
ws2.write(new Buffer('END.', 'utf-8'));

ws2.end();