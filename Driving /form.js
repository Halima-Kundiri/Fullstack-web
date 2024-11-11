let nam=document.getElementById('nam');
let age=document.getElementById('age');
let message=document.getElementById('message');
let submit=document.getElementById('submit');

let namError=document.getElementById('namError');
let ageError=document.getElementById('ageError');

submit.addEventListener('click',function () {
    if(nam.value===''){
        nam.style.border='solid 1px red';
        namError.innerHTML='Name Field Cannot be empty';
        namError.style.fontSize='90%';
        namError.style.color='red';
        
    }
    else{
        nam.style.border='solid 1px green';
        namError.innerHTML='';
    }

    if(age.value===''){
        age.style.border='solid 1px red';
        ageError.innerHTML=' Age Field Cannot be empty';
        ageError.style.fontSize='90%';
        ageError.style.color='red';
        
    }
    else{
        age.style.border='solid 1px green';
        ageError.innerHTML='';
    }

    if (age.value==18)  {
        message.innerHTML='Congratulations you are Eligiable';
        message.style.color='green';
        message.style.fontSize='160%'
        message.style.textAlign='center';
    }
    else if
        (age.value==17){
            message.innerHTML='You are almost Eligiable';
            message.style.color='red';
            message.style.fontSize='160%';
            message.style.textAlign='center';
        }
    else if
    (age.value<=16){
        message.innerHTML='You are will be Eligiable in some years';
            message.style.color='red';
            message.style.fontSize='160%';
            message.style.textAlign='center';
    };
});


