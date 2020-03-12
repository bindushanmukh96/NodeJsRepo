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
//Promise to create meassage
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
//Async Await 
async function init() {
    await createMessage({ title: 'message 3', body: 'this is third message' });
    getMessages();
}
init();