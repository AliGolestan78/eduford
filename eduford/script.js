const menu = document.querySelector(".nav-links");
const showMenu = document.getElementById("showMenu");
const closeMenu = document.getElementById("closeMenu");

showMenu.addEventListener("click", () => {
  menu.classList.add("showMenu");
});
closeMenu.addEventListener("click", () => {
  menu.classList.remove("showMenu");
});
