let input=document.getElementById('input');


// Row 1
function one(){
    input.value=input.value+'1'
}
function two(){
    input.value=input.value+'2'
}
function three(){
    input.value=input.value+'3'
}
function four(){
    input.value=input.value+'4'
}
function multiply(){
    input.value=input.value+'*'
}
// Row 2

function five(){
    input.value=input.value+'5'
}
function six(){
    input.value=input.value+'6'
}
function seven(){
    input.value=input.value+'7'
}
function eight(){
    input.value=input.value+'8'
}
function minus(){
    input.value=input.value+'-'
}

// Row 3

function nine(){
    input.value=input.value+'9'
}
function zero(){
    input.value=input.value+'0'
}
function dot(){
    input.value=input.value+'.'
}
function div(){
    input.value=input.value+'/'
}
function exo(){
    input.value=input.value+'**'
}

// Row 4
function double(){
    input.value=input.value+'00'
}
function cent(){
    input.value=input.value+'%'
}

// function open(){
//     input.value=input.value+'()'
// }
// function close(){
//     input.value=input.value+')'
// }

function plus(){
    input.value=input.value+'+'
}

// Row 5

function ac(){
    input.value=''
}

function equals(){
    let solve=eval(input.value);
    input.value=solve;
    let text =input.value;
    let speech= new SpeechSynthesisUtterance();

    function talk(){
        speech.text=` Hi This Value is ${text}`;
        speech.rate=1;
        speech.volume =1;
        speech.pitch=1;


        speech.lang='en-Us';
        speechSynthesis.speak(speech)
    };
     talk();
}


// Text-Speech




