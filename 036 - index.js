function hello(){
   console.log(`Hello!`);
}
hello();


const hello1 = function(){
   console.log(`Hello!`);
}
hello1();


const hello2 = (name, age) => console.log(`Hello ${name}, you are ${age} years old!`)
hello2(`Egormity`, 17);



setTimeout( () => console.log(`Hello!`), 1000);



const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(total);