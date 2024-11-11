let input=document.getElementById('input');
let convert=document.getElementById('convert');

convert.addEventListener('click',function () {
    let text= input.value;
    let speech=new SpeechSynthesisUtterance();

    function mouse(){
        speech.text=text;
        speech.rate=1;
        speech.volume =1;
        speech.pitch=1;

        // Speak in  Diffrent Langaage

        speech.lang='en-Us';
        speechSynthesis.speak(speech)



    };
    mouse();
})