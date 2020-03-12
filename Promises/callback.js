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
//callback function
function createMessage(message, callback) {
    setTimeout(() => {
        messages.push(message),
            callback();


    }, 2000)
}
createMessage({ title: 'message3', body: 'this is third message' }, getMessages);