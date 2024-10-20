let age = 1;
let message = age >= 18 ? "You are an adult." : "You are a minor.";
console.log(message);

let time = 16;
let greeting = time < 12 ? "Good morning!" : "Good aftenoon!";
console.log(greeting);

let isStudent = true;
let student = isStudent ? "You are a student." : "You not a student."
console.log(student);

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is ` + (purchaseAmount - purchaseAmount * discount / 100))