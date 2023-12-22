import { feelsLike, humidity, pressure, windSpeed } from "../../variables";

export function renderDetails(data) {
  feelsLike.textContent = Math.round(data.main.feels_like) + "°C";
  humidity.textContent = data.main.humidity + "%";
  windSpeed.textContent = Math.round(data.wind.speed) + " км/ч";
  pressure.textContent = data.main.pressure;
}
