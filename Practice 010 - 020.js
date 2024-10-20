const weekResult = document.getElementById("weekResult");
let day = window.prompt("Enter a number from 1 to 7.");

switch(day){
    case `1`:
        weekResult.textContent = "It's Monday!"
        break;
    case `2`:
        weekResult.textContent = "It's Tuesday!"
        break;
    case `3`:
        weekResult.textContent = "It's Wednesday!"
        break;
    case `4`:
        weekResult.textContent = "It's Thursday!"
        break;
    case `5`:
        weekResult.textContent = "It's Friday!"
        break;
    case `6`:
        weekResult.textContent = "It's Saturday!"
        break;
    case `7`:
        weekResult.textContent = "It's Sunday!"
        break;
    default:
        weekResult.textContent = "You must've entered a number from 1 to 7!"
}





let fullName = window.prompt("Enter your First and Second name.")

let firstName = fullName.slice(0, fullName.indexOf(" "));
let secondName = fullName.slice(fullName.indexOf(" ") + 1);

nameResult.textContent = `Your First name is "${firstName}" and your Second name is "${secondName}"!`;





let usernameResult = document.getElementById("usernameResult");
let username = window.prompt("Enter your username.")

username = username.trim().charAt(0).toLocaleUpperCase() + username.replace(" ", "").slice(1).toLocaleLowerCase();
usernameResult.textContent = `Your nickname will be "${username}"`





const loginData = document.getElementById("loginData");
let loggedIn = false;
let login;
let password;

while(!loggedIn){
    login = window.prompt(`Enter you login`);
    password = window.prompt(`Enter you password`);

    if(login == "Admin" && password == "Admin"){
        loggedIn = true;
        loginData.textContent = `Your login is "${login}" and password is "${password}", don't forget it!`;
    }
    else{
        window.prompt("Ask your admin to give you the credentials!");
    }
}





const forLoop = document.getElementById("forLoop");
for(let i = 1; i <= 12; i++){
    console.log(i);
}
forLoop.textContent = "Happy New Year!"






const subscribe = document.getElementById("subscribe"); 
const visa = document.getElementById("visa");
const masterCard = document.getElementById("masterCard");
const payPal = document.getElementById("subscribe");
const submit1 = document.getElementById("submit1");
const subscribeResult = document.getElementById("subscribeResult");
const paymentResult = document.getElementById("paymentResult");

submit1.onclick = function(){
    
    let subscribeCheck = subscribe.checked ? "You are subscribed!" : "You are not subscribed!";
    subscribeResult.textContent = subscribeCheck;

    if(visa.checked){
        paymentResult.textContent = "You are paying with Visa!"
    }
    else if(masterCard.checked){
        paymentResult.textContent = "You are paying with MasterCard!"
    }
    else if(payPal.checked){
        paymentResult.textContent = "You are paying with PayPal!"
    }
}