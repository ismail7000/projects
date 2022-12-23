var colorBtn=document.querySelector('.color-btn')
var colorName=document.querySelector('.color-name')
var body=document.body;
let colors=["red","green","pink","orange"]
colorBtn.addEventListener("click",function(){
    let randomNumber=getrandomnumber();
    console.log(randomNumber)
        body.style.backgroundColor=colors[randomNumber]
    colorName.textContent=colors[randomNumber]
  
})
function getrandomnumber(){
    return Math.floor(Math.random()*colors.length);
}
