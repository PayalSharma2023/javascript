const fs = require("fs")
const {convertArrayToCSV } = require("convert-array-to-csv");
const converter = require("convert-array-to-csv")

const header = ['number', 'first','last','handle']
const dataArrays = [
    [1, 'Mark', 'otto','@mdo'],
    [2,'Jacob', 'thoronto', "@jaco"],
    [3, 'Larry', 'the bird', '@twitter']
];

const csvFromArrayOfArrays = convertArrayToCSV(dataArrays, {
    header,
    seperator: ','
});
//to write in an exsisting csv file 
//or creating a new csv file
fs.writeFile('output.csv', csvFromArrayOfArrays, err=>{
    if (err) console.log(err);
    console.log('csv file saved successfully')
})