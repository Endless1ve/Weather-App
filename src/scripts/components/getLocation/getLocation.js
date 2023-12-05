import { getForecasts } from "../API/forecastAPI/forecastApi";
import { deletePreloader } from "../preloader/deletePreloader";

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
      console.log(err);
      deletePreloader();
    });
}

function successLocation(position) {
  const { latitude, longitude } = position.coords;
  getForecasts(latitude, longitude);
}
