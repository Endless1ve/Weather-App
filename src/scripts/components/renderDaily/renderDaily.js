import {
  status,
  forecastDegrees,
  place,
  forecastDate,
  forecastPicture,
  feelsLikeBlock,
  humidityBlock,
  windSpeedBlock,
  pressureBlock,
} from "../../variables";
import { getForecastDay } from "../API/dateApi/dateApi";
import { getForecastPicture } from "../getForecastPicture/getForecastPicture";
import { renderMain } from "../renderMain/renderMain";

export function renderDaily(data) {
  place.textContent = data.name;
  status.textContent =
    data.weather[0].description[0].toUpperCase() +
    data.weather[0].description.slice(1);
  forecastDegrees.textContent = Math.round(data.main.temp) + `°C`;
  forecastDate.textContent = getForecastDay();
  forecastPicture.src = getForecastPicture(data.weather[0].id);
  feelsLikeBlock.textContent = Math.round(data.main.feels_like);
  humidityBlock.textContent = data.main.humidity + `%`;
  windSpeedBlock.textContent = Math.round(data.wind.speed) + "км/ч";
  pressureBlock.textContent = data.main.pressure;
  console.log(data);
  renderMain();
}
