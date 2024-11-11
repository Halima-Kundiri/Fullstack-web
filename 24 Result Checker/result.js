let formcon=document.getElementById('form-con');
let nam = document.getElementById('name');
let submit=document.getElementById('submit');

let newcon=document.getElementById('newcon');

newcon.style.display='none';

let english=document.getElementById('english');
let maths=document.getElementById('maths');
let bio=document.getElementById('bio');
let chem=document.getElementById('chem');
let phys=document.getElementById('phys');
let econs=document.getElementById('econs');
let check =document.getElementById('check');

let total =document.getElementById('total');
let grade =document.getElementById('grade');
let remark =document.getElementById('remark');

let greet=document.getElementById('greet');

let day= new Date();

let hour = day.getHours();


submit.addEventListener('click',function () {
    if (nam.value==='') {
        alert('Name Field Cannot be Empty!!!!');
        nam.style.border='solid 1px red';
    } else{
        nam.style.border='solid 1px green';
        alert('Login Successful !!!!!');

        setTimeout(() => {
            formcon.style.display='none';
            newcon.style.display='flex';
        }, 1000);
    }
});

check.addEventListener('click',function () {
    if (english.value===''||english.value>100) {
        english.style.border='solid 1px red'
    }else{
        english.style.border='solid 3px green'
    }

    if (maths.value===''|| maths.value>100) {
        maths.style.border='solid 1px red'
    }else{
        maths.style.border='solid 3px green'
    }

    if (bio.value==='' || bio.value>100) {
        bio.style.border='solid 1px red'
    }else{
        bio.style.border='solid 3px green'
    }

    if (chem.value===''|| chem.value>100) {
        chem.style.border='solid 1px red'
    }else{
        chem.style.border='solid 3px green'
    }

    if (phys.value==='' || phys.value>100) {
        phys.style.border='solid 1px red'
    }else{
        phys.style.border='solid 3px green'
    }

    if (econs.value===''|| econs.value>100) {
        econs.style.border='solid 1px red'
    }else{
        econs.style.border='solid 3px green'
    }

    if(english.value===''|| maths.value===''|| bio.value===''|| chem.value===''|| phys.value===''|| econs.value===''){
        alert('Please Fill All Fields Correctly');
        total.value=''
        grade.value=''
        remark.value=''
    }else{
        total.value = Number(english.value)+ Number(maths.value) + Number(bio.value)+ Number(chem.value) + Number(phys.value) + Number(econs.value);

        if(total.value >0 && total.value<=200){
            grade.value='F9';
            remark.value='VERY POOOOR RESULT!';

        } else if(total.value>200 && total.value<=300){
            grade.value='E8';
            remark.value='POOR RESULT';

        }else if(total.value>300 && total.value<=350){
            grade.value='D7';
            remark.value='BAD RESULT';

        }else if(total.value>350 && total.value<=400){
            grade.value='C4';
            remark.value='GOOD RESULT';
        }

        else if(total.value>400 && total.value<=500){
            grade.value='B2';
            remark.value='VERY GOOD RESULT';

        }else if(total.value>500 && total.value<=550){
            grade.value='A';
            remark.value='OUTSTANDING RESULT';
        }else{
            grade.value='A1';
            remark.value='AMAZING WORK';
        }
  };

        if (hour>0 && hour <12) {
            greet.innerHTML=`Good morning,${nam.value}`;
        }else if (hour >= 12 && hour <=16){
            greet.innerHTML=`good Afternoon , ${nam.value}`;
        }else{
            greet.innerHTML=`Good Evening,${nam.value}`;
        }
});


