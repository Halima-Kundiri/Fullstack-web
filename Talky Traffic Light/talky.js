let box1=document.getElementById('box-1');
let box2=document.getElementById('box-2');
let box3=document.getElementById('box-3');

function one(){
    box1.style.backgroundColor='red';
    box2.style.backgroundColor='black';
    box3.style.backgroundColor='black';
    
    let red = box1.style.backgroundColor;
    let speech= new SpeechSynthesisUtterance();

    function talk(){
        speech.red=` Hi This Value is ${red}`;
        speech.rate=1;
        speech.volume =1;
        speech.pitch=1;
    };

    talk();

}


function two(){
    box1.style.backgroundColor='black';
    box2.style.backgroundColor='yellow';
    box3.style.backgroundColor='black';

}


function three(){
    box1.style.backgroundColor='black';
    box2.style.backgroundColor='black';
    box3.style.backgroundColor='green';

}


