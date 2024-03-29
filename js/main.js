const teamMembers = document.querySelectorAll(".team-member");
const teamMembersArray = Array.from(teamMembers);
const dots = document.querySelectorAll('.dots');
const menuButton = document.querySelector(".menu");
const sideMenu = document.querySelector(".side-menu");
const closeSideMenuOverlay = document.querySelector(".side-menu-overlay");
const times = document.querySelector(".close");
const hireUsBtn = document.querySelector(".btn-hire-us");
const hireUsModal = document.querySelector(".hire-us-modal");
const closeModal = document.querySelector(".close-modal");
const hireUsOverlay = document.querySelector(".hire-us-overlay");
//listen for a mouseover and add active class to a dot element with the same index
teamMembersArray.forEach((member,index)=>{
  member.addEventListener('mouseover',()=>{
    document.querySelector(`.dot:nth-child(${index+1})`).classList.add("dot-active");
  })
})

//listen for a mouseout and remove active class
teamMembersArray.forEach(member=>{
  member.addEventListener('mouseout',()=>{
    removeActiveClass(Array.from(document.querySelectorAll(".dot")));
  })
})

//function to remove active class from every dot element
function removeActiveClass(elements){
  elements.forEach(el=>{
    el.classList.remove("dot-active");
  })
}

menuButton.addEventListener('click', openSideMenu);

function openSideMenu(){
  closeSideMenuOverlay.classList.add("overlay-active");
  sideMenu.classList.add("side-menu-active");
}

closeSideMenuOverlay.addEventListener("click",closeSideMenu);

function closeSideMenu(){
  sideMenu.classList.remove("side-menu-active");
  closeSideMenuOverlay.classList.remove("overlay-active")
}
times.addEventListener("click",closeSideMenu);

//open hire us modal

hireUsBtn.addEventListener("click", openHireUsModal);
function openHireUsModal(){
  hireUsModal.classList.add("modal-open");
}

//close hire us modal

closeModal.addEventListener("click", closeHireUsModal);
hireUsOverlay.addEventListener("click",closeHireUsModal);

function closeHireUsModal(){
  hireUsModal.classList.remove("modal-open");
}