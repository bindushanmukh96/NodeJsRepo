//program on  event loop which will show how even loop will  execute output 
const fs = require('fs');
const http = require('http');


let file = fs.readFileSync('C:/Users/himabindhu/Desktop/NodeRepo/htmlpages/login.html', 'utf-8');
let file2 = fs.readFileSync('C:/Users/himabindhu/Desktop/NodeRepo/htmlpages/welcomepage.html', 'utf-8');

//this will be executed last
setTimeout(() => {
    fs.readFile('C:/Users/himabindhu/Desktop/complete-node-bootcamp-master/1-node-farm/starter/txt/input.txt', 'utf-8', (err, data) => {
        console.log(`str2 is ${data} `);
    }), 0
});

//this will be executed second 
setImmediate(() => {
    fs.writeFileSync('C:/Users/himabindhu/Desktop/complete-node-bootcamp-master/1-node-farm/starter/txt/output.txt', '\n this is from event loop', );
    console.log('file written in to the output');
})

//First server will be created cause of process.nextTick();
process.nextTick(() => {
    console.log('started creating server');
    const server = http.createServer((req, res) => {
        let path = req.url;
        if (path === '/' || path === '/login') {
            console.log("connetced")
            res.write(file);
            res.end();
        } else {
            console.log("wrong address")
            res.write('<p>Page Not Found <p>')
            res.end();
        }
    })

    server.listen(8000, () => {
        console.log("listening")
    })
})