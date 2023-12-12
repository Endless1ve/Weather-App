import {
  status,
  forecastDegrees,
  place,
  forecastDate,
  forecastPicture,
} from "../../variables";
import { getForecastDay } from "../API/dateApi/dateApi";
import { getForecastPicture } from "../getForecastPicture/getForecastPicture";

export function renderDaily(data) {
  data.then((res) => {
    place.textContent = res.name;
    status.textContent =
      res.weather[0].description[0].toUpperCase() +
      res.weather[0].description.slice(1);
    forecastDegrees.textContent = Math.round(res.main.temp) + `°C`;
    forecastDate.textContent = getForecastDay();
    forecastPicture.src = getForecastPicture(res.weather[0].id);
    return res;
  });
}
