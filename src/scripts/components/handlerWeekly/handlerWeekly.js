import { weeklyContainer } from "../../variables";
import { createWeeklyCard } from "../createWeeklyCard/createWeeklyCard";
import { renderCardDom } from "../renderCardDom/renderCardDom";
import { renderMain } from "../renderMain/renderMain";

export default function handlerWeekly(data) {
  const filtered = data.filter((item) => new Date(item.time).getHours() === 11);
  filtered.forEach((element) => {
    const card = createWeeklyCard(element);
    renderCardDom(weeklyContainer, card);
  });
  renderMain();
}
