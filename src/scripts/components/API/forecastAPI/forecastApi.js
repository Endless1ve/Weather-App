import { FIRST_KEY, SECOND_KEY } from "../../../variables";
import { deletePreloader } from "../../preloader/deletePreloader";
import { removePlug } from "../../removePlug/removePlug";
import { handlerDaily } from "../../handlerDaily/handlerDaily";
import { handlerHourly } from "../../handlerHourly/handlerHourly";
import { handlerWeekly } from "../../handlerWeekly/handlerWeekly";
import { getDaysApi } from "../dateApi/dateApi";
import { renderMain } from "../../renderMain/renderMain";

export function getForecasts(latitude, longitude) {
  const { newCurrDate, newNextDate, newNextWeekDate } = getDaysApi();
  const urls = [
    {
      link: `https://meteostat.p.rapidapi.com/point/hourly?lat=${latitude}&lon=${longitude}&start=${newNextDate}&end=${newNextWeekDate}`,
      renderFun: handlerWeekly,
      headers: {
        "X-RapidAPI-Key": SECOND_KEY,
        "X-RapidAPI-Host": "meteostat.p.rapidapi.com",
      },
    },
    {
      link: `https://meteostat.p.rapidapi.com/point/hourly?lat=${latitude}&lon=${longitude}&start=${newCurrDate}&end=${newNextDate}`,
      renderFun: handlerHourly,
      headers: {
        "X-RapidAPI-Key": SECOND_KEY,
        "X-RapidAPI-Host": "meteostat.p.rapidapi.com",
      },
    },
    {
      link: `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${FIRST_KEY}&units=metric&lang=ru`,
      renderFun: handlerDaily,
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
      renderFun: handlerDaily,
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
    .then(() => renderMain())
    .catch((err) => console.log(err))
    .finally(() => deletePreloader());
}
