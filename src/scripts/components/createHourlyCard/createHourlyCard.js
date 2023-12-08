import { getHourlyTime } from "../API/dateApi/dateApi";
import { getForecastPicture } from "../getForecastPicture/getForecastPicture";

export function createHourlyCard(data) {
  const time = getHourlyTime(data.time);
  const card = `
    <div class="hourlyCard">
    <img src="${getForecastPicture(data.coco)}" alt="" class="cardImage">
    <p class="cardDegrees">${Math.round(data.temp)}°С</p>
    <p class="cardSpeed">${data.wspd}km/h</p>
    <p class="hourlyTime">${time}</p>
    </div>`;
  return card;
}
