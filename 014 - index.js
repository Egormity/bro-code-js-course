let username = "Egormity";

console.log(username.charAt(0));

console.log(username.indexOf("o"));

console.log(username.lastIndexOf("o"));

console.log(username.length);



username = "   Egormty   "
username = username.trim();
console.log(username);

username = username.toUpperCase();
console.log(username);

username = username.toLocaleLowerCase();
console.log(username);



username = "Egormity";

username = username.repeat(3);
console.log(username);



username = " Egormity";

let result = username.startsWith(" ");
let res = result ? "Username cannot start with an empty space" : "All good.";
console.log(res);

result = username.endsWith("y");
res = result ? "All good." : "Username cannot start with an empty space";
console.log(res);

username = "Egor mity";
result = username.includes(" ");
res = result ? "Username cannot unclude an empty space" : "All good.";
console.log(res);



let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.replaceAll("-", " fuck ");
console.log(phoneNumber);

phoneNumber = phoneNumber.padStart(30, "-");
console.log(phoneNumber);

phoneNumber = phoneNumber.padEnd(40, "-");
console.log(phoneNumber);