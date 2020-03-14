const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: '' }));

//Middleware function
app.use((req, res, next) => {

    req.reqTime = new Date().toDateString();
    console.log(req.reqTime)
    next();
})

// Get method

app.get('/', (req, res) => {
    res.sendFile('login.html', { root: './' });
});

app.post('/submit-student-data', (req, res) => {

    var name = req.body.firstName + ' ' + req.body.lastName;

    res.send(name + ' submitted successfully!!!! at ' + req.reqTime);
});

var server = app.listen(3000, () => {
    console.log('Node server is running..');
});