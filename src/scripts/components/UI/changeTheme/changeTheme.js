import { root } from "../../../variables";

export default function changeTheme(theme) {
  root.className = "";
  root.classList.add(`theme-${theme}`);
  localStorage.setItem("theme", theme);
}
