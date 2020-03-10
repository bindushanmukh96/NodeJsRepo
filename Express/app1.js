const express = require('express')

const app = express();

app.use(express.json())
    //JSON Array
const courses = [
        { "id": 1, "subject": "node" },
        { "id": 2, "subject": "java" },
        { "id": 3, "subject": "mysql" }
    ]
    //sending the data to client
app.get('/', (req, res) => {
        res.status(200).send('welcome to my courses')

    })
    //sending the data to client
app.get('/courses', (req, res) => {
        res.status(200).send(courses)
    })
    //getting the data from client and adding that data to the JSON Array
app.post('/courses', (req, res) => {
        console.log(req.body);
        courses.push(req.body)
        console.log(courses)
        res.send('done')
    })
    //Listening to Server
app.listen(3000, () => {
    console.log(`listening to 3000`)
})