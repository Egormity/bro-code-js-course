let fruits = ["apple", "orage", "banana"];

console.log(fruits);
console.log(fruits[0]);

fruits[1] = "coconut";
console.log(fruits);

fruits.push("tomato");
console.log(fruits);

fruits.pop()
console.log(fruits);

fruits.unshift("mango");
console.log(fruits);

fruits.shift;
console.log(fruits);

let numOfFruits = fruits.length;
console.log(numOfFruits);

let index = fruits.indexOf("apple");
console.log(index);

fruits.sort();

for(let fruit of fruits){
    console.log(fruit);
}