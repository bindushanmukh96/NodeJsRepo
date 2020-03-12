const express = require('express');
const app = express();
const file = require('fs')
app.use(express.json())

//Readig the data from file

const tours = JSON.parse(file.readFileSync('./../Text/tours-simple.json'));

app.patch('/data/:id', (req, res) => {
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: "fail",
            message: "invalid id"
        })

    }
    app.delete('/data/:id', (req, res) => {
        if (req.params.id * 1 > tours.length) {
            return res.status(404).json({
                status: "fail",
                message: "invalid id"
            })
        }
        res.status(204).json({
            status: "success",
            data: null
        })
    })
    res.status(200).json({
        status: "success",
        data: {
            tour: "updated info ...."
        }
    })
})



//listening to port
const port = 3000;
app.listen(port, () => {
    console.log('listening')
})