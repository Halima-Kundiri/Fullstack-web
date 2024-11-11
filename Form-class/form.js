let nam= document.getElementById('name');
let num = document.getElementById('num');
let email = document.getElementById('email');
let password=document.getElementById('password');
let cpassword=document.getElementById('cpassword');


let namError= document.getElementById('nameError');
let numError = document.getElementById('numError');
let emailError= document.getElementById('emailError');
let passER=document.getElementById('passER');
let cpassErr=document.getElementById('cpassErr');


let submit=document.getElementById('submit');

submit.addEventListener('click',function () {
    if(nam.value===''){
        nam.style.border='solid 1px red';
        namError.innerHTML='Name Field Cannot be empty';
        namError.style.color='red';
    }else{
        nam.style.border='solid 1px green';
        namError.innerHTML='';
       
    }
    
    if(num.value===''){
        num.style.border='solid 1px red';
        numError.innerHTML='Number Field Cannot be empty';
        numError.style.color='red';
    }else{
        num.style.border='solid 1px green';
        numError.innerHTML='';
    }

    if(email.value===''){
        email.style.border='solid 1px red';
        emailError.innerHTML='Email Field Cannot be empty';
        emailError.style.color='red';
    }else{
        email.style.border='solid 1px green';
        emailError.innerHTML='';
    }


    if(password.value===''){
        password.style.border='solid 1px red';
        passER.innerHTML='Password Field Cannot be empty';
        passER.style.color='red';
    }else{
        password.style.border='solid 1px green';
        passER.innerHTML='';
    }


   
    
  if (password.value!==cpassword.value || password.value === "") {
        password.style.border='solid red 1px';
        cpassword.style.border='solid red 1px';
        passER.innerHTML='passwords dont match';
        cpassErr.innerHTML='passowrds dont match';
        passER.style.color='red';
        cpassErr.style.color='red';
  } else{
    password.style.border='solid 1px green';
    cpassword.style.border='solid 1px green';
    passER.innerHTML='';
    cpassErr.innerHTML='';
  }

});

