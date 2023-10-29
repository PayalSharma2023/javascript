//object literal syntax
const myObject = {
    property : 'value!',
    otherProperty: 77,
    "obnoxious property": function(){
        //do stuff!
    }
}//There are also 2 ways to get information out of an object:
// dot notation
myObject.property // 'Value!'

// bracket notation
myObject["obnoxious property"] // [Function]
//Dot notation is cleaner and is usually preferred, but there are plenty of circumstances when it is not possible to use it. For example, myObject."obnoxious property" won’t work because that property is a string with a space in it. Likewise, you cannot use variables in dot notation:

const variable = 'property'
myObject.variable // this gives us 'undefined' because it's looking for a property named 'variable' in our object

myObject[variable] // this is equivalent to myObject['property'] and returns 'Value!'

//THE PROTOTYPE: the prototype is another object that the original object inherits from, which is to say, the original object has access to all of its prototype’s methods and properties.
function Person(name) {
    this.name = name
  }
  
  Person.prototype.sayName = function() {
    console.log(`Hello, I'm ${this.name}!`)
  }
  
  function Player(name, marker) {
    this.name = name
    this.marker = marker
  }
  
  Player.prototype.getMarker = function() {
    console.log(`My marker is '${this.marker}'`)
  }
  
  // Object.getPrototypeOf(Player.prototype) should
  // return the value of "Person.prototype" instead
  // of "Object.prototype"
  Object.getPrototypeOf(Player.prototype) // returns Object.prototype
  
  // Now make `Player` objects inherit from `Person`
  Object.setPrototypeOf(Player.prototype, Person.prototype)
  Object.getPrototypeOf(Player.prototype) // returns Person.prototype
  
  const player1 = new Player('steve', 'X')
  const player2 = new Player('also steve', 'O')
  
  player1.sayName() // Hello, I'm steve!
  player2.sayName() // Hello, I'm also steve!
  
  player1.getMarker() // My marker is 'X'
  player2.getMarker() // My marker is 'O'