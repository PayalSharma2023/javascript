//TIC TAC TOE GAME
function player(name, marker){
    this.name = name;
    this.mareker = marker;
    this.sayName = ()=>{
        console.log(name)
    }

}
const player1 = new player('John', 'o');
const player2 = new player('Smith', 'x')
console.log(player1,player2)
player1.sayName();
player2.sayName();

//if you want to add new function or feature in an already existing function u can use prototype. you can attach other properties or functions you want to use on all Player objects by defining them on the objects’ prototype (Player.prototype).
//Prototypal Inheritance
Object.getPrototypeOf(player1) === player.prototype;
player.prototype.sayhello = function(){
    console.log("hello I'm player", this.name);
}
player1.sayhello();

// Player.prototype.__proto__
Object.getPrototypeOf(player.prototype) === Object.prototype // true

// Output may slightly differ based on the browser
console.log(player1.valueOf()) // Output: Object { name: "steve", marker: "X", sayName: sayName() }
//this .valueOf function, comes as a result of Object.getPrototypeOf(Player.prototype) having the value of Object.prototype! This means that Player.prototype is inheriting from Object.prototype. This .valueOf function is defined on Object.prototype just like .sayHello is defined on Player.prototype
//Every prototype object inherits from Object.prototype by default.
// An object’s Object.getPrototypeOf() value can only be one unique prototype object.


//BOOK INFO
function book(title, authorName, pages , is_read){
    this.title = title;
    this.authorName = authorName;
    this.pages = pages;
    this.read = () =>[
        console.log(is_read)
    ]
    this.info = () => {
        console.log(`${title}, written by ${authorName}, has ${pages} pages, ${is_read}`)
    };
};
const book1 = new book('jumanji','kk',89,'not read yet');
book1.info()
book.prototype.bookofplayers = ()=>{
    console.log(`i love to read books `)
}
// It is almost always best to return things rather than putting console.log() directly into the function. In this case, return the info string and log it after the function has been called:
Object.setPrototypeOf(player.prototype, book.prototype);
player.info();