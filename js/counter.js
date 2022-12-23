let increBtn=document.querySelector('.incre-btn')
let resetBtn=document.querySelector('.reset-btn')
let decreBtn=document.querySelector('.decre-btn')
const count=document.querySelector('.count')

let counter=0
increBtn.addEventListener('click',function(){
    counter+=1
    count.textContent=counter
    count.style.color='green'
})
decreBtn.addEventListener('click',function(){
    counter-=1
    count.textContent=counter
if(counter<0){
    count.style.color='red'

}
})
resetBtn.addEventListener('click',function(){
    counter=0
    count.textContent=counter
    if(counter===0){
        count.style.color='black'
    
    }
})

