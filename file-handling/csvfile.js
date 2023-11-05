const fs = require("fs");
const readline = require("readline");

const stream = fs.createReadStream("./example.csv");
const reader = readline.createInterface({input: stream});// the readline interface will read each line and trigger the line event 

let data = [];

reader.on("line", row =>{
    //split a row string into array
    //then push into the data array
    data.push(row.split(","))
});
reader.on("close", ()=>{
    //reached the end of file
    console.log(data);
});//when the reading is done , readline will execute the close event function




fs.readFile("./example.csv", "utf8", function(err, data){
    console.log(data);
});