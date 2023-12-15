import { hourlyContainer } from "../../variables";
import { createHourlyCard } from "../createHourlyCard/createHourlyCard";
import { renderCardDom } from "../renderCardDom/renderCardDom";

export function handlerHourly(data) {
  const newData = data.data.filter((item) => {
    return new Date(item.time) > new Date();
  });
  newData.forEach((element) => {
    const card = createHourlyCard(element);
    renderCardDom(hourlyContainer, card);
  });
}
