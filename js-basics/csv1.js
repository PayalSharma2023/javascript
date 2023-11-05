//npm install csv-parse (in termnal)
const fs = require("fs");
const {parse} = require("csv-parse");
let data = [];
fs.createReadStream("./example.csv")
    .pipe(
        parse({
            delimeter:",",
            columns: true,//with column output will be in [], but with colums it will be in {}
            ltrim: true     
        })
    )
    .on("data", function(row){
        data.push(row)
    })
    .on("error", function(error){
        console.log(error.message)
    })
    .on("end", function(end){
        console.log("parsed csv data")
        console.log(data)
    })

//To read a CSV file from the browser, you need to use a different library named D3.js.
// D3.js is a data manipulation library used to process data using JavaScript. One of its features is to read CSV files.
// To use D3.js, you can download the latest release or import the script from a CDN.
// Call the csvParse() method and pass a string as shown below: