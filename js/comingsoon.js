let seconds=document.querySelector('.seconds')

let count=10
function increcount(){
    count =count+1
    seconds.innerHTML=count+"<br>Seconds"
}

setInterval(increcount(),1000)






