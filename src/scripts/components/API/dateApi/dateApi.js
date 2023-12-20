import { dayArray, monthArray } from "../../../variables";

export function getForecastDay() {
  const date = new Date();
  const weekDay = date.getDay();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const res = `${dayArray[weekDay]} | ${day} ${monthArray[month]} ${year}`;
  return res;
}

export function getWeekDay(data) {
  const weekDay = dayArray[new Date(data).getDay()];
  const day = new Date(data).getDate();
  const month = monthArray[new Date(data).getMonth()];
  return [weekDay, day, month];
}

function getCorrectDay(data) {
  const day = String(data.getDate());
  if (day.length < 2) {
    return "0" + day;
  } else return day;
}

export function getDaysApi() {
  //Нынешняя дата, следующий день, дата через неделю
  const currDate = new Date();
  const nextDate = new Date(currDate.getTime() + 24 * 60 * 60 * 1000);
  const nextWeekDate = new Date(currDate.getTime() + 7 * 24 * 60 * 60 * 1000);
  //Год сегодня, год завтра, год через неделю
  const currDayYear = currDate.getFullYear();
  const nextDayYear = nextDate.getFullYear();
  const nextWeekDayYear = nextWeekDate.getFullYear();
  //месяц сегодня, месяц завтра, месяц через неделю
  const currDayMonth = currDate.getMonth() + 1;
  const nextDayMonth = nextDate.getMonth() + 1;
  const nextWeekDayMonth = nextWeekDate.getMonth() + 1;
  //день сегодня, день завтра, день через неделю
  const currDay = getCorrectDay(currDate);
  const nextDay = getCorrectDay(nextDate);
  const nextWeekDay = getCorrectDay(nextWeekDate);

  const newCurrDate = `${currDayYear}-${currDayMonth}-${currDay}`;
  const newNextDate = `${nextDayYear}-${nextDayMonth}-${nextDay}`;
  const newNextWeekDate = `${nextWeekDayYear}-${nextWeekDayMonth}-${nextWeekDay}`;

  return { newCurrDate, newNextDate, newNextWeekDate };
}

export function getHourlyTime(time) {
  let hours = String(new Date(time).getHours());
  if (hours.length < 2) {
    hours = "0" + hours;
  }
  let minutes = String(new Date(time).getMinutes());
  if (minutes.length < 2) {
    minutes = "0" + minutes;
  }
  return `${hours}:${minutes}`;
}
