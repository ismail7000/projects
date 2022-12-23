let video=document.querySelector('.video-con')
let btn=document.querySelector('.switch-btn')
let swich=document.querySelector('.switch')
let heading=document.querySelector('.heading')
let loader=document.querySelector('.pre-loader')
heading.textContent='Cold Desert';
let hide=document.querySelector('.hide-preloader')
Window.addEventListener("load",()=>{
    loader.classList.add('hide')
})


btn.addEventListener('click',function(){
    console.log("Working fines")
    if(!swich.classList.contains('slice')){
        swich.classList.add('slice')
        video.pause();
    }
    else{
        swich.classList.remove('slice')
        video.play();

    }
})