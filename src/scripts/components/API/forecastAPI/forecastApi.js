import { handler } from "../../../..";
import { API_KEY, main } from "../../../variables";
import { deletePreloader } from "../../preloader/deletePreloader";
import { removePlug } from "../../removePlug/removePlug";
import { renderDaily } from "../../renderDaily/renderDaily";
import { handlerHourly } from "../../handlerHourly/handlerHourly";
import { handlerWeekly } from "../../handlerWeekly/handlerWeekly";
import { getDaysApi } from "../dateApi/dateApi";

export function getForecasts(latitude, longitude) {
  const { currDay, nextDay, nextWeekDay } = getDaysApi();
  const urls = [
    {
      link: `https://meteostat.p.rapidapi.com/point/hourly?lat=${latitude}&lon=${longitude}&start=${nextDay}&end=${nextWeekDay}`,
      renderFun: handlerWeekly,
      headers: {
        "X-RapidAPI-Key": "afc8a65e30msh735c1f0c55d4ab9p129605jsn48c2e1f0afc1",
        "X-RapidAPI-Host": "meteostat.p.rapidapi.com",
      },
    },
    {
      link: `https://meteostat.p.rapidapi.com/point/hourly?lat=${latitude}&lon=${longitude}&start=${currDay}&end=${nextDay}`,
      renderFun: handlerHourly,
      headers: {
        "X-RapidAPI-Key": "afc8a65e30msh735c1f0c55d4ab9p129605jsn48c2e1f0afc1",
        "X-RapidAPI-Host": "meteostat.p.rapidapi.com",
      },
    },
    {
      link: `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=ru`,
      renderFun: renderDaily,
    },
  ];
  const mockUrls = [
    {
      link: `http://localhost:5000/weekly`,
      renderFun: handlerWeekly,
    },
    {
      link: `http://localhost:5000/hourly`,
      renderFun: handlerHourly,
    },
    {
      link: `http://localhost:5000/daily`,
      renderFun: renderDaily,
    },
  ];

  const responses = mockUrls.map((item) => {
    return fetch(item.link, {
      headers: item.headers,
    })
      .then((res) => res.json())
      .then((data) => ({
        data,
        renderFun: item.renderFun,
      }))
      .catch((err) => console.log(err));
  });

  Promise.all(responses)
    .then((res) => res.forEach((item) => item.renderFun(item.data)))
    .then(() => removePlug())
    .then(() => (main.style.display = "block"))
    .catch((err) => console.log(err))
    .finally(() => deletePreloader());
}
