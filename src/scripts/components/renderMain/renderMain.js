import { main } from "../../variables";
let counter = 0;
export function renderMain() {
  counter++;
  if (counter === 3) {
    main.style.display = "flex";
  }
}
