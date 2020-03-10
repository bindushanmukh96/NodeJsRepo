//Basic example of how eventloop executes

[1, 2, 3, 4].forEach(function(i) {
    console.log("processing syc" + i);
});

function asyncForEach(array, cb) {
    array.forEach(function(i) {
        setTimeout(cb, 0000);

    })
}
asyncForEach(function(i) {

    console.log('processing async');


})