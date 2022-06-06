const menuOpenBtn = document.querySelector(".icon-menu-toggle");
const navBarRequestBtn = document.querySelector(".nav-request-btn");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".overlay");

menuOpenBtn.addEventListener("click", () => {
  //   navLinks.style.display = "flex";
  navLinks.classList.toggle("nav-links-show");
  menuOpenBtn.classList.toggle("close-menu-icon");
  overlay.classList.toggle("overlay-show");
});
