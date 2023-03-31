const btn_right=document.querySelector('.btn-right');
const btn_left=document.querySelector('.btn-left');
const btn_top=document.querySelector('.btn-top');
const btn_down=document.querySelector('.btn-down');

btn_right.addEventListener('click',function(){
    const element = document.querySelector('.photo').classList.add('right');
    const element2 = document.querySelector('.photo').classList.remove('left');
})
btn_left.addEventListener('click',function(){
    const element = document.querySelector('.photo').classList.add('left');
    const element2 = document.querySelector('.photo').classList.remove('right');
})
btn_top.addEventListener('click',function(){
    const element = document.querySelector('.photo').classList.add('top');
    const element2 = document.querySelector('.photo').classList.remove('down');
})
btn_down.addEventListener('click',function(){
    const element = document.querySelector('.photo').classList.add('down');
    const element2 = document.querySelector('.photo').classList.remove('top');
})