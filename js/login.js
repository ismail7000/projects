let login = document.getElementById('login')
let sinup = document.getElementById('sinup')
let loginbtn = document.querySelector('.loginbtn')
let sinupbtn = document.querySelector('.sinupbtn')


loginbtn.addEventListener('click', () => {
    sinup.style.display = 'block'
    login.style.display = 'none'
})

sinupbtn.addEventListener('click', () => {
    login.style.display = 'block'
    sinup.style.display = 'none'
})






