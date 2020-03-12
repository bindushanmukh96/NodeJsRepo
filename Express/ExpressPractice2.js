const express = require('express');
const app = express();
const file = require('fs')
app.use(express.json())

//Readig the data from file

const tours = JSON.parse(file.readFileSync('./../Text/tours-simple.json'));

console.log(tours)

// Sending the json data to client
app.get('/data', (req, res) => {
    res.status(200).send(tours)
})

// Getting the data from client using POST and saving to our Json file

app.post('/data', (req, res) => {
        console.log(req.body);
        const newid = (tours.length - 1) + 1;
        console.log(newid);

        // Object.assign() allows us to merge to two objects

        const newData = Object.assign({ id: newid }, req.body);
        console.log(newData)

        tours.push(newData);

        console.log(tours)

        file.writeFile('./../Text/tours-simple.json', JSON.stringify(tours), err => {
            res.status(201).json({
                status: 'success',
                data: {
                    data: newData
                }
            })
        })


    })
    //listening to port
const port = 3000;
app.listen(port, () => {
    console.log('listening')
})