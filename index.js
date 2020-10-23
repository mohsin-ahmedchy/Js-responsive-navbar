const navMenu = document.querySelector(".nav");
const toggleMenu = document.querySelector(".header__toggle");
const closeMenu = document.querySelector(".nav__close");

toggleMenu.addEventListener("click",()=>{
    navMenu.classList.toggle("show");
})

closeMenu.addEventListener("click",()=>{
    navMenu.classList.remove("show");
})

/*active and remove menu*/
const navLink = document.querySelectorAll(".nav__link");
const navSocial = document.querySelectorAll(".nav__social-icon");

function linkAction(){
    navLink.forEach(x=> x.classList.remove("active"));
    navSocial.forEach(x=> x.classList.remove("active"));
    this.classList.add("active");
    navMenu.classList.remove("show");
}
navLink.forEach(x=>x.addEventListener("click",linkAction));
navSocial.forEach(x=>x.addEventListener("click",linkAction));