
 let red = document.getElementById('red');
 let amber = document.getElementById('amber');
 let green = document.getElementById('green');

 red.addEventListener('click',function(){
    red.style.backgroundColor='red';
    amber.style.backgroundColor='black';
    green.style.backgroundColor='black';
 });

 amber.addEventListener('click',function(){
    amber.style.backgroundColor='yellow';
    red.style.backgroundColor='black';
    green.style.backgroundColor='black'
 });

 green.addEventListener('click',function(){
    green.style.backgroundColor='green';
    amber.style.backgroundColor='black';
    red.style.backgroundColor='black'
 });





