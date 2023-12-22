import { homeForecastBlock } from "../../variables";
import { getForecastDay } from "../API/dateApi/dateApi";
import { getForecastPicture } from "../getForecastPicture/getForecastPicture";
import { renderCardDom } from "../renderCardDom/renderCardDom";

export function renderDailyForecast(data) {
  const forecastContent = `<div class="forecastTexts">
      <p class="forecastStatus">${data.weather[0].description[0].toUpperCase()}${data.weather[0].description.slice(
    1
  )}</p>
      <p class="forecastDegrees">${Math.round(data.main.temp) + "°C"}</p>
      <p class="forecastDate">${getForecastDay()}</p>
    </div>
    <img src='${getForecastPicture(
      data.weather[0].id
    )}' alt="Картинка погоды" class="forecastImage" />`;
  renderCardDom(homeForecastBlock, forecastContent);
}
