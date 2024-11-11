let age =document.getElementById('age');
let solution1;
let solution2;
let actual =document.getElementById('actual');
let place=document.getElementById('place');

let date = new Date();
console.log(date);
let currentYear=date.getFullYear();


function clickMe(){
    let result1=prompt('How old are You');
    console.log(result1);
    solution1=result1*365;
    actual.innerHTML=`You are about ${solution1} years old`;
}

function reset1(){
    actual.innerHTML='';
};

function clickhere(){
    let result2=prompt('In what Year were you born');
    console.log(result2);
    solution2=currentYear-result2;
    console.log(solution2);
    place.innerHTML=`You were born in ${solution2}`;

};

function wipe(){
    place.innerHTML='';
}







