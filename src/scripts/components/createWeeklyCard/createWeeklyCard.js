import { getWeekDay } from "../API/dateApi/dateApi";
import { getForecastPicture } from "../getForecastPicture/getForecastPicture";

export function createWeeklyCard(data) {
  const weekDay = getWeekDay(data.time);
  const card = `
  <div class="dailyCard">
    <p class="dailyWeekday">${weekDay[0]}</p>
    <p class="dailyDate">${weekDay[1]} ${weekDay[2]}.</p>
    <img src="${getForecastPicture(data.coco)}" alt="" class="cardImage"/>
    <p class="cardDegrees">${Math.round(data.temp)}°С</p>
    <p class="cardSpeed">${data.wspd}km/h</p>
  </div>`;
  return card;
}
