let ready=document.getElementById('ready');
let start=document.getElementById('start');

start.addEventListener('click',function(){
   setTimeout(() => {
    ready.style.display='none';
    start.style.display='none';
   }, 2000);
})