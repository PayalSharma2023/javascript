// the new function
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}

//const car1 = new Car('VW', 'GTI', 2017);
//console.log(car1.make);//VW
//Immediately Invoked Function Expression(IIFE)
(function hello(){
    console.log('hello world'); //hello world  
})();

//arrow functions
let greet = () => {
    return "hello world";
}
//let message = greet();
//console.log(message); //hello world
// let greet = name => 'hello' + name;
//this keyword
let message = {
    name : 'john',
    regularFunction(name) {
        console.log('hello'+ this.name)
    },

    arrowFunction: () => console.log('hi'+ this.name)
}

message.regularFunction(); // Hello John
message.arrowFunction(); // hi

// the call method
let car1 = { brand: 'Vw', color: 'blue' }
let car2 = { brand: 'Toyota', color: 'white' }

let returnCarBrand = function () {
    console.log('Car brand is ' + this.brand)
}

returnCarBrand.call(car1); // Car brand is Vw
returnCarBrand.call(car2); // Car brand is Toyota
// the apply method 
function bookTitle(name, author) {
    console.log(name + 'is written by ' + author);
    console.log(this);
}
bookTitle.apply(['HTML & CSS: Design and Build Web Sites', 'Jon Duckett']);
//the bind method
let book = {
    author: 'mary', 
    getAuthor: function () {
        return this.author;
    }
}
let book2 = {author : 'john'};
let getAuthorcopy = book.getAuthor.bind(book2);
console.log(getAuthorcopy());//john

// default parameters
function sayHi(message, name = 'John') {
    console.log(message + name)
}
//rest parameter
let sayHi = function greet(...names) {
    names.forEach(name => console.log('Hi ' + name))
}
greet('Welcome', 'John', 'Mary', 'James') // Hi John // Hi Mary // Hi James
//spread operator
function greet(user1, user2) {
    console.log('Hello' + user1 +' and ' + user2)
}
let names = ['John','Mary']
greet(names); //Hello John and Mary