let red =document.getElementById('red');
let h2 =document.getElementById('zero');
let green=document.getElementById('green');

let counter=0;

green.addEventListener('click',function (){
    counter++;
    red.removeAttribute('disabled')
    console.log(counter);
    zero.innerHTML=counter;
    if (counter>=20) {
        alert('Maxium Value Reached');
        green.setAttribute('disabled','true')
    }
});

red.addEventListener('click',function() {
    counter--;
    green.removeAttribute('disabled')
    zero.innerHTML=counter;
    if (counter<=0) {
        alert('minimum value');
        red.setAttribute('disabled','true')
    }
});
