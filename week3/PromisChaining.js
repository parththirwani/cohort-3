function setTimeoutPromisified(duration){
    return new Promise(resolve => setTimeout(resolve, duration));
}

// Promise Chaining

setTimeoutPromisified(1000).then(function(){
    console.log("Timeout of 1 second has expired");
    return setTimeoutPromisified(3000)
}).then(function(){
    console.log("Timeout of 3 seconds has expired");
    return setTimeoutPromisified(5000)
}).then(function(){
    console.log("Timeout of 5 seconds have passed")
});

console.log("outside the callback hell")