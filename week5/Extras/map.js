//Given an array , give me back a new array in which each value is multiplied by 2

const input = [1,2,3,4,5]

// const transform = (i) =>{
//     return i*2
// }
// const ans = input.map(transform)
// console.log(ans)



//more clean
const ans = input.map(function(i){
    return i*2;
})

console.log(ans)