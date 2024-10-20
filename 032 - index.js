const numbers = [1, 2, 3, 4, 5]

function square(element){
    return Math.pow(element, 2);
}
function cube(element){
    return Math.pow(element, 3);
}

const squares = numbers.map(square);
console.log(squares);
const cubes = numbers.map(cube);
console.log(cubes);



const  students = [`Spongebob`, `Patric`, `Squidward`, `Sandy`];

function upperCase(element){
    return element.toUpperCase();
}
function lowerCase(element){
    return element.toLowerCase();
}

const studentsUpper = students.map(upperCase);
console.log(studentsUpper);
const studentsLower = students.map(lowerCase);
console.log(studentsLower);



const dates = [`2024-1-10`, `2025-2-20`, `2026-3-30`];

function formatDates(element){
    const parts = element.split(`-`);
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

const formattedDates = dates.map(formatDates);
console.log(formattedDates);