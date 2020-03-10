const http = require('http');
// const url = require('url');
const fs = require('fs');


let file = fs.readFileSync('C:/Users/himabindhu/Desktop/NodeRepo/htmlpages/login.html', 'utf-8');
let file2 = fs.readFileSync('C:/Users/himabindhu/Desktop/NodeRepo/htmlpages/welcomepage.html', 'utf-8');



let server = http.createServer((req, res) => {
    let pathname = req.url;

    if (pathname == '/' || pathname == '/login') {
        console.log('welcome to this page');

        res.writeHead(200, {
            'Content-type': "text/html",

        })
        res.write(file);
        res.end();
    } else if (pathname === '/welcome') {
        res.write(file2);
        res.end();


    } else {
        res.writeHead(404, {
            'content-type': "text/html"
        })
        res.end('<h1> PAGE NOT FOUND </h1>')
    }
});
server.listen(8000, () => {
    console.log("listening")
})