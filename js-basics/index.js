// This is my first java programm
let name = "aaru";// string literal
console.log(name);
// cannot be a reserved keyword
// should be meaningful
// cannot start with a number (1name)
// cannot contain space or hyphen(-)
// are case sensitive
let interest = 0.5;
interest = 1;
console.log(interest);
// if you want to reassign use let but if not use const which will be a default choice
// primitive value type  DYNAMIC LANGUAGE
let age = 44;// number literal
let isApproved = true ; // boolean literal
let firstName = undefined;
let lastName =  null;// clear the value of a variable 
// REFERNCE TYPE : OBJECT, ARRAY, FUNCTION
let person1 =  {
    name: "Pinnki",  //object
    age : 22
};
// dot notation
person1.name = 'john'
// bracket notation
let selection = 'name';
person1[selection]= 'ayuu';
person1['name'] ='mary';
console.log(person1.name);
//array
let selectedColors = ['red', ' blue'];
selectedColors[2]= 1;
console.log(selectedColors.length); // array is an object in javascript

//function 
//performing a task
function greet(name , lastName) { //name is parameter
    console.log('hello '+name +' '+ lastName);

}
greet('john', ' Smith');//john is argument 
// calculating a value 
function square(number) {
    return number * number;
}
let number = square(2)
console.log(number);
console.log(square(4));// we have two function call here


import {Teacher} from "./teacher.js";//named and default export
const teacher = new Teacher("sia", "MBA")
teacher.teach();

//factory function

// const circle = {
//     radius :1,
//     location:{
//         x:1,
//         y:1
//     },
//     isVisible: true,
//     draw: function(){
//         console.log('draw');
//     } 
// };
// return circle


function createCircle(radius){
    return{
        radius,
        isVisible: true,
        draw(){
            console.log('draw');
        } 
    };
}
const circle1 = createCircle(2);
console.log(circle1)

//constructor function 
function Circle(radius){
    this.radius= radius,
    this.draw = function(){
        console.log('draw');
    } 
};

const circle = new Circle(2);
console.log(circle)

// var keyword --> function scope
// let keyword --> block scope
// const keyword --> block scope but cannot be changed
function sayHello(){
    for(var i=0; i<5; i++){
        console.log(i);
    }
    console.log(i);
}
sayHello();

// objects: collection of key-value pair
const person11 = {
    name : "Moorti",
    walk : function(){
        console.log(this)
    }, //in oop terms function inside an object referred to as an method 
    talk() {}
};
person11.talk
// person11.name="";
// person11["name"]="john"
// const target = "name";
// person11[target.value] = "john"
console.log(person11)
 // this keyword ; value is determined by how a function is called , if we call a function as a method this will always return a reference to that obj
 //however if we call a function as a stand alone or outside of the object this will always return a global object /window obj in browser an if strict mode is enabled it returns undefined
 const walk = person11.walk.bind(person11);
 console.log(walk);
walk();


//binding this (in js functions are objects person11.walk is actually an object)for a given function,bind  creates a bound function that has the same body as the original function. The this object of the bound function is associated with the specified object, and has the specified initial parameters.

// @param thisArg — An object to which the this keyword can refer inside the new function.

// @param argArray — A list of arguments to be passed to the new function.

// var cube= function(num1){
//     return num1*num1*num1
// }
let cube = num1 => num1*num1*num1; //arrow function
console.log(cube(3))
// const math = (const add: (a:any,b:any) => a+b;
// let sub = (a,b)=> a-b) => {console.log(add), console.log(sun)};
// const add=(a,b)=>{
//     return a+b;
// }
// console.log(add(5,3));

const math = (a,b, ch)=>{
    switch(ch){
        case '+':
            return a+b;
        case '-':
            return a-b;
        default:
            return "No such symbol"
    }
}
console.log(math(5,3,'+'))


const jobs = [
    {id :1 , isActive: true},
    {id :2 , isActive: true},
    {id :3 , isActive: false}
];
//const activeJobs =  jobs.filter(function(job) {return job.isActive;});
const activeJobs=  jobs.filter(job => job.isActive);

// const person111 = {
//     tal(){
//         var self = this,
//         setTimeout(function(){
//             console.log("self", self)
//         },1000)
//     }
// };
// person111.tal();  //arrow functions don't rebind this keyword?

const color = ["red", "green","blue"];
const items = color.map(color => `'<li>' ${color} '</li>'`)
console.log(items)

const address = {
    street : '',
    city :'',
    country: ''
};
const {city , street:st} = address;//object destructing

const first = [1,2,3]
const second = [1,9,3]
// const combo = first.concat(second)
const combo = [...first, 'a', ...second] //spread operator
//clone
const clone = [...first]
console.log(clone);

// can be applied to objects also
const first1 ={name : "mos"};
const second1 = {age :"54"};
const clon = {...first1}
console.log(clon)
