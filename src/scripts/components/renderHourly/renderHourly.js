import { renderMain } from "../../..";
import { hourlyContainer } from "../../variables";
import { createHourlyCard } from "../createHourlyCard/createHourlyCard";
export function renderHourly(data) {
  data
    .then((data) => data.data)
    .then((data) => {
      const newData = data.filter((item) => {
        return new Date(item.time) > new Date();
      });
      return newData;
    })
    .then((res) => {
      res.forEach((element) => {
        const card = createHourlyCard(element);
        hourlyContainer.insertAdjacentHTML("beforeend", card);
      });
    })
    .then(() => renderMain());
}
