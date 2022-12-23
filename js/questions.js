// const btns=document.querySelectorAll('.icons');
// let answer=document.querySelectorAll('.answer');
// btns.forEach(function(orange){
//     orange.addEventListener('click',function(e){
//         let variable=e.currentTarget.parentElement.parentElement
//         variable.classList.toggle('show-text');
//     })
// })

let ques1=document.querySelectorAll('.ques1')

ques1.forEach(function(question){
// console.log(blue)
let btns=question.querySelector('.icons');
btns.addEventListener('click',function(){
    ques1.forEach(function(item){
        if(item !==question){
item.classList.remove('show-text')
        }
    })
    question.classList.toggle('show-text')
})
})


