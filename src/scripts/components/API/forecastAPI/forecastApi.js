import { deletePreloader } from "../../preloader/deletePreloader";
import { removePlug } from "../../removePlug/removePlug";
import { handlerDaily } from "../../handlerDaily/handlerDaily";
import { getDaysApi } from "../dateApi/dateApi";
import { renderMain } from "../../renderMain/renderMain";
import { renderError } from "../../renderError/renderError";
import { handlerWeather } from "../../handlerWeather/handlerWeather";
import {
  PRIVATE_KEY_METEOSTAT,
  PRIVATE_KEY_OPENWEATHER,
} from "../../../variables";

export function getForecasts(latitude, longitude) {
  const { newCurrDate, newNextWeekDate } = getDaysApi();
  const urls = [
    {
      link: `https://meteostat.p.rapidapi.com/point/hourly?lat=${latitude}&lon=${longitude}&start=${newCurrDate}&end=${newNextWeekDate}`,
      renderFun: handlerWeather,
      headers: {
        "X-RapidAPI-Key": PRIVATE_KEY_METEOSTAT,
        "X-RapidAPI-Host": "meteostat.p.rapidapi.com",
      },
    },
    {
      link: `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${PRIVATE_KEY_OPENWEATHER}&units=metric&lang=ru`,
      renderFun: handlerDaily,
    },
  ];
  const mockUrls = [
    {
      link: `http://localhost:5000/weather`,
      renderFun: handlerWeather,
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
      }));
  });

  Promise.all(responses)
    .then((res) => res.forEach((item) => item.renderFun(item.data)))
    .then(() => renderMain())
    .catch((err) => {
      console.log(err);
      renderError();
    })
    .finally(() => deletePreloader());
}
