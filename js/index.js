



// navbar javascript
let burger=document.querySelector('.burger')
let navlinks=document.querySelector('.navlinks')
burger.addEventListener('click',function(){
    navlinks.classList.toggle('shownav')
})

// pricing section
let menu=[
    {
        id:1,
        title:'Double',
        price:'$65',
        img:"img2/rooms/double.jpg",
        desc:`A room assigned to two people. May have one or more beds.
        The room size or area of Double Rooms are generally between 40 m² to 45 m².`,
        btn:'Book now'
    },
    {
        id:2,
        title:'Queen',
        price:'$123',
        img:"img2/rooms/queen.jpg",
        desc:` A room with a queen-sized bed. May be occupied by one or more people.
        The room size or area of Queen Rooms are generally between 32 m² to 50 m².`,
        btn:'Book now'
    },
    // {
    //     id:3,
    //     title:'Cabana',
    //     price:'$234',
    //     img:"img2/rooms/cabana.jpg",
    //     desc:` This type of room is always adjoining to the swimming pool or have a private pool attached to the room.
    //     The room size or area of Cabana Room Types are generally between 30 m² to 45 m².`,
    //     btn:'Book now'
    // },
    // {
    //     id:4,
    //     title:'Villa',
    //     price:'$666',
    //     img:"img2/rooms/villa.jpg",
    //     desc:`Villa is a kind of stand-alone house which gives extra privacy and space to hotel guests. A fully equipped villa contains not only bedrooms and a living room but a private swimming pool, Jacuzzi and balcony.
    //     The room size or area of Villa’s are generally between 100 m² to 150 m²`,
    //     btn:'Book now'
    // },
    // {
    //     id:5,
    //     title:'Studio',
    //     price:'$700',
    //     img:"img2/gallery1/1.jpg",
    //     desc:` A room with a studio bed- a couch which can be converted into a bed. May also have an additional bed.
    //     The room size or area of Studio room types are generally between 25 m² to 40 m².`,
    //     btn:'Book now'
    // }
    
]
let pricing =document.querySelector('.pricing')
let roomsdiv=document.querySelector('.roomsdiv')
let title=document.querySelector('.title')
let price=document.querySelector('.price')
let roomimg=document.querySelector('.roomimg')
let desc=document.querySelector('.desc')

window.addEventListener("DOMContentLoaded",function(){
   let displaymenu=menu.map(function(items){
    return ` <div class="roomsdiv"  >
    <h1 ><span class="title"  >${items.title}</span><span class="price" >${items.price}</span> </h1>
    <img src="${items.img}" class="roomimg" alt="image">
    <p class="desc" > ${items.desc}</p>
        <button  class="bookbtn btn1" >${items.btn}</button>
</div>`

   })
   displaymenu=displaymenu.join(' ')
   pricing.innerHTML+=displaymenu
   
   
})


