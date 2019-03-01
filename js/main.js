//Disable Form Button
const form = document.querySelector(".form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const size = document.querySelector(".form__radio-input");
const nextBtn = document.querySelector("#form-btn");

const btnColor = () => {
  if (name.value | (email.value !== "")) {
    nextBtn.classList.remove("disabled");
    nextBtn.disabled = false;
  } else nextBtn.classList.add("disabled");
  nextBtn.disabled = true;
};

name.addEventListener("focus", btnColor);
email.addEventListener("focus", btnColor);

//if url contains #popup --> remove popup
const pop = document.querySelector(".popup");

function rmPop(e) {
  const popCont = document.querySelector(".popup__content");
  let uurl = window.location.href;
  if (uurl.indexOf("#popup") > -1 && !popCont.contains(e.target)) {
    window.location.href = uurl.toString().replace(/popup/gi, "");
  }
}

pop.addEventListener("click", rmPop);
pop.addEventListener("touchmove", rmPop);

// Close Menu
const menu = document.querySelector("#navi-toggle");
const navItem = document.querySelectorAll(".navigation__link");
const menuList = document.querySelector(".navigation__nav");

function handleMenu() {
  if (menu.checked == false) {
    console.log("should add class");
    menuList.classList.add("hidden");
  } else if (menu.checked == true) {
    menuList.classList.remove("hidden");
  }
}

function handleMenu() {
  if (menu.checked == true) {
    console.log("should remove class");
    menuList.classList.remove("hidden");
  } else {
    console.log("should add class");
    menuList.classList.add("hidden");
  }
}

menu.addEventListener("click", handleMenu);
navItem.forEach(el =>
  el.addEventListener("click", () => (menu.checked = false))
);
navItem.forEach(el => el.addEventListener("click", handleMenu));

// menuList.addEventListener("click", handleMenu);

// menu.addEventListener("click", () => menuList.classList.toggle("hidden"));
