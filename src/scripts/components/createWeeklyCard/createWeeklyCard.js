import { getWeekDate, getWeekDay } from "../API/dateApi/dateApi";
import { getForecastPicture } from "../getForecastPicture/getForecastPicture";

export function createWeeklyCard(data) {
  const card = `
  <div class="dailyCard">
    <p class="dailyWeekday">${getWeekDay(data.time)}</p>
    <p class="dailyDate">${getWeekDate(data.time)}.</p>
    <img src="${getForecastPicture(data.coco)}" alt="" class="cardImage"/>
    <p class="cardDegrees">${Math.round(data.temp)}°С</p>
    <p class="cardSpeed">${data.wspd}km/h</p>
  </div>`;
  return card;
}
