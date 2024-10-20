for(let i = 1; i <= 10; i++){
    if(i === 7){
        continue;
    }
    else if(i == 9){
        console.log("Happy New Year!")
    }
    else{
        console.log(i);
    }
}




/*
const minNum = 1;
const maxNum = 10;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let attempts = 0
let guess;
let running = true;

while(running){
    
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert(`Please enter a valid number`);
    }
    else if(guess < minNum || guess > maxNum){
        window.alert(`Please enter a valid number`);
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert(`Too low, try again`);
        }
        else if(guess > answer){
            window.alert(`Too high, try again`);
        }
        else{
            window.alert(`Correct! The answer was ${answer}. It took you ${attempts} attempt(s)`);
            running = false;
        }
    }
}
*/




function isValidEmail(email){
    return email.includes("@") ? true : false;
}

console.log(isValidEmail("egormityproductin@fuck.com"));
console.log(isValidEmail("egormityproductin.com"));




let x = 1;
console.log(x);

function test(){
    let x = 2;
    console.log(x);
}

test();





const textBox = document.getElementById("textBox");
const toFahreheit = document.getElementById("toFahreheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert(){
    if(toFahreheit.checked){
        temp = Number(textBox.value)
        temp = temp * 9 / 5 + 32;
        result.textContent = `${temp.toFixed(1)}F°`
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value)
        temp = (temp - 32) * (5/9)
        result.textContent = `${temp.toFixed(1)}C°`
    }
    else{
        result.textContent = `Select a unit`
    }
}





let fruits = ["apple", "banana", "orange"]

fruits.push("coconut", "watermelon")

for(let fruit of fruits){
    console.log(fruit);
}