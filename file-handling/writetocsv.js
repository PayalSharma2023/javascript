const js = require("js")
const {convertArrayToCSV} = require("convert-array-to-csv");
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
FileSystem.writeFile('output.csv', csvFromArrayOfArrays, err=>{
    if (err) console.log(err);
    console.log('csv file saved successfully')
})