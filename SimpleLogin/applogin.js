//Simple Login Page Using express
const express = require('express');
const app = express();
//middleware used to for parsing the req.body
app.use(express.urlencoded({ extended: false }))

//Through get we are showing the login.html
app.get('/', (req, res) => {
    res.sendFile('login.html', { root: './' });
});

//Post method to show the data entered in first name and last name 
app.post('/submit-student-data', (req, res) => {
    var name = req.body.firstName + ' ' + req.body.lastName;

    res.send(name + ' Submitted Successfully!');
});

var server = app.listen(3000, () => {
    console.log('Node server is running..');
});