<<<<<<< HEAD
let counter = 0;
export function renderMain() {
  counter++;
  if (counter === 3) {
    removePlug();
    document.querySelector(".main").style.display = "flex";
  }
=======
import { main } from "../../variables";

export function renderMain() {
  main.style.display = "flex";
>>>>>>> 6af7b8668fd19ddf7b1679a22234e87ae0491fcf
}
