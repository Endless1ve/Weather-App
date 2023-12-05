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
  console.log(card);
  return card;
}

// <img src="${getForecastPicture(data.coco)}" alt="" class="cardImage">

// `<div class="hourlyCard">
//   <div class='cardImage'></div>
//   <p class="cardDegrees"></p>
//   <p class="cardSpeed"></p>
//   <p class="hourlyTime"></p>
//   </div>`;

//   const card = `
//   <div class="hourlyCard">
//   <div class='cardImage' style="background-image: url('${getForecastPicture(
//     data.coco
//   )}');"></div>
//   <p class="cardDegrees">${Math.round(data.temp)}°С</p>
//   <p class="cardSpeed">${data.wspd}km/h</p>
//   <p class="hourlyTime">${time}</p>
//   </div>`;
