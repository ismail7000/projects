let authorimg =document.getElementById('authorimg');
let authorname =document.getElementById('authorname');
let job =document.getElementById('job');
let description =document.getElementById('description');
let nextBtn=document.querySelector('.next-btn')
let preBtn=document.querySelector('.pre-btn')
let randomBtn=document.querySelector('.random-btn')

const reviews=[
    {
        image:'team/team-1.jpg',
        name:'Walter White',
        work:"Web Designer",
        more:"Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara"
    },
    {
        image:'team/team-2.jpg',
        name:' Sarah Jhinson',
        work:"Product Hunter",
        more:"Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum tem temporibus"
    },{
        image:'team/team-3.jpg',
        name:'William Anderson',
        work:"UX/UI Designer",
        more:"Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspicquaerat qui aut aut aut"
    }
];
let currentitem=0;
// window.addEventListener('DOMContentLoaded',function(){
// })
nextBtn.addEventListener('click',function(){
    currentitem++
    if(currentitem>reviews.length-1){
        currentitem=0
    }
    getperson()
})
preBtn.addEventListener('click',function(){
    currentitem--
    if(currentitem<0){
        currentitem=reviews.length-1
    }
    getperson()
})
function getperson(){
    let item=reviews[currentitem]
    authorimg.src=item.image
    authorname.textContent=item.name
    job.textContent=item.work
    description.textContent=item.more
}
function getnumber(){
    return Math.floor(Math.random()*reviews.length);
}

randomBtn.addEventListener('click',function(){
    let item=reviews[getnumber()]
    authorimg.src=item.image
    authorname.textContent=item.name
    job.textContent=item.work
    description.textContent=item.more

})



