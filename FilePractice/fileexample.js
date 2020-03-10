const file = require('fs');
//Files
//Reading from the file synchronously

const str = file.readFileSync('C:/Users/himabindhu/Desktop/NodeRepo/Text/input.txt', 'utf-8');
console.log(str);
file.readFile('C:/Users/himabindhu/Desktop/NodeRepo/Text/input.txt', 'utf-8', (err, data) => {
    console.log(`str2 is ${data} `);
});

//Writing in to file synchronously

file.writeFileSync('C:/Users/himabindhu/Desktop/NodeRepo/Text/output.txt', 'hey writing in to file twice');
console.log('file written');
let x = 'this is been wrtten';
file.writeFile('C:/Users/himabindhu/Desktop/NodeRepo/Text/input.txt', x, 'utf-8', (err, x) => {
    if (err) {
        return console.log("error");
    }
    console.log("files has been written");
});