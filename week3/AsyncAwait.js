function kiratAsyncFunction(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Hello");
        }, 1000);
        });
            return p;
    }
async function main(){
    let result = await kiratAsyncFunction();
    console.log(result);
}

main();
