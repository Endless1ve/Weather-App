import { darkTheme, plug } from "../../../variables";
import { setDark } from "./setDark";
import { setLight } from "./setLight";

export function plugTheme() {
  if (localStorage.theme) {
    if (localStorage.theme === "dark") {
      setDark(plug);
    } else {
      setLight(plug);
    }
  } else {
    if (darkTheme.matches) {
      setDark(plug);
    } else {
      setLight(plug);
    }
  }
}
