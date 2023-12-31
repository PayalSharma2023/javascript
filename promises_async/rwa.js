// const fs = require('fs').promises
// const path = require("path")
// async function readNamesFromFiles(nameFiles){
//     let names = [];

//     for (file of nameFiles) {
//         const data = JSON.parse(await fs.readFile(file));
//         names.push(data.name)
//     }

//     return names;
// }
// async function getNameFiles(folderName){
//     let nameFiles = []

//     const items = await fs.readdir(folderName, {withFileTypes: true})

//     for (item of items) {
//         if (!item.isDirectory()){
//             if (path.extname(item.name)=== ".json"){
//                 nameFiles.push(path.join(folderName, item.name))
//             }
//         }
//     }
//     return nameFiles
// }

// async function main(){
//     const nameFolder = path.join(_dirname, "names")

//     const nameFiles = await getNameFiles(nameFolder)
//     const names = await readNamesFromFiles(nameFiles)

//     await fs.writeFile(
//         path.join(__dirname, "names.txt"),
//         names.join(','),
//         {flag: "a"}
//     )
// }

// main()

//synchronous method
// var fs = require("fs");
// const readMe = fs.readFileSync("name.txt","utf-8");
// console.log(readMe);
// fs.writeFileSync("temp.txt", readMe);

//asynchronous method
const fs = require("fs");
fs.readFile("write.txt","utf-8", (err, data)=>{
    if(!err)
        fs.writeFile('read.txt', data, (err)=>{
            if(err){
                throw err;
            }
        });
    else
        throw err; 
    });