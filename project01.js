function add(a,b) {
    return a + b; 
}
console.log(add(a,b));

function subtract(a,b) {
    return a - b; 
}
console.log(subtract(a,b));

function multiply(a,b) {
    return a * b; 
}
console.log(multiply(a,b));

function divide(a,b) {
    return a / b; 
}       
console.log(divide(a,b));

showHistory()
{operations = ["add", "subtract", "multiply", "divide"];
for (let i = 0; i < operations.length; i++) {
    console.log(operations[i]);
}