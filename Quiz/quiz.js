// login Setting

let con =document.getElementById('container');
let nam =document.getElementById('nam');
let empty1 =document.getElementById('empty1');
let age=document.getElementById('age');
let empty2 =document.getElementById('empty2');
let login=document.getElementById('login');
let questions=document.getElementById('questions');
let intro=document.getElementById('intro');

// Questions Setting
let q1 = document.getElementById('q1');
let next1=document.getElementById('next1');
let q2=document.getElementById('q2');
let q3=document.getElementById('q3');
let q4=document.getElementById('q4');
let q5=document.getElementById('q5');
let q6=document.getElementById('q6');
let q7=document.getElementById('q7');
let q8=document.getElementById('q8');
let q9=document.getElementById('q9');
let q10=document.getElementById('q10');
let results=document.getElementById('results');
let score =document.getElementById('score');
let remark=document.getElementById('remark');
// Display Of Nones
questions.style.display='none';
q1.style.display='none';
q2.style.display='none';
q3.style.display='none';
q4.style.display='none';
q5.style.display='none';
q6.style.display='none';
q7.style.display='none';
q8.style.display='none';
q9.style.display='none';
q10.style.display='none';
results.style.display='none';

// Login Functionality

login.addEventListener('click',function () {
    if (nam.value ===''){
        empty1.innerHTML='Name Field Cannot Be Empty';
        nam.style.border='red solid 2px';
    }else{ 
        nam.style.border='green solid 2px';
        empty1.innerHTML=''
    }
if (age.value==='') {
    empty2.innerHTML='Age Field Cannot Be Empty';
    age.style.border='red solid 2px';
} else{
    age.style.border='green solid 2px';
    empty2.innerHTML='';
} if (nam.value !=='' && age.value!=='') {
     
    intro.innerHTML=`Welcome To Your Test ${nam.value}`;
    let speech= new SpeechSynthesisUtterance(intro.innerHTML);
    speechSynthesis.speak(speech)

    setTimeout(() => {
        con.style.display='none';
        intro.style.display='none';
        questions.style.display='flex';
        q1.style.display='block';
    }, 4000);
}
});

// Selecting The values
// Question 1
let counter = 0;

let list1 = document.getElementById('list1');
let q1a = document.getElementById('q1a');
list1.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    let answer=event.target.innerHTML;
    q1a.value= answer;
  }
});

// Question 2
let list2 = document.getElementById('list2');
let q2a = document.getElementById('q2a');
list2.addEventListener('click',function (event2) {
    if (event2.target.tagName === 'LI') {
        let answer2=event2.target.innerHTML
        q2a.value= answer2;
      }
});
// Question 3
let list3 = document.getElementById('list3');
let q3a = document.getElementById('q3a');
list3.addEventListener('click',function (event3) {
    if (event3.target.tagName === 'LI') {
        let answer3=event3.target.innerHTML
        q3a.value= answer3
      }
});

// Question 4
let list4 = document.getElementById('list4');
let q4a = document.getElementById('q4a');
list4.addEventListener('click',function (event4) {
    if (event4.target.tagName === 'LI') {
        let answer4=event4.target.innerHTML
        q4a.value= answer4
      } 
});

// Question 5
let list5 = document.getElementById('list5');
let q5a = document.getElementById('q5a');
list5.addEventListener('click',function (event5) {
    if (event5.target.tagName === 'LI') {
        let answer5 =event5.target.innerHTML
        q5a.value= answer5
      } 
});

// Question 6
let list6 = document.getElementById('list6');
let q6a = document.getElementById('q6a');
list6.addEventListener('click',function (event6) {
    if (event6.target.tagName === 'LI') {
        let answer6 =event6.target.innerHTML
        q6a.value= answer6
      } 
});

// Question 7
let list7 = document.getElementById('list7');
let q7a = document.getElementById('q7a');
list7.addEventListener('click',function (event7) {
    if (event7.target.tagName === 'LI') {
        let answer7 =event7.target.innerHTML
        q7a.value= answer7
      }
});

// Question 8
let list8 = document.getElementById('list8');
let q8a = document.getElementById('q8a');
list8.addEventListener('click',function (event8) {
    if (event8.target.tagName === 'LI') {
        let answer8 =event8.target.innerHTML
        q8a.value= answer8
      } 
});

// Question 9
let list9 = document.getElementById('list9');
let q9a = document.getElementById('q9a');
list9.addEventListener('click',function (event9) {
    if (event9.target.tagName === 'LI') {
        let answer9 =event9.target.innerHTML
        q9a.value= answer9
      } 
});

// Question 10
let list10 = document.getElementById('list10');
let q10a = document.getElementById('q10a');
list10.addEventListener('click',function (event10) {
    if (event10.target.tagName === 'LI') {
        let answer10 =event10.target.innerHTML
        q10a.value= answer10
      }
});

// Buttton Functionality(Previous/Next)
next1.addEventListener('click',function () {
    q1.style.display='none';
    q2.style.display='block';
})
function pq1(){
    q1.style.display='block';
    q2.style.display='none';
}
function nextq1(){
    q2.style.display='none';
    q3.style.display='block';
}

function pq2(){
    q2.style.display='block';
    q3.style.display='none';
}
function nextq2(){
    q3.style.display='none';
    q4.style.display='block';
}
function pq3(){
    q3.style.display='block';
    q4.style.display='none';
}
function nextq3(){
    q4.style.display='none';
    q5.style.display='block';
}

function pq4(){
    q4.style.display='block';
    q5.style.display='none';
}

function nextq4(){
    q5.style.display='none';
    q6.style.display='block';
}

function pq5(){
    q5.style.display='block';
    q6.style.display='none';
}

function nextq5(){
    q6.style.display='none';
    q7.style.display='block';
}

function pq6(){
    q6.style.display='block';
    q7.style.display='none';
}

function nextq6(){
    q7.style.display='none';
    q8.style.display='block';
}

function pq7(){
    q7.style.display='block';
    q8.style.display='none';
}

function nextq7(){
    q8.style.display='none';
    q9.style.display='block';

}
function pq8(){
    q8.style.display='block';
    q9.style.display='none';
}
function nextq8(){
    q9.style.display='none';
    q10.style.display='block';
}

function pq9(){
    q9.style.display='block';
    q10.style.display='none';
}

function submit(){
    if (q1a.value ==='Three'){
        counter ++;
     }
     if (q2a.value ==='Eyes'){
        counter ++;
      }
      if(q3a.value==='Hydrogen and Oxygen'){
        counter ++;
      }
      if(q4a.value==='Five'){
        counter++;
      }
      if(q5a.value==='Africa'){
        counter++;
      }
      if(q6a.value==='Skin'){
        counter++;
      }
      if(q7a.value==='8 Hours'){
        counter++;
      }
      if(q8a.value==='24 Hours'){
        counter++;
      }
      if(q9a.value==='60 Seconds'){
        counter++;
      }
      if(q10a.value==='100 Years'){
        counter++;
      }
      total.value=counter
    q10.style.display='none';
    results.style.display='block'; 
    score.innerHTML=`Dear ${nam.value} Your Total Score is`
    if (total.value <=3) {
        remark.innerHTML='You Suck At Basic Things'
    } else if(total.value<=5){
        remark.innerHTML='You are Almost there Be better'
    }else if(total.value<=8){
        remark.innerHTML='I guess you are fine'
    }else if(total.value>8){
        remark.innerHTML='You are Amazing'
    }
}




// questions1
// 2. it can be clicked multiple times and it will add to the values how do you fix that 







