// function setTimeoutPromisified(ms){
//     let p= new Promise(resolve => setTimeout(resolve,ms));
//     return p;
// }

// function callback(){
//     console.log("Callback executed");
// }

// setTimeoutPromisified(3000).then(callback)


const fs = require('fs');

//my own asynchronous function 
function kiratReadFile(){
    return new Promise(function(resolve){
        fs.readFile('a.txt', 'utf8', function(err, data){
        resolve(data);
    });
})
}

function onDone(data){
    console.log(data);
}

kiratReadFile().then(onDone)
