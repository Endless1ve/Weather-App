import { getDaysApi } from "../API/dateApi/dateApi";
import handlerHourly from "../handlerHourly/handlerHourly";
import handlerWeekly from "../handlerWeekly/handlerWeekly";

export function handlerWeather(data) {
  const { currDay, nextDay } = getDaysApi();
  const hourly = data.data.filter(
    (item) =>
      new Date(item.time).getDate() === currDay ||
      new Date(item.time).getDate() === nextDay
  );
  const weekly = data.data.filter(
    (item) => new Date(item.time).getDate() !== currDay
  );
  handlerHourly(hourly);
  handlerWeekly(weekly);
}
