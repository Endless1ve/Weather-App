import "./index.css";
import { scrollingBlocks } from "./scripts/components/UI/scrollingBlocks/scrollingBlocks";
import { getLocation } from "./scripts/components/getLocation/getLocation";
import { themeCheckbox } from "./scripts/variables";
import initTheme from "./scripts/components/UI/initTheme/initTheme";
import changeTheme from "./scripts/components/UI/changeTheme/changeTheme";

const scrollBlocks = document.querySelectorAll("#scroll");
initTheme();
getLocation();

scrollBlocks.forEach((item) => scrollingBlocks(item));

themeCheckbox.addEventListener("change", () => {
  if (themeCheckbox.checked) {
    changeTheme("dark");
  } else changeTheme("light");
});
