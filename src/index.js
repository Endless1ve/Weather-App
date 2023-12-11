import "./index.css";

const displayErrorBtn = document.querySelector(".display");
const error = document.querySelector(".error");
const closeErrorBtn = document.querySelector(".errorClose");
const bar = document.querySelector(".errorProgress");
function displayError() {
  error.classList.add("errorVisible");
  let progress = 0;
  const increment = 100 / ((10 * 1000) / 50);
  const interval = setInterval(() => {
    progress += increment;
    bar.style.width = progress + "%";
    if (progress >= 106 || !error.classList.contains("errorVisible")) {
      clearInterval(interval);
      closeError();
    }
  }, 50);
  closeErrorBtn.addEventListener("click", closeError);
}

function closeError() {
  error.classList.remove("errorVisible");
  closeErrorBtn.removeEventListener("click", closeError);
  setTimeout(() => {
    bar.style.width = "0";
  }, 500);
}

displayErrorBtn.addEventListener("click", displayError);
