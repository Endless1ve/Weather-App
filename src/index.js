import "./index.css";
import { scroll } from "./scripts/components/UI/scroll/scroll";
import { getLocation } from "./scripts/components/getLocation/getLocation";
import { removePlug } from "./scripts/components/removePlug/removePlug";
import { scrollBlocks } from "./scripts/variables";
getLocation();
scrollBlocks.forEach((item) => scroll(item));
let counter = 0;
export function renderMain() {
  counter++;
  if (counter === 3) {
    removePlug();
    document.querySelector(".main").style.display = "flex";
  }
}
