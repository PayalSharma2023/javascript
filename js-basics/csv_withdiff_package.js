const fs = require("fs");
const csvParser = require("csv-parser");
const needle = require("needle")
const Papa =require("papaparse")
const fastCsv = require("fast-csv")

const options = {
    objectMode: true,
    delimiter: ";",
    quote: null,
    headers: true,
    renameHeaders: false,
}; 

const data= [];
const readableStream = fs.createReadStream("example.csv")
fastCsv
      .parseStream(readableStream, options)
      .on("error", (error)=>{
        console.log(error);
      })
      .on("data", (row) =>{
        data.push(row);
      })
      .on("end", (rowCount) =>{
        console.log(rowCount);
        console.log(data);
      });



fs.createReadStream("data.csv")
    .pipe(fastCsv.parse(options))
    .on("error",(error)=>{
        console.log(error)
    })
    .on("data",(row)=>{
        data.push(row)
    })
    .on("end", (rowCount)=>{
        console.log(rowCount);
        console.log(data);
    });

const result = [];
//const options = {header: true};
fs.createReadStream("example.csv")
    .pipe(Papa.parse(Papa.NODE_STREAM_INPUT, options))
    .on("data", (data)=>{
        result.push(data);
    })
    .on("end",()=>{
        console.log(result);
    })


// needle()
//     .get(url)
//     .pipe(csvParser())
//     .on("data", (data) =>{
//         result.push(data);
//     })
//     .on("done",(err)=>{
//         if (err) console.log("an error has occured");
//         else console.log(result);
//     });

fs.createReadStream("example.csv")
    .pipe(csvParser())
    .on("data", (data)=>{
        result.push(data);
    })
    .on("end", (end)=>{
        console.log(result)
    });