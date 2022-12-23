// input fields
let budgetinput=document.getElementById('budgetinput')
let expenseinput=document.querySelector('#expenseinput')
let inpspent=document.getElementById('inpspent')
// outputs
let figures=document.querySelector('.figures')
let savebudget=document.querySelector('.savebudget')
let saveexpence=document.querySelector('.saveexpence')
let currentbal=document.querySelector('.currentbal')
// buttons
let calculate=document.getElementById('calculate')
let addexpense=document.getElementById('addexpense')

calculate.addEventListener('click',function(){
    let tamount=budgetinput.value
    let samount=inpspent.value
    // let ramount=tamount-samount
    tamount=tamount-samount

    if(tamount>=1){
        savebudget.textContent=tamount+"$"
    currentbal.textContent=+tamount+"$"
    figures.style.display='none'
    budgetinput.value=""

    }
    else{
        figures.style.display='block'
    figures.textContent="Value Cannot be Empty or Negative"

    }
    addexpense.addEventListener('click',function(){
       
        let  samount=inpspent.value
tamount-=samount

if(tamount<0 || samount<0){
    figures.style.display='block'
    figures.textContent="Oh you don't have enough balance."
    inpspent.value=""

}else if(tamount>=0 && samount>0){
            saveexpence.textContent=samount+"$"
    currentbal.textContent=tamount+"$"
        inpspent.value=""
}
        
        
    })

    
})
// first portion completed














