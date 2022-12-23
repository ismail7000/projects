let newPage=document.getElementById('new-page')
let page=document.querySelector('.page')
let textarea=document.getElementById('textarea')
let eraser=document.getElementById('eraser')
let savedPage=document.getElementById('saved-page')
let pagesave=document.querySelector('.pagesave')
let savetext=document.querySelector('.savetext')
newPage.addEventListener('click',function(){
page.classList.toggle('pagea')
})

eraser.addEventListener('click',function(){
    textarea.value= " "
})

savedPage.addEventListener('click',function(){
savetext.textContent=textarea.value
pagesave.style.visibility='visible'
page.style.display='none'
})


