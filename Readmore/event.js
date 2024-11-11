let part_1=document.getElementById('part-1');
let part_2=document.getElementById('part-2');
let more = document.getElementById('more');
let less =document.getElementById('less');

more.addEventListener('click',function(params) {
    part_2.style.display='block';
    more.style.display='none';
    less.style.display='block';
});

less.addEventListener('click',function (params) {
    part_2.style.display='none';
    more.style.display='block';
    less.style.display='none';
});