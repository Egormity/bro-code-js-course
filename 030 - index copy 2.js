function hello(callback){
    console.log(`Hello!`)
    callback();
}

function wait(){
    console.log(`Wait!`);
}

function leave(){
    console.log(`Leave!`);
}

function goodbye(){
    console.log(`goodbye!`);
}

hello(wait);



sum(diplayPage, 1, 2)

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

function diplayPage(result){
    document.getElementById("myH1").textContent = result;
}