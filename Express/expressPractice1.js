const express = require('express');
const app = express();
const fs = require('fs');
let file2 = fs.readFileSync('./../Text/input.txt', 'utf-8');


//Sending data to client 
app.get('/', (req, res) => {
    res.send('hello world')
});

//Sending array to client 
app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
});
//sending data that fetched from file to client 
app.get('/api/course', (req, res) => {
    res.send(file2)

})


app.listen(5000, () => {
    console.log(`listening to port 5000...`)
})