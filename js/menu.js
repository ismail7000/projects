const menu=[
    {
        id:1,
        image:"photo/team-2.jpg",
        category:'old',
        name:"jozef Stallen",
        rank:"3✳️",
        desc:'cisely this advice to Ayub Khan when he was serving in his government (and Bhutto’s plans for the PPP in some waysechoedAyub’shopesforBasicDemocracy).'
    },
    {
        id:2,
        image:"photo/team-3.jpg",
        name:"Winston Churchull",
        category:'favourite',
        rank:"6✳️",
        desc:'.Butto create such a party across Pakistan it would have been necessary to pay and to motivate its local cadres'
    },
    {
        id:3,
        image:"photo/testimonials-1.jpg",
        name:"Roosevalt",
        category:'fovourite',
        rank:"2✳️",
        desc:'TheonlyexceptionsaretheJamaatIslamiandtheMohajirQaumiMovement–andforreasonsthatwillbeex'
    },
    {
        id:4,
        image:"photo/testimonials-2.jpg",
        name:"Ladi Anatolia",
        category:'Current',
        rank:"5✳️",
        desc:'Lacking an effective mass party with real control over society, Bhutto was forced back on instruments of state control.'
    },
    {
        id:5,
        image:"photo/testimonials-3.jpg",
        name:"Henry Clinton",
        category:'Current',
        rank:"1✳️",
        desc:'forthisissheerlaziness,exacerbatedbybadpay.‘Would you risk your life and run around in this heat for the pay weget?’'
    },
    {
        id:6,
        image:"photo/testimonials-4.jpg",
        name:"Barak Obama",
        category:'old',
        rank:"2✳️",
        desc:'More importantly, from a force under the British whichwastosomeextentindependentofsocietyandunderstatecontrol.'
    },
    {
        id:7,
        image:"photo/testimonials-5.jpg",
        name:"Anatol Lieven",
        category:'favourite',
        rank:"4✳️",
        desc:'Bhuttothereforesetuphisownparamilitarygroup,the Federal Security Force (FSF), staffed by PPP loyalists drawnfromthe'
    },
];


let mainSection=document.querySelector('.main-section')
// loadcontent
window.addEventListener('DOMContentLoaded',function(){
    console.log("Not working")
    displaymenuitems(menu)
})
// fiter btns
let checkbtn=document.querySelectorAll('.check-btn')
checkbtn.forEach(function(btn){
    btn.addEventListener('click',function(g){
      let category=  g.currentTarget.dataset.apple
      let menuCategory=menu.filter(function(menuItems){
        // console.log(menuItems.category)
        if(menuItems.category===category){
            return menuItems;
          }
      })
      
      if(category==='All'){
        displaymenuitems(menu)
        console.log(menu)
      }
      else{
        displaymenuitems(menuCategory)
        console.log(menuCategory)

      }
    //   console.log(menuCategory)
    })
})

function displaymenuitems(menuItems){
    let displaymenu=menuItems.map(function(items){
        return `<article class="menu-items" >
        <!-- image -->
        <img src=${items.image} class="photo" alt=${items.name}>
        <div class="items-info">
    <header>
        <h4 class="item-name">${items.name}</h4>
        <h4 class="price star" >${items.rank}</h4>

    </header>
    <p class="items-text" >
    ${items.desc}
    </p>
        </div>
    </article>
    `
    })
    displaymenu=displaymenu.join(' ')
    mainSection.innerHTML+=displaymenu
    // console.log(displaymenu)
}
