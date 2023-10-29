//A closure is a feature in JavaScript where a function inner scope has access to the outer scope.

let greeting = (function () {
    let message = 'Hello';
    let getMessage = function () {
        return message;
    };
    return {
        getMessage: getMessage
    }
})();

console.log(greeting.message); //Hello