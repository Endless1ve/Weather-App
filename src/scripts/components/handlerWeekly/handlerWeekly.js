import { weeklyContainer } from "../../variables";
import { createWeeklyCard } from "../createWeeklyCard/createWeeklyCard";
import { renderCardDom } from "../renderCardDom/renderCardDom";
import { renderMain } from "../renderMain/renderMain";

export function handlerWeekly(data) {
  const filtered = data.data.filter(
    (item) => new Date(item.time).getHours() === 11
  );
  console.log(filtered);
  filtered.forEach((element) => {
    const card = createWeeklyCard(element);
    renderCardDom(weeklyContainer, card);
  });
  renderMain();
}
