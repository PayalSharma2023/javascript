//promises
// let stock = {
//     Fruits: ["strawberry", "apple","Mango"],
//     liquid: ["water","ice"],
//     holder: ["cone", "cup", "stick"],
//     toppings: ["chocolate", "peanuts"]
// };
// let is_shop_open = false;
// let order = (time, work) =>{
//     return new Promise ( (resolve, reject) =>{

//         if(is_shop_open){

//             setTimeout( ()=>{
//             resolve( work())
//             },time)
//         }
//         else{
//             reject(console.log("our shop is close"))
//         };
//     } );
// };

// order(2000, ()=>console.log(`${stock.Fruits[0]} was selected`))

// .then(()=>{
//     return order(0o0, ()=>{console.log(`production has started`)})
// })

// .then( ()=>{
//     return order(2000, ()=> console.log(`the food was chopped`))
// })

// .then(()=>{
//     return order (1000, ()=>{
//         console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was selected`)
//     } )
// })

// .then(()=>{
//     return order (1000, ()=>{
//         console.log(`start the machine`)
//     })
// })

// .then(()=>{
//     return order (2000,()=>{
//         console.log(`ice cream placed on ${stock.holder[0]}`)
//     })
// })

// .then(()=>{
//     return order (3000, ()=>{
//         console.log(`${stock.toppings[0]} was selected`)
//     })
// })

// .then(()=>{
//     return order (2000, ()=>console.log(`ice cream was served`))
// })

// .catch(()=>{
//     console.log("customer left");
// })

// .finally(()=>{
//     console.log("day ended, shop is closed")
// })



let stock = {
    Fruits: ["strawberry", "apple","Mango"],
    liquid: ["water","ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
};
let is_shop_open = true;
// let order = () =>{
//     return new Promise((resolve ,reject ) =>{
//         if(true){
//             resolve()
//         }
//         else{
//             reject()
//         }
//     })
// }
// order()
// .then()
// .then()
// .then()
// .then()
// .catch()
// .finally()
// async function order (){
//     try{
//         await abc;
//     }catch(error){
//         console.log('abc does not exist', error)
//     }finally{
//         console.log('runs code anyways')
//     }
// }
// order()
// .then(()=>{
//     console.log('hhui')
// })

// let toppings_choice = ()=>{
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(
//                 console.log('Which topping do you like ?')   
//             )}, 3000);
//     });
// };

// async function kitchen () {
//     console.log('A')
//     console.log('A')
//     console.log('A')

//     await toppings_choice()
//     console.log('A')
//     console.log('A')
//     console.log('A')
// }

// kitchen()

// console.log("cleaning")
// console.log("cleaning")
// console.log("cleaning")
// console.log("cleaning")

function time (ms){
    return new Promise((resolve, reject)=>{
        if(is_shop_open){
            setTimeout(resolve,ms)
        }
        else{
            reject(console.log('shop is closed'))
        }
    })
}

async function kitchen(){
    try{
        await time(2000);
        console.log(`${stock.Fruits[0]} was selected`);
        await time(0o0);
        console.log('start the production');

        await time(2000);
        console.log('cut the fruit');

        await time(1000);
        console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was added`);

        await time(1000);
        console.log('start the machine');

        await time(2000);
        console.log(`ice cream placed on ${stock.holder[0]}`);

        await time(3000);
        console.log(`${stock.toppings[0]} was selected`)

        await time(2000);
        console.log('serve the ice cream')
        
    }
    catch(error){
        console.log('customer left', error)
    }
    finally{
        console.log(`day ended, shop is closed`)
    }
}
kitchen();