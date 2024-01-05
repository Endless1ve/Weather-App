import { getForecasts } from "../API/forecastAPI/forecastApi";
import { deletePreloader } from "../preloader/deletePreloader";
import { renderError } from "../renderError/renderError";

export function getLocation() {
  navigator.geolocation.getCurrentPosition(successLocation, geolocationAPI);
}
function geolocationAPI() {
  fetch("https://geolocation-db.com/json/")
    .then((data) => data.json())
    .then((res) => {
      const { latitude, longitude } = res;
      getForecasts(latitude, longitude);
    })
    .catch((err) => {
      deletePreloader();
      renderError();
    });
}

function successLocation(position) {
  const { latitude, longitude } = position.coords;
  getForecasts(latitude, longitude);
}
