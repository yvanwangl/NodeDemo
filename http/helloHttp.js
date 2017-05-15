let http = require('http');

//创建httpServer
let server = http.createServer((req, res)=>{
    console.log(`${req.method}: ${req.url}`);

    res.writeHead(200, {'Content-Type':'text/html'});

    res.end('<h1>Hello world!</h1>');
});

//让服务器监听8080端口
server.listen(8080);

console.log('Server is running at http:localhost:8080');