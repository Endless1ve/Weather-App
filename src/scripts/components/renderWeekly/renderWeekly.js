import { weeklyContainer } from "../../variables";
import { createWeeklyCard } from "../createWeeklyCard/createWeeklyCard";

export function weeklyHandler(data) {
  data.then((res) => renderWeekly(res.data)).catch((err) => console.log(err));
}

export function renderWeekly(data) {
  const filtered = data.filter((item) => new Date(item.time).getHours() === 11);
  filtered.forEach((element) => {
    const card = createWeeklyCard(element);
    weeklyContainer.insertAdjacentHTML("beforeend", card);
  });
}
