var fs = require("fs");

var data = "New File Contents";

fs.writeFile("temp.txt", data, (err)=>{
    if(err) console.log(err);
    console.log("successfully written to file.");
});