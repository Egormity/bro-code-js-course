console.log('Hello world!')
console.log('I am not a fan of pizza anymore')
console.log('Bye-bye')

window.alert('Hello!')



let isOnline = 'online';
let age = 17;
let gender = 'male';

console.log('Currently you are a ' + age + ' years old ' + gender + ' and you are ' + isOnline);



let randomNumber = 10;
console.log(randomNumber);

randomNumber *= 3;
console.log(randomNumber);

randomNumber ++;
console.log(randomNumber);

randomNumber **= 2;
console.log(randomNumber);

randomNumber /= 100;
console.log(randomNumber);

randomNumber += 7.39;
console.log(randomNumber);



let test;
document.getElementById('mySubmit').onclick = function(){
    test = document.getElementById('username').value;
    document.getElementById('Hello').textContent = 'Hello ' + test + '!'
}



let x = '1'
let y = '1'
let z = '1'

x = String(x);
y = Number(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);