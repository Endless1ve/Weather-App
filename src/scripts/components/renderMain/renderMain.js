import { main } from "../../variables";
import { toggleTheme } from "../UI/toggleTheme/toggleTheme";
import { removePlug } from "../removePlug/removePlug";
let counter = 0;
export function renderMain() {
  counter++;
  if (counter === 3) {
    toggleTheme();
    removePlug();
    setTimeout(() => {
      main.style.display = "flex";
    }, 0);
  }
}
