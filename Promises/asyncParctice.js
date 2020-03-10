//Program of promises using async await

const fs = require('fs');
const superagent = require('superagent');

const readfilepro = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) reject('file not found error');
            resolve(data);
        });

    });
};
const writefilepro = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, err => {
            if (err) reject('could not write in to file ');
            resolve('data written')
        })
    })
}

//Async await Functions
const getpic = async() => {
    try {
        const data = await readfilepro(`${__dirname}/dog.txt`);
        console.log(`Breed: ${data}`);

        const res = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        console.log(res.body.message);
        await writefilepro('dog-img.txt', res.body.message);
        console.log('data written')



    } catch (err) {
        console.log(err)
    }
    return 'hey from aynsc getpic'
};
setImmediate(() => {
    console.log('hey from dog api')
})
getpic().then(x => {
    console.log(` this is   ${x}`)
});