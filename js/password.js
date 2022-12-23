let pass=[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I","J","K","L"
,"M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var colorBtn=document.querySelector('.color-btn')
var colorName=document.querySelector('.color-name')
var body=document.body;


setInterval(() => {
    let passchange='@'
    for(let i=0;i<24;i++){
        passchange+=pass[getrandompassword()]
    }
    colorName.textContent=passchange
}

, 300);
function getrandompassword(){
    return Math.floor(Math.random()*pass.length);
}