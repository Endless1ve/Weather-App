import changeTheme from "../toggleTheme/toggleTheme";

export default function initTheme() {
  const theme = localStorage.getItem("theme");
  if (theme) {
    changeTheme(theme);
    if (theme === "dark") {
      themeCheckbox.checked = true;
    }
  }
}
