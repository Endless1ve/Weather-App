import { weeklyContainer } from "../../variables";
import { createWeeklyCard } from "../createWeeklyCard/createWeeklyCard";

export function renderWeekly(data) {
  data
    .then((data) => data.data)
    .then((res) => res.filter((item) => new Date(item.time).getHours() === 11))
    .then((res) =>
      res.forEach((element) => {
        const card = createWeeklyCard(element);
        weeklyContainer.insertAdjacentHTML("beforeend", card);
      })
    );
}
