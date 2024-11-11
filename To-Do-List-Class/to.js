let input = document.getElementById('input');
let msg = document.getElementById('msg');
let add = document.getElementById('addTodo');
let display = document.getElementById('display');

add.addEventListener('click',function () {
    let list;

    if(input.value === ''){
        msg.innerHTML='Please add a To-do';
        setTimeout(() => {
            msg.innerHTML = '';
        }, 3000);
    } else{
        list = document.createElement('li');
        list.innerHTML = input.value;
        console.log(list);
        // display.appendchild(list);
        display.appendChild(list);
        input.value='';
    }

        list.addEventListener('click',function () {
        list.style.color='green';
        list.style.textDecoration='line-through';
        });

        list.addEventListener('dblclick',function () {
        input.value=list.innerHTML;
        display.removeChild(list);
        })

});

