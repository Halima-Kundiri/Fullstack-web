let hours =document.getElementById('hours');
let mins =document.getElementById('mins');
let seconds =document.getElementById('seconds');
let display =document.getElementById('display');

// Buttons
let stp =document.getElementById('stop');
let reset =document.getElementById('reset');
let start =document.getElementById('start');


let sec =0;
let min =0;
let hrs =0;

start.addEventListener('click',function () {
    start.setAttribute('disabled','true')
    let myInterval = setInterval(() => {
        sec++;
        seconds.innerHTML=sec;

        if (sec >=59) {
            min++;
            sec =0;
            mins.innerHTML = min;
        }
        if (min >=59) {
            hrs++;
            min =0;
            hours.innerHTML =hrs;
        }

        if (hrs > 23) {
            hrs = 0;
        }

    }, 1000);

    stp.addEventListener('click',function () {
        start.removeAttribute('disabled');
        clearInterval(myInterval)
    });

    reset.addEventListener('click',function () {
        start.removeAttribute('disabled');

        hrs=0;
        min=0;
        sec=0;

        hours.innerHTML='00';
        mins.innerHTML='00';
        seconds.innerHTML='00';

    });
});