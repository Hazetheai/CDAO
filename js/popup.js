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
