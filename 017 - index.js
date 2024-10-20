// and = &&
// or = ||
// not = !



const temp = 30;



if(temp >= 0 && temp <= 30){
    console.log("The weather is GOOD.")
}
else{
    console.log("The weather is BAD.")
}



if(temp < 0 || temp > 30){
    console.log("The weather is BAD.")
}
else{
    console.log("The weather is GOOD.")
}



if(!(temp >= 0) || !(temp <= 30)){
    console.log("The weather is BAD.")
}
else{
    console.log("The weather is GOOD.")
}