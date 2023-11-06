//promisify technique involves converting callback-based function into a promise based function
//with callback comes callbackhell(pyramid of doom) but with promises u can use then to call another function
//node.js provides utility module for easily converting callback-based functions to promises
const fs = require("fs");
const util = require("util");
//convert `fs.readFile()` into a function that returns a promise
const readFileAsync = util.promisify(fs.readFile);
fs.readFile('output.csv','utf8', (err, data)=>{
    if (err) console.log(err);
    else console.log(data);
});
//you can now use `readFile` with await!
// const buf = await( readFileasync("./package.json"))
// const obj = JSON.parse(buf.toString("utf8"));
// console.log(obj)
readFileAsync("output.csv", 'utf8')
    .then((text) => {
        console.log(text);
    })
    .catch((err)=>{
        console.log('Error',err);
    });