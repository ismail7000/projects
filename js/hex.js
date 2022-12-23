let hex=[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
var colorBtn=document.querySelector('.color-btn')
var colorName=document.querySelector('.color-name')
var body=document.body;
colorBtn.addEventListener("click",function(){
    let hexcolor='#'
    for(let i=0;i<6;i++){
        hexcolor+=hex[getrandomnumber()]
    }
    body.style.backgroundColor=hexcolor
    colorName.textContent=hexcolor
})
function getrandomnumber(){
    return Math.floor(Math.random()*hex.length);
}




