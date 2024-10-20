function openFridge(...foods){
    console.log(...foods);
}
function getFood(...foods){
    return foods;
}

const food1 = `pizza`;
const food2 = `hamburger`;
const food3 = `hotdog`;
const food4 = `sushi`;
const food5 = `ramen`;

openFridge(food1, food2, food3, food4, food5);
const foods = getFood(food1, food2, food3, food4, food5);
console.log(foods);



function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}
const total = sum(1, 2, 3, 4, 5);
console.log(`Your total is $${total}`);



function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}
const total1 = getAverage(75, 100, 50, 30, 25, 65);
console.log(total1)



function combineStrings(...strings){
    return strings.join(" ");
}
const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III")
console.log(fullName);