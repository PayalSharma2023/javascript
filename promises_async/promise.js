//A promise is an object that may produce a single value some time in future: either a resolved value or a reason it's not resolved
//either fulfilled , rejected , or pending
//promises are eager
//promise is an object which can be returned synchronously from an asynchronous function
//calling resolve() or reject() again will have no effect .it is immutable
const wait = function (time){
    new Promise((resolve)=>{
        setTimeout(resolve, time)
    })
}
wait(3000).then(()=> console.log("Hello!"));
