import { dayArray, monthArray } from "../../../variables";

export function getForecastDay() {
  const date = new Date();
  const weekDay = date.getDay();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${dayArray[weekDay]} | ${day} ${monthArray[month]} ${year}`;
}

export function getWeekDay(data) {
  const weekDay = dayArray[new Date(data).getDay()];
  const day = new Date(data).getDate();
  const month = monthArray[new Date(data).getMonth()];
  return [weekDay, day, month];
}

function getCorrectData(data) {
  if (String(data).length < 2) {
    data = "0" + data;
  }
  return data;
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
  const currDay = getCorrectData(currDate.getDate());
  const nextDay = getCorrectData(nextDate.getDate());
  const nextWeekDay = getCorrectData(nextWeekDate.getDate());

  const newCurrDate = `${currDayYear}-${currDayMonth}-${currDay}`;
  const newNextDate = `${nextDayYear}-${nextDayMonth}-${nextDay}`;
  const newNextWeekDate = `${nextWeekDayYear}-${nextWeekDayMonth}-${nextWeekDay}`;

  return { newCurrDate, newNextDate, newNextWeekDate };
}

export function getHourlyTime(time) {
  const hours = getCorrectData(new Date(time).getHours());
  const minutes = getCorrectData(new Date(time).getMinutes());
  return `${hours}:${minutes}`;
}
