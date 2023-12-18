import { renderMain } from "../../..";
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

export function renderDaily(data) {
<<<<<<< HEAD
  data
    .then((res) => {
      place.textContent = res.name;
      status.textContent =
        res.weather[0].description[0].toUpperCase() +
        res.weather[0].description.slice(1);
      forecastDegrees.textContent = Math.round(res.main.temp) + `°C`;
      forecastDate.textContent = getForecastDay();
      forecastPicture.src = getForecastPicture(res.weather[0].id);
      feelsLikeBlock.textContent = Math.round(res.main.feels_like) + `°C`;
      humidityBlock.textContent = Math.round(res.main.humidity) + `%`;
      windSpeedBlock.textContent = Math.round(res.wind.speed) + `км/ч`;
      pressureBlock.textContent = res.main.pressure;
    })
    .then(() => renderMain());
=======
  place.textContent = data.name;
  status.textContent =
    data.weather[0].description[0].toUpperCase() +
    data.weather[0].description.slice(1);
  forecastDegrees.textContent = Math.round(data.main.temp) + `°C`;
  forecastDate.textContent = getForecastDay();
  forecastPicture.src = getForecastPicture(data.weather[0].id);
>>>>>>> 6af7b8668fd19ddf7b1679a22234e87ae0491fcf
}
