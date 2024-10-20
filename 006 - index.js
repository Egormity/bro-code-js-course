const PI = 3.14;
let radius;
let circumference;1



document.getElementById('mySubmit').onclick = function(){
    radius = document.getElementById('myText').value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById('myH3').textContent = circumference + ' cm';
}