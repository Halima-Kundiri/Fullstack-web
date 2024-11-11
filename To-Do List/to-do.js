let input=document.getElementById('input');
let add =document.getElementById('add');
let content=document.getElementById('content');
let text = document.getElementById('text');



add.addEventListener('click',function () {
    if (input.value==='') {
        text.innerHTML='Please enter a To-do ';
        setTimeout(() => {
            text.style.display='none';
        }, 3000);
    }
        else if (input.value!==''){
            let newTaskItem = document.createElement("li");
            content.innerHTML=content.innerHTML+=input.value;
            content.appendChild(newTaskItem);
            
            }
});

content.addEventListener('click',function () {
    content.style.textDecoration='line-through';
})

content.addEventListener('dblclick',function () {
    content.style.textDecoration='none';
})

