function generatePassword(length, includeLovercase, includeUppercase, includeNumbers, includeSymbols){
    const lovercaseChars = `abcdefghijklmnopqrstuvwxyz`;
    const uppercaseChars = `ABCDEFGHIJKLMNOPRSTUVWXYZ`;
    const numberChars = `01234567890`;
    const symbolChars = `!@#$%^&*()_+`;

    let allowedChars = ``;
    let password = ``;

    allowedChars += includeLovercase ? lovercaseChars : ``;
    allowedChars += includeUppercase ? uppercaseChars : ``;
    allowedChars += includeNumbers ? numberChars : ``;
    allowedChars += includeSymbols ? symbolChars : ``;

    if(length <= 0){
        return `(Password length must be at least 1)`;
    }
    if(allowedChars.length === 0){
        return `(At lesat 1 set of characters needs to be selected)`;
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLength = 12;
const includeLovercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, 
                                  includeLovercase, 
                                  includeUppercase, 
                                  includeNumbers, 
                                  includeSymbols);

console.log(`Generated password: ${password}`);