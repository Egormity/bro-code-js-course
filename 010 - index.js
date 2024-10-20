/* let age = 17;

if(age >= 18){
    console.log('You are old enough to enter this site');
}
else{
    console.log('You must be 18+ to enter this site');
}



let time = 13;

if(time <12){
    console.log('Good morning')
}
else{
    console.log('Good afternoon')
}



let isStudent = false;

if(isStudent){
    console.log('You are a student')
}
else{
    console.log('You are not a student')
}



let age1 = 25;
let hasLicense = true;

if(age1 >= 16){
    console.log('You are old enought to drive')
    if(hasLicense){
        console.log('You have your license!')
    }
    else{
        console.log("You don't have your license yet")
    }
}
else{
    console.log('You must be 16+ to have a license')
} */


const myText = document.getElementById('myText');
const mySubmit = document.getElementById('mySubmit')
const resultElement = document.getElementById('resultElement')
let age2;

mySubmit.onclick = function(){

    age2 = myText.value;
    age2 = Number(age2);

    if(age2 >= 100){
        resultElement.textContent = `You are too old to enter this site`;
    }
    else if(age2 == 0){
        resultElement.textContent = "You can't enter, you were just born!";
    }
    else if(age2 >= 18){
        resultElement.textContent = 'You are old enought to enter this sute';
    }
    else if(age2 < 0){
        resultElement.textContent = "Ya're lying!";
    }
    else{
        resultElement.textContent = "You must be 18+ to enter this site";
    }
}