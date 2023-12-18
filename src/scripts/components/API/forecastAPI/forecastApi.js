import { renderMain } from "../../../..";
import { API_KEY, main } from "../../../variables";
import { deletePreloader } from "../../preloader/deletePreloader";
import { removePlug } from "../../removePlug/removePlug";
import { renderDaily } from "../../renderDaily/renderDaily";
import { renderHourly } from "../../renderHourly/renderHourly";
import { renderWeekly } from "../../renderWeekly/renderWeekly";
import { getDaysApi } from "../dateApi/dateApi";

export function getForecasts(latitude, longitude) {
  const { currDay, nextDay, nextWeekDay } = getDaysApi();
  const urls = [
    {
      link: `https://meteostat.p.rapidapi.com/point/hourly?lat=${latitude}&lon=${longitude}&start=${nextDay}&end=${nextWeekDay}`,
      funName: renderWeekly,
      headers: {
        "X-RapidAPI-Key": "afc8a65e30msh735c1f0c55d4ab9p129605jsn48c2e1f0afc1",
        "X-RapidAPI-Host": "meteostat.p.rapidapi.com",
      },
    },
    {
      link: `https://meteostat.p.rapidapi.com/point/hourly?lat=${latitude}&lon=${longitude}&start=${currDay}&end=${nextDay}`,
      funName: renderHourly,
      headers: {
        "X-RapidAPI-Key": "afc8a65e30msh735c1f0c55d4ab9p129605jsn48c2e1f0afc1",
        "X-RapidAPI-Host": "meteostat.p.rapidapi.com",
      },
    },
    {
      link: `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=ru`,
      funName: renderDaily,
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

  const responses = urls.map((url) => {
    url.link = fetch(url.link, {
      headers: url.headers,
    }).then((res) => res.json());
    return url;
  });

  Promise.all(responses)
    .then((res) => res.forEach((item) => item.funName(item.link)))
    .catch((err) => {
      console.log(err);
      deletePreloader();
    });
}
