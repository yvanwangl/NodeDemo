let url = require('url');
let path = require('path');

//解析当前目录：
let workDir = path.resolve('.');
let filePath = path.join(workDir, 'http', 'index.html');

console.log(filePath);

console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string&name=c#hash'));

