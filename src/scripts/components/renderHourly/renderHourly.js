import { hourlyContainer } from "../../variables";
import { createHourlyCard } from "../createHourlyCard/createHourlyCard";

export function hourlyHandler(data) {
  data.then((res) => renderHourly(res.data)).catch((err) => console.log(err));
}

export function renderHourly(data) {
  const newData = data.filter((item) => {
    return new Date(item.time) > new Date();
  });
  newData.forEach((element) => {
    const card = createHourlyCard(element);
    hourlyContainer.insertAdjacentHTML("beforeend", card);
  });
}
