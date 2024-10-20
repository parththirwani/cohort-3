//////1
function sum(a,b){
    return a+b;
}
let answer= sum (2,3)
console.log(answer);


/////2
function sum(n){
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
        }
        return sum;
}

let ans = sum(100)
console.log(ans);

////3
const fs = require("fs");

const contents = fs.readFileSync("a.txt", 'utf-8');
console.log(contents);