import { darkTheme, themeCheckbox } from "../../../variables";
import changeTheme from "../changeTheme/changeTheme";

export default function initTheme() {
  const theme = localStorage.getItem("theme");
  if (theme) {
    changeTheme(theme);
    if (theme === "dark") {
      themeCheckbox.checked = true;
    }
  } else {
    if (darkTheme) {
      themeCheckbox.checked = true;
    }
  }
}
