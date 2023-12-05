import { createHourlyCard } from "../createHourlyCard/createHourlyCard";
const main = document.querySelector(".hourlyContent");
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
        main.insertAdjacentHTML("beforeend", card);
      });
    });
}
