const file = require('fs');
const server = require('http').createServer();

server.on("request", (request, response) => {


    //reading the data in the form of chunks

    const fr = file.createReadStream('C:/Users/himabindhu/Desktop/NodeRepo/Text/read-this.txt');
    fr.on('data', chunk => {

        response.write(chunk);
        response.end();
    })

    fr.on('error', () => {
        console.log('error handled')

    });
})
server.listen('8000', 'localhost', () => {
    console.log('listening')
})