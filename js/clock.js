let seconds=document.querySelector('.seconds')
let minutes=document.querySelector('.minutes')
let hours=document.querySelector('.hours')

let counter=0
let countmin=0
let counthour=0
setInterval(()=>{
    counter+=1
    seconds.innerHTML=counter
    if(counter==59){
        counter=0
        if(counter==0){
            countmin+=1
            minutes.innerHTML=countmin+":"
            if(countmin==59){
                countmin=0
                counthour+=1
                hours.innerHTML=counthour+":"
                if(counthour==12){
                    counthour=0
                    countmin=0
                    counter=0
                }
            }
        }
    }
},1000)


