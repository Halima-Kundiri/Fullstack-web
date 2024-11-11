let input =document.getElementById('input');

function zero(){
    input.value+='0';
}
function one(){
    input.value+='1';
}
function two(){
    input.value+='2';
}
function three(){
    input.value+='3';
}
function four(){
    input.value+='4';
}
function five(){
    input.value+='5';
}
function six(){
    input.value+='6';
}
function seven(){
    input.value+='7';
}
function eight(){
    input.value+='8';
}
function nine(){
    input.value+='9';
}
function period(){
    input.value+='.';
}
// Symbols
function divide(){
    input.value+='/'
}
function multiply(){
    input.value+='*'
}
function minus(){
    input.value+='-'
}

function plus(){
    input.value+='+'
}

function ac(){
    input.value=''
}
function up(){
    input.value+='**'
}
function sq(){
    input.value=Math.sqrt(input.value);
}

function equals(){
    let solve=eval(input.value);
    input.value=solve;
}




