import { main } from "../../variables";
let counter = 0;
export function renderMain() {
  counter++;
  if (counter === 3) {
    const timer = setTimeout(() => {
      main.style.display = "flex";
    }, 0);
  }
}
