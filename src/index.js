import "./index.css";

const displayErrorBtn = document.querySelector(".display");
const error = document.querySelector(".error");
const closeError = document.querySelector(".errorClose");
const bar = document.querySelector(".progress");

displayErrorBtn.addEventListener("click", (e) => {
  error.classList.add("errorVisible");
  setTimeout(() => {
    error.classList.remove("errorVisible");
  }, 10000);
});

closeError.addEventListener("click", (e) => {
  error.classList.remove("errorVisible");
});

setInterval(() => {
  const width = bar.style.width;
  console.log(width);
  bar.style.width += width + 10 + "%";
}, 1000);
