// VARIABLES
// CREATING VARIBLES
let myName = 'John'

console.log(myName);

const favFruit = 'apples';
console.log(favFruit);

// Updating Variables
myName = 'gina'
console.log(myName);

let surname = 'joseph';
console.log(surname);

surname = myName;
console.log(surname);

// Data Types
//String: is value  in single or double quotes.

let nam = 'dija';

// Number
let num = 65;

// Array
let favFruits = ['apple', 'watermelon', 'orange', 'mango', 'grapes', 'banana'];
console.log(favFruits);

console.log(favFruits[5]);

favFruits.push('lime', 'lemon', 'Tangerine');
console.log(favFruits);

favFruits.pop();
console.log(favFruits);

favFruits.shift();
console.log(favFruits);

favFruits.unshift('apple');
console.log(favFruits);

console.log(favFruits.length);

console.log(favFruits.includes('sugar'));

let name1 = 'Halima'

let name2 = 'Kundiri'

console.log('My Name is' + " " + name2 + " " + name1 + " " + name2)


console.log('My Name is' + " " + name1 + " " + 'and my favourites fruits are' + " " + (favFruits));

let prefects = {
    headgirl: 'halima',
    headboy: 'Sam',
    sanitary: 'Jasmine',
    games: 'Bell0',
};
console.log(prefects.headboy)


let myBraches = [
    {
        branch: 'Wuse',
        address: 'Ademola Adetunkunbo',
        role: 'packaging',
        staff: [
            {
                manager: 'ms Gina',
                secretary: 'Ms Audrey',
                supervisor: 'Mr Jude'
            }
        ]
    },
    {
        branch: 'Gwarimpa',
        address: 'Opposite H-Medix,4th Avenue, Gwarimpa',
        role: 'Distributor',
        staff: [
            {
                manager: 'Mr Fred',
                secretary: 'Mr James',
                supervisor: 'Mr Alexander'
            }
        ]

    },

    {
        branch: 'Maitama',
        address: 'No.4,Gana Street Maitama',
        role: 'Manufacturing',
        staff:
            [
                {
                    manager: 'Mrs Cynthia',
                    secretary: 'Ms Alice',
                    Supervisor: 'Mr.Tainimu'
                }
            ]

    }
];

console.log(myBraches[1].staff[0].supervisor);

console.log(myBraches[2].address)


// Operators\
// = (this is called the assignement operator.)

// Equality Operator
let num1 = '5';
let num2 = 5;

console.log(num1 == num2);
console.log(num1 !== num2);

console.log(num1 === num2);
console.log(num1 != num2);

console.log(num1 > num2);
console.log(num1 < num2);

console.log(num1 >= num2);
console.log(num1 <= num2);

// Arithmetic Operators
console.log(num1 + num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 - num2);

// Logical Operators
// && = 'And' in Javascrpit;
// ||= "Or " in Javascrpit

// Conditional Statement

let score = 60;

if (score > 50) {
    console.log('Javascrpit is funnnnnnn');
}
// if(score < 50 && score>50){
//     console.log('Javascrpit is funnnnnnn');
// }


let studentscore = 200;

let cutofmark = 200;

if (studentscore < 70) {
    console.log('You Failed');
}
else if (studentscore >= 71 && studentscore <= 140) {
    console.log('you failed try harder next year');
}

else if (studentscore >= 141 && studentscore <= 199) {
    console.log('you failed by a very tiny margin.try harder next year');
}
else {
    console.log('congratulations you have passed the test');
}

// Switch

score = 31;
switch (score) {
    case 10:
        console.log('score is 10');

        break;

    case 30:
        console.log('score is 30');
        break;

    case 50:
        console.log('score is 50');
        break;

    case 60:
        console.log('score is 60');
        break;

    default:
        console.log('invalid score');
        break;

};

// Function
// Create a  function

function pet() {
    console.log('I Love Petssss!!!');
}
// Calling a function
pet()
pet()


// Function with parameters 
function dayofweek(day) {
    console.log('The day of the week is' + day);
}
dayofweek(' Thursday');
dayofweek(' Friday');

function studentscores(x,y,z) {
    console.log('sharon scored '+ x);
    console.log('Faruk scored ' + y);
    console.log('timmy scored ' + z);

};
studentscores(56,70,80);

// function studentinfo(n1,n2,n3,a,b,c){
//     console.log(n1+a)
//     console.log(n2+a)
//     console.log(n3+a)
// };

// studentinfo('zara','ibrahim','john',70 ,50,40);

function studentresult(studentname,studentscore){
    console.log(`${studentname} scored ${studentscore}`);

}
studentresult('mary ' ,70);

function studentresult(studentname,studentscore){
    console.log(studentname + 'Scored '+ studentscore);

}
studentresult('joshua ' ,70);

// Loop
// 1.while loop

let age= 0;

while (age<10){
    age++;
    console.log(age);
}

// 2. The do while loop 
let shoesize =0

do {
    console.log(`the shoe size is ${(shoesize)}`);
    shoesize++;
} while (shoesize<12);


// 3. For loop 

for(let dressSize=0;dressSize<10; dressSize++){
    console.log(`dress size ${dressSize}`);
};
// 4. For Each
favFruits = ['soup sop', 'watermelon','mango', 'orange'];

favFruits.forEach(function(fruitname){
    console.log(`${fruitname} is delicious`);
});





