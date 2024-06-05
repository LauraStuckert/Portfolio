/* JavaScript der sætter klassen "active" på    */
/* <div class="hamburger"> og                   */
/* <ul class="nav_menu">                        */
// Step 8
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

/* JavaScript der sørger for at burger menuen   */
/* lukker når man klikker på et link            */
// Step 9
const navLink = document.querySelectorAll(".nav_link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}