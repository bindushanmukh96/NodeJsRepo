const file = require('fs');

const message = 'hi this is message'
const message2 = file.readFileSync('./../Text/file1.txt', 'utf-8');

function getmessage() {
    setTimeout((err, data) => {
        if (err) {
            console.log('there is an error')
        } else {
            console.log('hello')

            console.log("message is " + message2)
        }
    }, 1000)
}

const str = getmessage();