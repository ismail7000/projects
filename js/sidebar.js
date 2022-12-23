let bars=document.querySelector('.bars')
let sidebar=document.querySelector('.sidebar')
let closeBtn=document.querySelector('.close-btn')

bars.addEventListener('click',function(){
    sidebar.classList.toggle('show-sidebar')
})
closeBtn.addEventListener('click',function(){
    sidebar.classList.remove('show-sidebar')
})


// sidebar.addEventListener('change',()=>{
//        sidebar.classList.remove('show-sidebar')
// })


