let fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

//从命令行参数中获取 root 根目录， 默认是当前目录
let root = path.resolve(process.argv[2] || '.');

console.log('Static root dir:'+ root);
//创建服务器
let server = http.createServer((req, res)=>{
    // 获得URL的path，类似 '/css/bootstrap.css':
    let pathname = url.parse(req.url).pathname;

    // 获得对应的本地文件路径，类似 '/srv/www/css/bootstrap.css':
    let filepath = path.join(root, pathname);

    //获取文件状态
    fs.stat(filepath, (err, stat)=>{
        if(err){
            console.log(`404 ${err}`);
            res.writeHead(500);
            res.end('Error !!');
        }else {
            if(stat.isFile()){
                // 没有出错并且文件存在:
                console.log(`200 ${req.url}`);
                // 发送200响应:
                res.writeHead(200);
                // 将文件流导向response:
                fs.createReadStream(filepath).pipe(res);
            }else if(stat.isDirectory()){

            }else {
                console.log(`404 ${req.url}`);
                res.writeHead(404);
                res.end('404 not found');
            }
        }
    });
});

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');

