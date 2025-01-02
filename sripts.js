const get = element =>document.querySelector(element)

const closeNavBtn = get(".nav-close")
const openNavBtn = get(".openNav")
const navBar = get(".left-col")
const galleryLeft = get(".left")

const galleryRight = get(".right")




const cards = document.querySelectorAll(".team-member-card")


// gallery

let currentIndex =0

function updateCards (){
  cards.forEach((card, index)=>{
    card.classList.remove("active-card")
    if(index===currentIndex){
      card.classList.add("active-card")
    }




    
  });
}

  galleryLeft.addEventListener("click",e=>{
    currentIndex = (currentIndex - 1 + cards.length) % cards.length // move to the left 
      updateCards()
  })
  galleryRight.addEventListener("click",e=>{

    currentIndex= (currentIndex + 1 +cards.length) % cards.length
    
    updateCards()
  })

  updateCards()





openNavBtn.addEventListener("click", e=>{
navBar.classList.remove("hide")

})

closeNavBtn.addEventListener("click", e=>{
navBar.classList.add("hide")

})
