let numbers = [1, 2, 3, 4, 5]

function display(element){
    console.log(element);
}
function triple(element, index, array){
    array[index] = element * 3;
}
function double(element, index, array){
    array[index] = element * 2;
}
function square(element, index, array){
    array[index] = Math.pow(element, 2);
}
function cube(element, index, array){
    array[index] = Math.pow(element, 3);
}


numbers.forEach(double);
//numbers.forEach(triple);
numbers.forEach(square);
//numbers.forEach(cube);
numbers.forEach(display);



let fruits = [`apple`, `orange`, `banana`, `coconut`]

function display1(element){
    console.log(element);
}
function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}
function lowerCase(element, index, array){
    array[index] = element.toLowerCase();
}
function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

//fruits.forEach(upperCase);
//fruits.forEach(lowerCase);
fruits.forEach(capitalize);
fruits.forEach(display1)
