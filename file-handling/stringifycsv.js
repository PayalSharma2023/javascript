const fs = require("fs").promises;
const {stringify} = require('csv-stringify')

someData = [{
    1: "kiyara",
    2: "riya"
}];
stringify(someData, {
    header : true,
}, function(err, output){
    fs.writeFile(__dirname+ '/someData.csv', output);
})
