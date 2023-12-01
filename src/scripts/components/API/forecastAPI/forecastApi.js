import { API_KEY, currDay, nextDay, nextWeekDay } from "../../../variables";
import { deletePreloader } from "../../preloader/deletePreloader";
import { removePlug } from "../../removePlug/removePlug";

export function getForecasts(latitude, longitude) {
  const urls = [
    {
      link: `https://meteostat.p.rapidapi.com/point/hourly?lat=${latitude}&lon=${longitude}&start=${currDay}&end=${nextDay}`,
      funName: renderWeekly,
      headers: {
        "X-RapidAPI-Key": "afc8a65e30msh735c1f0c55d4ab9p129605jsn48c2e1f0afc1",
        "X-RapidAPI-Host": "meteostat.p.rapidapi.com",
      },
    },
    {
      link: `https://meteostat.p.rapidapi.com/point/hourly?lat=${latitude}&lon=${longitude}&start=${currDay}&end=${nextWeekDay}`,
      funName: renderHourly,
      headers: {
        "X-RapidAPI-Key": "afc8a65e30msh735c1f0c55d4ab9p129605jsn48c2e1f0afc1",
        "X-RapidAPI-Host": "meteostat.p.rapidapi.com",
      },
    },
    {
      link: `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&lang=ru`,
      funName: renderHourly,
    },
  ];

  const mockUrls = [
    {
      link: `http://localhost:5000/weekly`,
      funName: renderWeekly,
    },
    {
      link: `http://localhost:5000/hourly`,
      funName: renderHourly,
    },
    {
      link: `http://localhost:5000/daily`,
      funName: renderDaily,
    },
  ];

  const responses = mockUrls.map((url) => {
    url.link = fetch(url.link, {
      headers: url.headers,
    }).then((res) => res.json());
    return url;
  });
  Promise.all(responses)
    .then((res) => res.forEach((item) => item.funName(item.link)))
    .then(() => removePlug())
    .catch((err) => console.log(err))
    .finally(() => deletePreloader());
}

export function renderWeekly(data) {
  data.then((data) => console.log(JSON.stringify(data)));
}

export function renderHourly(data) {
  data.then((data) => console.log(JSON.stringify(data)));
}

export function renderDaily(data) {

}
