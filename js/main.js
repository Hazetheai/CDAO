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

// Close Menu
const menu = document.querySelector("#navi-toggle");
const navItem = document.querySelectorAll(".navigation__link");
const menuList = document.querySelector(".navigation__nav");

// Hides css hidden links.
function handleMenu() {
  if (menu.checked == true) {
    menuList.classList.remove("hidden");
  } else {
    menuList.classList.add("hidden");
  }
}

//close menu if open and clicked outside <li>
function close() {
  if (menu.checked == true) {
    menu.checked = false;
    handleMenu();
  }
}

menu.addEventListener("click", handleMenu);
navItem.forEach(el =>
  el.addEventListener("click", () => (menu.checked = false))
);
navItem.forEach(el => el.addEventListener("click", handleMenu));
menuList.addEventListener("click", close);
