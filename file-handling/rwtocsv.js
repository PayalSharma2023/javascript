const fs = require("fs").promises;
//var {parse} = require("csv-parse")
var {parse} = require('csv-parse/lib/sync')
(async function () {
    const fileContent = await fs.readFile(__dirname+'./output.csv')
    const records = parse(fileContent, {columns: true});
    console.log(records);
})();

// const parser = parse({
//     columns: true,
// }, function(err, records){
//     if (err) console.log(err);
//     console.log(records);
// });

// fs.createReadStream( "./output.csv").pipe(parser);