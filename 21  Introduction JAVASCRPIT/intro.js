// document.getElementById('text').innerHTML='algeria';

// document.getElementById('con').style.backgroundColor='green';

let air =document.getElementById('con');
let halima = document.getElementById('text');

air.addEventListener('click',function () {
    air.style.backgroundColor='green';
    halima.innerHTML='Algeria';
    halima.style.color='yellow';
});

air.addEventListener('mouseover',function(){
    air.style.backgroundColor='blue';
    halima.innerHTML='Greece';
    halima.style.color='white ';
});

air.addEventListener('mouseleave',function () {
    air.style.backgroundColor='green';
    halima.innerHTML='Algeria';
    halima.style.color='yellow';
});

