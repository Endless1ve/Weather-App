import { hourlyContainer } from "../../variables";
import { createHourlyCard } from "../createHourlyCard/createHourlyCard";
import { renderCardDom } from "../renderCardDom/renderCardDom";
import { renderMain } from "../renderMain/renderMain";

export default function handlerHourly(data) {
  const newData = data.filter((item) => {
    return new Date(item.time) > new Date();
  });
  newData.forEach((element) => {
    const card = createHourlyCard(element);
    renderCardDom(hourlyContainer, card);
  });
  renderMain();
}
