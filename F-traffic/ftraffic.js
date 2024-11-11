let red=document.getElementById('red');
let yellow=document.getElementById('yellow');
let green=document.getElementById('green');


red.addEventListener('click',function () {
    red.style.backgroundColor='red'
    yellow.style.backgroundColor='black'
    green.style.backgroundColor='black'
    
})


yellow.addEventListener('click',function () {
    red.style.backgroundColor='black'
    yellow.style.backgroundColor='yellow'
    green.style.backgroundColor='black'
    
})


green.addEventListener('click',function () {
    red.style.backgroundColor='black'
    yellow.style.backgroundColor='black'
    green.style.backgroundColor='green'
    
})

