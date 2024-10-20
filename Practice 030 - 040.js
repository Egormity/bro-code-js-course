let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);

function double(element, index, array){
    array[index] = element * 2;
}
function square(element, index, array){
    array[index] = Math.pow(element, 2);
}

numbers.forEach(double);
console.log(numbers);
numbers.forEach(square);
console.log(numbers);





const dates = [`01-01-2021`, `02-02-2022`, `03-03-2023`];

function formatDates(element){
    const parts = element.split(`-`);
    return `${parts[0]}/${parts[1]}/${parts[2]}`;
}

const formattedDates = dates.map(formatDates);
console.log(formattedDates);
console.log(dates)




const fruits = [`apple`, `banana`, `orange`, `qiwi`, `coconut`]
console.log(fruits);

function includesA(element){
    return element.includes(`a`);
}
function includesNoA(element){
    return !element.includes(`a`);
}

const fruitsWithA = fruits.filter(includesA);
console.log(fruitsWithA);
const fruitsWithNoA = fruits.filter(includesNoA);
console.log(fruitsWithNoA);





const grades = [24, 71, 82, 27, 91, 64, 82, 23, 98, 45]

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}
function getMin(accumulator, element){
    return Math.min(accumulator, element);
}

const maximum = grades.reduce(getMax)
console.log(maximum);

const minimum = grades.reduce(getMin)
console.log(minimum);





numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);

const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});
const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
});
const total = numbers.reduce(function(accumulator, element){
    return accumulator + element;
});

console.log(squares);
console.log(evenNums);
console.log(total);





let xyz = () => console.log(`Hello!`);
xyz();
const squares1 = numbers.map((element) => Math.pow(element, 2));
console.log(squares1)





const person1 = {
    name: `One`,
    age: `18`,
    origin: `Russia`
}

const person2 = {
    name: `Two`,
    age: `17`,
    origin: `Not Russia`
}

console.log(person1.name);
console.log(person2.origin);





function House(make, color, temperature, place){
    this.make = make,
    this.color = color,
    this.temperature = temperature,
    this.place = place
};

const house1 = new House(`Bricks`, `Red`, `-20 - +100`, `USA`)
const house2 = new House(`Wood`, `Dark`, `-10 - + 50`, `Europe`)

console.log(house1.temperature);
console.log(house2.place);





class Product{
    constructor(name, price){
        this.name = name;
        this.price = Number(price);
    }
    displayProduct(){
        console.log(`The product is ${this.name} and it costs: $${this.price.toFixed(2)}`)
    }
};

const product1 = new Product(`Pants`, `15.49`);
const product2 = new Product(`Belt`, 25.99);

product1.displayProduct();
product2.displayProduct();