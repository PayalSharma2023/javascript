//promisify is used when you want to convert a callback function into a promise based function
//with callback comes callbackhell(pyramid of doom) but with promises u can use then to call another function
//node.js provides utility module for easily converting callback-based functions to promises
const fs = require("fs");
const {promisify} = require("util");
//convert `fs.readFile()` into a function that returns a promise
const readFilesync = promisify(fs.readFile);
//you can now use `readFile` with await!
const buf = await( readFileasync("./package.json"))
const obj = JSON.parse(buf.toString("utf8"));
console.log(obj)