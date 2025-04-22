function scrollToElement( elementSelected, instance = 0){
  const element = document.querySelectorAll(elementSelected);
  
  if(element.length > instance){
    element[instance].scrollIntoView({behavior: 'smooth'});
  }  
}

const linkToProject = document.getElementById("proj");
const linkToContact = document.getElementById("cont");

linkToProject.addEventListener('click', ()=>{
    scrollToElement('.header');
})

linkToContact.addEventListener('click', ()=>{
    scrollToElement('.card');
})