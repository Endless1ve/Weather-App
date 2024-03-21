import { main } from "../../variables";
import removePlug from "../removePlug/removePlug";

let counter = 0;
export function renderMain() {
  counter++;
  if (counter === 3) {
    main.style.display = "flex";
    removePlug();
  }
}
