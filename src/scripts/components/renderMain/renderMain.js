import { main } from "../../variables";
import { removePlug } from "../removePlug/removePlug";
let counter = 0;
export function renderMain() {
  counter++;
  if (counter === 3) {
    removePlug();
    setTimeout(() => {
      main.style.display = "flex";
    }, 0);
  }
}
