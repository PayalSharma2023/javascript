// let stock = {
//     Fruits: ["strawberry", "apple","Mango"],
//     liquid: ["water","ice"],
//     holder: ["cone", "cup", "stick"],
//     toppings: ["chocolate", "peanuts"]
// }
// let is_shop_open = true;
// setTimeout

const {writeFile, readFile} = require("fs")//This require() call imports Node JS “fs” module into cache and creates an object of type Node FS module. Once it’s done, we can perform any IO Operation using node fs object.
const {promisify} = require("util")

const readFileasync = promisify(readFile);
const writeFileasync = promisify(writeFile);

const file_handler = async() =>{
    try{
        const content = await writeFileasync("./write.txt","hello world")
        try{
            const data = await readFileasync('./write.txt','utf-8');
            console.log('new file has been created.');
            console.log(data);
        } catch (error) {
            throw error
        }
    }catch (error){
        throw error;
    }
}
file_handler()