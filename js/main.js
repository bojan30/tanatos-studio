const teamMembers = document.querySelectorAll(".team-member");
const teamMembersArray = Array.from(teamMembers);
const dots = document.querySelectorAll('.dots');

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