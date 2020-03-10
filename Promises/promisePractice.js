const fs = require("fs");
const superagent = require("superagent");

//Reading the name of breed from dog.txt file 
fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
    console.log(`breed: ${data}`);
    //Fetching the image of the dog based on the breed that read from before function and saving that image link in another file
    superagent
        .get(`https://dog.ceo/api/breed/${data}/images/random`)
        .end((err, res) => {
            if (err) {
                return console.log('error check the name')
            } else {
                console.log(res.body);
                fs.writeFile('dog-img.txt', res.body.message, err => {
                    console.log('random dog pic')

                })
            }
        });

});