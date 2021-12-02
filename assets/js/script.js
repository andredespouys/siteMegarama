const menuBtn = document.querySelector(".menu-btn");
const menuMobile = document.querySelector(".navbar-nav-top");

let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuMobile.classList.add("showMenu");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuMobile.classList.remove("showMenu");
    menuOpen = false;
  }
});
