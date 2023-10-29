//print hello world
console.log("hello world");
//program to add two numbers
function sum(num1, num2){
    return num1 + num2
};
//program to find the square Root
function squareRoot(num1){
    return Math.sqrt(num1)
}
//calculate area of triangle
function areaOfTriangle(base, height){
    area = (base*height)/2
    return area
}//area when base and heoght is known
//area when all sides are known
function areaOfTriangleS (side1, side2, side3){
    s = (side1+ side2+ side3)/2;
    area = math.sqrt(s*(s-side1)*(s-side2)*(s-side3));
    return area
}
// swap two variables
var a = 2;
var b = 4;
[a,b]=[b,a];//using destructuring assignment
console.log(`The vlue of a after swaping: ${a}`)
console.log(`The value of b after swaping: ${b}`)
//convert kilometers to miles(1km = 0.621371)
const kilometers = 34
const factor = 0.621371
const miles = kilometers*factor
console.log(`${kilometers} kilometers is equal to ${miles} miles.`);
//to solve a quadratic equation
var root1, rooot2;
var a = 3;
var b = 23;
var c = 34;

var discriminant = b*b - 4*a*c;
if (discriminant>0){
    root1= -b+ Math.sqrt(discriminant)/(2*a)
    root2= -b- Math.sqrt(discriminant)/(2*a)
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}
else if (discriminant==0) {
    root1 = root2 = -b/(2*a)
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}
else{
    let realPart = (-b/(2*a)).toFixed(2)
    let imagPart = (Math.sqrt(-discriminant)/(2*a)).toFixed(2)
    console.log(`The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart}-${imagPart}i`);
} //the Math.sqrt() method is used to find the square root of a number. You can see that toFixed(2) is also used in the program. This rounds up the decimal number to two decimal values.
