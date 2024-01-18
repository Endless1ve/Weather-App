import {
  body,
  darkTheme,
  hourlyContainer,
  themeCheckbox,
} from "../../../variables";
import { setDark } from "./setDark";
import { setLight } from "./setLight";

export function toggleTheme() {
  const daily = Array.from(document.querySelectorAll(".dailyCard"));
  if (localStorage.theme) {
    if (localStorage.theme === "dark") {
      themeCheckbox.checked = true;
      setDark(body, "#152028");
      setDark(hourlyContainer, "#44515A");
      setDark(daily, "#44515A");
    } else {
      setLight(body, "#d69e36");
      setLight(hourlyContainer, "#EACA8F");
      setLight(daily, "#EACA8F");
    }
  } else {
    if (darkTheme.matches) {
      themeCheckbox.checked = true;
      setDark(body, "#152028");
      setDark(hourlyContainer, "#44515A");
      setDark(daily, "#44515A");
    }
  }

  themeCheckbox.addEventListener("change", () => {
    if (themeCheckbox.checked) {
      localStorage.theme = "dark";
      setDark(body, "#152028");
      setDark(hourlyContainer, "#44515A");
      setDark(daily, "#44515A");
    } else {
      localStorage.theme = "light";
      setLight(body, "#d69e36");
      setLight(hourlyContainer, "#EACA8F");
      setLight(daily, "#EACA8F");
    }
  });
}
