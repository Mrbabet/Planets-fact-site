const menuBtn = document.querySelector(".burger-bars");
const hiddenMenu = document.querySelector(".nav-mobile");
const bodyShade = document.querySelector("body");

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

const overview = document.getElementById("div1");
const overviewBtn = document.getElementById("overview");
const overviewBtnColor = document.querySelector(".mercury-btn-color");

overviewBtn.onclick = function () {
  if (overview.style.display !== "none") {
    overview.style.display = "block";
    overviewBtnColor.classList("active");
  } else {
    overview.style.display = "block";
    structure.style.display = "none";
    geology.style.display = "none";
    overviewBtnColor.classList("active");
  }
};
const structure = document.getElementById("div2");
const structureBtn = document.getElementById("structure");
structureBtn.onclick = function () {
  if (structure.style.display !== "none") {
    structure.style.display = "none";
  } else {
    structure.style.display = "block";
    geology.style.display = "none";
    overview.style.display = "none";
  }
};

const geology = document.getElementById("div3");
const geologyBtn = document.getElementById("geology");
geologyBtn.onclick = function () {
  if (geology.style.display !== "none") {
    geology.style.display = "none";
  } else {
    geology.style.display = "block";
    overview.style.display = "none";
    structure.style.display = "none";
  }
};
const overviewDesktop = document.getElementById("div1");
const overviewBtnDesktop = document.getElementById("overview-desktop");
overviewBtnDesktop.onclick = function () {
  if (overviewDesktop.style.display !== "none") {
    overviewDesktop.style.display = "block";
  } else {
    overviewDesktop.style.display = "block";
    structureDesktop.style.display = "none";
    geologyDesktop.style.display = "none";
  }
};
const structureDesktop = document.getElementById("div2");
const structureBtnDesktop = document.getElementById("structure-desktop");
structureBtnDesktop.onclick = function () {
  if (structureDesktop.style.display !== "none") {
    structureDesktop.style.display = "none";
  } else {
    structureDesktop.style.display = "block";

    geologyDesktop.style.display = "none";
    overviewDesktop.style.display = "none";
  }
};

const geologyDesktop = document.getElementById("div3");
const geologyBtnDesktop = document.getElementById("geology-desktop");

geologyBtnDesktop.onclick = function () {
  if (geologyDesktop.style.display !== "none") {
    geologyDesktop.style.display = "none";
    colorGeology.classList.toggle("inactive");
  } else {
    geologyDesktop.style.display = "block";
    overviewDesktop.style.display = "none";
    structureDesktop.style.display = "none";
  }
};
