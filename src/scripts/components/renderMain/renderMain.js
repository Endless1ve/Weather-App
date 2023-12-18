let counter = 0;
export function renderMain() {
  counter++;
  if (counter === 3) {
    removePlug();
    document.querySelector(".main").style.display = "flex";
  }
}
