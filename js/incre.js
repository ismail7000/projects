let text=document.querySelectorAll('.text')
let ful=document.querySelector('.ful')

// text.forEach((counter)=>{
//     // console.log(counter)
//     counter.innerHTML=0;

//     const updatecounter=()=>{
//         let targetCount=+counter.getAttribute('data-target')
//         // console.log(typeof targetCount)
//         let initialCount=+counter.innerHTML
//         let incre=targetCount/100
//         // console.log(incre)
//         if(initialCount<targetCount){
//             counter.innerHTML=`${Math.round(initialCount + incre)}`
//             setTimeout(updatecounter,100)
//         }
//         else{
//             counter.innerHTML=targetCount
//         }
//     }


//     updatecounter()
// })

text.forEach((counter)=>{
    // console.log(counter)

    counter.innerHTML=10
    let targetAttribute=+counter.getAttribute('data-target')
    console.log(typeof targetAttribute)
   let updatecounter=()=>{
    let initialCount=+counter.innerHTML
    // console.log( initialCount)
    let incre=targetAttribute/100
    
    console.warn(incre)
    if(initialCount<targetAttribute){
        counter.innerHTML=`${Math.round(initialCount+incre)}`
        setTimeout(updatecounter,100)
    }else{
        counter.innerHTML=targetAttribute
    }
   }
updatecounter()
})

