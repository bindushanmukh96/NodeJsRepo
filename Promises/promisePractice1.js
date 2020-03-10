const fs = require('fs');
const superagent = require('superagent');


//creating the promise to raed the data from file

const readfilepro = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) reject('file not found error');
            resolve(data);
        });

    });
};
//creating a promise to write the image in to text file 
const writefilepro = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, err => {
            if (err) reject('could not write in to file ');
            resolve('data written')
        })
    })
}

//calling the promises to fetch the breed of dog and storing that link into file
readfilepro(`${__dirname}/dog.txt`).then(data => {
    console.log(`Breed: ${data}`);
    superagent.get(`https://dog.ceo/api/breed/${data}/images/random`).then(res => {
        console.log(res.body.message);
        fs.writeFile('dog-img.txt', res.body.message, err => {
            if (err) return console.log(err.message);
            console.log('dog is loaded   ')

        })

    }).catch(err => {
        console.log(err.message)
    })


})