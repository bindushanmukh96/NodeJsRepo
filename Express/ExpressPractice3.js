const express = require('express');
const app = express();
const file = require('fs')
app.use(express.json())

//Readig the data from file

const tours = JSON.parse(file.readFileSync('./../Text/tours-simple.json'));
//  using req.params
app.get('/data/:id', (req, res) => {
        console.log(req.params)

        if (req.params.id * 1 > tours.length) {
            return res.status(404).json({
                status: "fail",
                message: "Invalid id"
            })
        }

        //comparing the id so that we can fetch the data with matched id

        const tourData = tours.find(ele => ele.id === req.params.id * 1)

        res.status(200).json({
            status: 'success',
            data: {
                tourData
            }
        })
    })
    //Using optional req.params
app.get('/data/:id/:x/:y/:z?', (req, res) => {
    console.log(req.params)
    res.status(200).send(tours)
})

//listening to port
const port = 3000;
app.listen(port, () => {
    console.log('listening')
})