let amount = 3000
let taxRate = 0.1
let taxAmount = amount * taxRate

console.log("taxAmount:", taxAmount)

let text = "Hello, World!"
 function convertToUpperCase(str) {
    return str.toUpperCase()
 }
console.log("Uppercase text:", convertToUpperCase(text))

let num1 = 78
let num2 = 96
function findMax(num1, num2) {
    return Math.max(num1, num2);
}
console.log("Maximum number:", findMax(num1, num2));

let text1 = "are"
function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
console.log("Is palindrome:", isPalindrome(text1));


let originalPrice = 700
let discountPercentage = 0.15
function calculateDiscount(originalPrice, discountPercentage) {
    return originalPrice * discountPercentage;
}
console.log("Discount amount:", calculateDiscount(originalPrice, discountPercentage));