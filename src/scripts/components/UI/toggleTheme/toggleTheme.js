import {
  body,
  darkTheme,
  hourlyContainer,
  themeCheckbox,
} from "../../../variables";
import { setDark } from "./setDark";
import { setLight } from "./setLight";

export function toggleTheme() {
  const daily = document.querySelectorAll(".dailyCard");

  if (localStorage.theme) {
    if (localStorage.theme === "dark") {
      setDark(body, [daily, hourlyContainer]);
      themeCheckbox.checked = true;
    } else {
      setLight(body, [daily, hourlyContainer]);
    }
  } else {
    if (darkTheme.matches) {
      themeCheckbox.checked = true;
      setDark(body, [daily, hourlyContainer]);
    } else {
      document.querySelector(".body").style.backgroundColor = "#d69e36";
      setLight(body, [daily, hourlyContainer]);
    }
  }

  themeCheckbox.addEventListener("change", () => {
    if (themeCheckbox.checked) {
      localStorage.theme = "dark";
      themeCheckbox.checked = true;
      setDark(body, [daily, hourlyContainer]);
    } else {
      localStorage.theme = "light";
      themeCheckbox.checked = false;
      setLight(body, [daily, hourlyContainer]);
    }
  });
}
