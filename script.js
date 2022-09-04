const menuBtn = document.querySelector(".burger-bars");
const hiddenMenu = document.querySelector(".nav-mobile");
const bodyShade = document.querySelector("body");
const overviewBtn = document.querySelector(".overview-btn");
const structureBtn = document.querySelector(".structure-btn");
const geologyBtn = document.querySelector(".geology-btn");
const overview = document.querySelector(".overview");
const structure = document.querySelector(".internal-structure");
const geology = document.querySelector(".surface-geology");
const overviewBtnDesktop = document.querySelector(".overview-btn-desktop");
const structureBtnDesktop = document.querySelector(".structure-btn-desktop");
const geologyBtnDesktop = document.querySelector(".geology-btn-desktop");

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

// let js = document.querySelectorAll(".mobile-overview-section.overview-btn");
// js.forEach((item) => {
//   item.addEventListener("click", () => {
//     let activeClass = document.querySelector(".active");
//     activeClass.className = activeClass.className.replace("active", "");
//     item.className += "active";
//   });
// });

overviewBtn.addEventListener("click", function () {
  overview.classList.remove("overview-inactive");
  structure.classList.remove("structure-active");
  structure.classList.remove("structure-inactive");
  geology.classList.remove("geology-active");
  geology.classList.remove("geology-inactive");
});
structureBtn.addEventListener("click", function () {
  structure.classList.toggle("structure-active");
  overview.classList.toggle("overview-inactive");
  geology.classList.toggle("geology-inactive");
  geology.classList.remove("geology-active");
});
geologyBtn.addEventListener("click", function () {
  geology.classList.toggle("geology-active");
  geology.classList.remove("geology-inactive");
  structure.classList.remove("structure-active");
  overview.classList.remove("overview-active");
});
