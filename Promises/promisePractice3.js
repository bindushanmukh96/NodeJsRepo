const messages = [
    { title: 'message1', body: 'this is first message' },
    { title: 'message2', body: 'this is second message' }
];

function getMessages() {
    setTimeout(() => {
        let output = '';
        messages.forEach((message, index) => {
            console.log(message.title);
        });
    }, 1000);
}

function createMessage(message) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            messages.push(message);
            const err = false;
            if (!err) {
                resolve();
            } else {
                reject('error')
            }
        }, 2000)

    })
}
createMessage({ title: 'message3', body: 'this is third message' }).then(getMessages).catch(err => console.log(err));


//Promise.all

const promise1 = Promise.resolve('hey');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'byebye');
})

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values)
})