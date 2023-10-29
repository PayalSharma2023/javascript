var fs = require("fs");//This line does the job of importing the fs package and allowing us to utilize it within our own code.require() call loads specified Node FS module into cache and assign that to an object named as fs.
//read files, create files , update files , delete files ,rename files

fs.readFile("temp.txt", function(err, buf){
    console.log(buf.toString());
});//This calls the readFile function asynchronously and then prints the contents of the file to the console.
fs.readFile("not-found.txt", "utf-8", (err, data)=>{
    // if(err){
    //     console.log(err)
    // }
    console.log(data);
});//If you want to catch errors such as the file you are trying to reach isn’t found, then you can do so like this:
var createStream = fs.createWriteStream("journalDEV.txt");//used to create a Write Stream and file with given filename.
createStream.end();//ends or closes the opened stream
var writeStream = fs.createWriteStream("journalDEV.txt");
writeStream.write("hi , JournalDEV users.");
writeStream.write("thank you. ");
writeStream.end();
function readData(err, data){
    console.log(data);
}//readData() is a JavaScript function which takes two parameters;
//err: it’s an error object. When our program fails to open or read data from a file, then FS module writes some error message into this parameter.
//data: it’s a variable to hold some data.
fs.readFile('./journalDEV.txt', 'utf-8', readData);
//fs.readFile() is Node JS FS API. It takes three parameters;
//file name, file data format to read, A JavaScript function or JavaScript anonymous functionreadFile() reads data from a filename (first parameter) in given format (second parameter) and uses function given at third parameter to do some operation. Here we are using a plain JavaScript function as the third Parameter. We will see how to use JavaScript anonymous function in next example. In our example, readFile() reads data from “JournalDEV.txt” file and writes to console. If we don’t use ‘utf8’ format, then we will get binary data. We will verify this in few moment
fs.readFile("journalDEV.txt", (err, data)=>{
    console.log(data);
});