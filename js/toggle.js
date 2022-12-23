let body=document.body
let togon=document.querySelector('.togon')
let togoff=document.querySelector('.togoff')

togoff.addEventListener('click',function(){
    body.classList.add('dark-mode')
    togoff.style.visibility='hidden'
    togon.style.visibility='visible'
togon.style.color='honeydew'
})

togon.addEventListener('click',function(){
    body.classList.remove('dark-mode')
    togon.style.visibility='hidden'
    togoff.style.visibility='visible'
})

let mainimage=document.getElementById('mainimage')
let subimage=document.querySelectorAll('.subimage')

subimage.forEach((item)=>{
  item.addEventListener('click',()=>{
mainimage.src=item.src
    })
})