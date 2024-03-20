import "./index.css";
import changeTheme from "./scripts/components/UI/changeTheme/changeTheme";
import initTheme from "./scripts/components/UI/initTheme/initTheme";
import { scrollingBlocks } from "./scripts/components/UI/scrollingBlocks/scrollingBlocks";
import { getLocation } from "./scripts/components/getLocation/getLocation";
import { themeCheckbox } from "./scripts/variables";

initTheme();
getLocation();
const scrollBlocks = document.querySelectorAll("#scroll");
scrollBlocks.forEach((item) => scrollingBlocks(item));

themeCheckbox.addEventListener("change", () => {
  if (themeCheckbox.checked) {
    changeTheme("dark");
  } else changeTheme("light");
});
