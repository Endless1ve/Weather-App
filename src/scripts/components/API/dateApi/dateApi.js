export function getForecastDay() {
  const date = new Date();
  let weekDay = date.getDay();
  const day = date.getDate();
  let month = date.getMonth();
  const year = date.getFullYear();
  switch (weekDay) {
    case 0:
      weekDay = "Вс";
      break;
    case 1:
      weekDay = "Пн";
      break;
    case 2:
      weekDay = "Вт";
      break;
    case 3:
      weekDay = "Ср";
      break;
    case 4:
      weekDay = "Чт";
      break;
    case 5:
      weekDay = "Пт";
      break;
    case 6:
      weekDay = "Сб";
      break;
  }
  switch (month) {
    case 0:
      month = "Янв";
      break;
    case 1:
      month = "Фев";
      break;
    case 2:
      month = "Мар";
      break;
    case 3:
      month = "Апр";
      break;
    case 4:
      month = "Май";
      break;
    case 5:
      month = "Июн";
      break;
    case 6:
      month = "Июл";
      break;
    case 7:
      month = "Авг";
      break;
    case 8:
      month = "Сен";
      break;
    case 9:
      month = "Окт";
      break;
    case 10:
      month = "Ноя";
      break;
    case 11:
      month = "Дек";
      break;
  }
  const res = `${weekDay} | ${day} ${month} ${year}`;
  return res;
}

export function getWeekDay(data) {
  let weekDay = new Date(data).getDay();
  switch (weekDay) {
    case 0:
      weekDay = "ВС";
      break;
    case 1:
      weekDay = "ПН";
      break;
    case 2:
      weekDay = "ВТ";
      break;
    case 3:
      weekDay = "СР";
      break;
    case 4:
      weekDay = "ЧТ";
      break;
    case 5:
      weekDay = "ПТ";
      break;
    case 6:
      weekDay = "СБ";
      break;
  }
  return weekDay;
}

export function getWeekDate(data) {
  const day = new Date(data).getDate();
  let month = new Date(data).getMonth();
  switch (month) {
    case 0:
      month = "янв";
      break;
    case 1:
      month = "фев";
      break;
    case 2:
      month = "мар";
      break;
    case 3:
      month = "апр";
      break;
    case 4:
      month = "май";
      break;
    case 5:
      month = "июн";
      break;
    case 6:
      month = "июл";
      break;
    case 7:
      month = "авг";
      break;
    case 8:
      month = "сен";
      break;
    case 9:
      month = "окт";
      break;
    case 10:
      month = "ноя";
      break;
    case 11:
      month = "дек";
      break;
  }
  const res = `${day} ${month}`;
  return res;
}

export function getDaysApi() {
  const currDate = new Date();
  const nextDate = new Date(currDate.getTime() + 24 * 60 * 60 * 1000);
  const nextWeekDate = new Date(currDate.getTime() + 7 * 24 * 60 * 60 * 1000);

  const currDay = `${currDate.getFullYear()}-${currDate.getMonth() + 1}-${
    String(currDate.getDate()).length < 2
      ? "0" + currDate.getDate()
      : currDate.getDate()
  }`;

  const nextDay = `${nextDate.getFullYear()}-${nextDate.getMonth() + 1}-${
    String(nextDate.getDate()).length < 2
      ? "0" + nextDate.getDate()
      : nextDate.getDate()
  }`;

  const nextWeekDay = `${nextWeekDate.getFullYear()}-${
    nextWeekDate.getMonth() + 1
  }-${
    String(nextWeekDate.getDate()).length < 2
      ? "0" + nextWeekDate.getDate()
      : nextWeekDate.getDate()
  }`;

  return { currDay, nextDay, nextWeekDay };
}

export function getHourlyTime(time) {
  return `${String(
    new Date(time).getHours().length < 2
      ? "0" + new Date(time).getHours()
      : new Date(time).getHours()
  )}:${String("0" + new Date(time).getMinutes())}`;
}
