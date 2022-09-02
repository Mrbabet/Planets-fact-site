const menuBtn = document.querySelector(".burger-bars");
const hiddenMenu = document.querySelector(".nav-mobile");
const bodyShade = document.querySelector("body");
const overviewBtn = document.querySelector(".overview-btn");
const structureBtn = document.querySelector(".structure-btn");
const geologyBtn = document.querySelector(".geology-btn");
const overview = document.querySelector(".overview");
const structure = document.querySelector(".internal-structure");
const geology = document.querySelector(".surface-geology");

let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("active");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("active");
    menuOpen = false;
  }
});

menuBtn.addEventListener("click", function () {
  hiddenMenu.classList.toggle("active");
  bodyShade.classList.toggle("active");
});

overviewBtn.addEventListener("click", function () {
  overview.classList.toggle("active");
});
structureBtn.addEventListener("click", function () {
  structure.classList.toggle("active");
});
geologyBtn.addEventListener("click", function () {
  geology.classList.toggle("active");
});
