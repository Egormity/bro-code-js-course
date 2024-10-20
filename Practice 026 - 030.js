let numbs1 = [1, 2, 3];
let numbs2 = [111, 222, 333];

let numbs = [...numbs1, ...numbs2, 100, 200, 300]
console.log(numbs.join(`, `));





function combineStrings(...strings){
    return strings.join(` `);
}

const fullName = combineStrings(`Zemlyanova`, `Angelina`, `Sergeevna`)

console.log(fullName)





function diceRoll(){
    const diceInput = document.getElementById("diceInput").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < diceInput; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="Images - dice/${value}.png" alt="Dice ${value}">`)
    }
    diceResult.textContent = `Dice: ${values.join(`, `)}`
    diceImages.innerHTML = images.join(``);
}





function generatePassword(length, includeLovercase, includeUppercase, includeNumbers, includeSymbols){
    const passwordError = document.getElementById("passwordError");
    
    const lovercaseChars = "abcdefghijklmnoprstuvwxyz";
    const UppercaseChars = lovercaseChars.toUpperCase();
    const numberChars = 1234567890;
    const symbolChars = "!@#$%^&*()_+";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLovercase ? lovercaseChars : "";
    allowedChars += includeUppercase ? UppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 0){
        return passwordError.textContent = `Password length mus tbe at least 1`;
    }
    if(allowedChars.length === 0){
        return passwordError.textContent = `At least 1 set of character must be selected`;
    }
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex]
    }
    return password;
}
const passwordLength = 12;
    const includeUppercase = true;
    const includeLovercase = true;
    const includeNumbers = true;
    const includeSymbols = true;
const password = generatePassword(passwordLength, includeLovercase, includeUppercase, includeNumbers, includeSymbols);
function passwordFInal(){
    const passwordResult = document.getElementById("passwordResult");
    passwordResult.textContent = password;
}





function sum(callback, x, y){
    let result = x + y;
    callback(result);
}
function display(result){
    console.log(result);
}

sum(display, 3, 9);