import {
  renderPreloader,
  deletePreloader,
} from "../components/renderPreloader/renderPreloader.js";

import { plug } from "../variables.js";

function getLocationBrowser() {
  navigator.geolocation.getCurrentPosition(sucess, getLocationAPI);
}

function getLocationAPI() {
  fetch("https://geolocation-db.com/json/")
    .then((res) => {
      renderPreloader();
      return res.json();
    })
    .then((data) => data)
    .catch((err) => console.log(err))
    .finally(() => deletePreloader());
}

function sucess() {
  const { latitude, longitude } = arguments[0].coords;
  console.log(latitude, longitude);
}
export { getLocationBrowser };
