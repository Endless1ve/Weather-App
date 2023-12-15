import { API_KEY, main } from "../../../variables";
import { deletePreloader } from "../../preloader/deletePreloader";
import { removePlug } from "../../removePlug/removePlug";
import { dailyHandler, renderDaily } from "../../renderDaily/renderDaily";
import { hourlyHandler, renderHourly } from "../../renderHourly/renderHourly";
import { renderWeekly, weeklyHandler } from "../../renderWeekly/renderWeekly";
import { getDaysApi } from "../dateApi/dateApi";

export function getForecasts(latitude, longitude) {
  const { currDay, nextDay, nextWeekDay } = getDaysApi();
  const urls = [
    {
      link: `https://meteostat.p.rapidapi.com/point/hourly?lat=${latitude}&lon=${longitude}&start=${nextDay}&end=${nextWeekDay}`,
      funName: weeklyHandler,
      headers: {
        "X-RapidAPI-Key": "afc8a65e30msh735c1f0c55d4ab9p129605jsn48c2e1f0afc1",
        "X-RapidAPI-Host": "meteostat.p.rapidapi.com",
      },
    },
    {
      link: `https://meteostat.p.rapidapi.com/point/hourly?lat=${latitude}&lon=${longitude}&start=${currDay}&end=${nextDay}`,
      funName: hourlyHandler,
      headers: {
        "X-RapidAPI-Key": "afc8a65e30msh735c1f0c55d4ab9p129605jsn48c2e1f0afc1",
        "X-RapidAPI-Host": "meteostat.p.rapidapi.com",
      },
    },
    {
      link: `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=ru`,
      funName: dailyHandler,
    },
  ];
  const mockUrls = [
    {
      link: `http://localhost:5000/weekly`,
      funName: weeklyHandler,
    },
    {
      link: `http://localhost:5000/hourly`,
      funName: hourlyHandler,
    },
    {
      link: `http://localhost:5000/daily`,
      funName: dailyHandler,
    },
  ];

  const responses = mockUrls.map((url) => {
    url.link = fetch(url.link, {
      headers: url.headers,
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
    return url;
  });

  Promise.all(responses)
    .then((res) => res.forEach((item) => item.funName(item.link)))
    .then(() => removePlug())
    .then(() => (main.style.display = "block"))
    .catch((err) => console.log(err))
    .finally(() => deletePreloader());
}
