const PI = 3.1415;
let radius;
let volume;

document.getElementById('submitSphere').onclick = function(){
    radius = document.getElementById('inputSphere').value;
    radius = Number(radius);
    volume = 4 / 3 * PI * radius ** 3;
    document.getElementById('H3Sphere').textContent = volume + ` cm`;
}



const countLabel = document.getElementById('countLabel');
const countDecrease = document.getElementById('countDecrease');
const countReset = document.getElementById('countReset');
const countIncrease = document.getElementById('countIncrease');
let count = 0;

countDecrease.onclick = function(){
    count--;
    countLabel.textContent = count;
}
countReset.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
countIncrease.onclick = function(){
    count++;
    countLabel.textContent = count;
}



const randomNumButton = document.getElementById('randomNumButton');
const rollNum1 = document.getElementById('rollNum1');
const rollNum2 = document.getElementById('rollNum2');
const rollNum3 = document.getElementById('rollNum3');
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

randomNumButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    rollNum1.textContent = randomNum1;
    randomNum2 = Math.floor(Math.random() * max) + min;
    rollNum2.textContent = randomNum2;
    randomNum3 = Math.floor(Math.random() * max) + min;
    rollNum3.textContent = randomNum3;
}



const ageInput = document.getElementById('ageInput');
const ageSubmit = document.getElementById('ageSubmit');
const ageResult = document.getElementById('ageResult');
let age;

ageSubmit.onclick = function(){

    age = ageInput.value;

    if(age == 0){
        ageResult.textContent = `You were just or recently born!`;
    }
    else if(age >= 100){
        ageResult.textContent = `You are a walking sand!`;
    }
    else if(age >= 12 && age <= 19){
        ageResult.textContent = `You are a teenager!`;
    }
    else if(age < 0){
        ageResult.textContent = `You will be born one day!`;
    }
    else{
        ageResult.textContent = `You're boring`;
    }
}