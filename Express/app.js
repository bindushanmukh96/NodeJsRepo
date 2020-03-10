const express = require('express');
const app = express();

//sending the data to client
app.get('/', (req, res) => {
        res.status(200).send('hey from sever')

    })
    //getting the data from client
app.post('/', (req, res) => {
    res.send('post here')
})

//Listening to Server
const port = 3000
app.listen(port, () => {
    console.log('listening from 3000')
})