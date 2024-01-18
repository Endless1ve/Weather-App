import { main } from "../../variables";
import { toggleTheme } from "../UI/toggleTheme/toggleTheme";
let counter = 0;
export function renderMain() {
  counter++;
  if (counter === 3) {
    toggleTheme();
    const timer = setTimeout(() => {
      main.style.display = "flex";
    }, 0);
  }
}
