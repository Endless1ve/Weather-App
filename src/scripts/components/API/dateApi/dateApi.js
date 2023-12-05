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

  console.log(nextDay);
  return { currDay, nextDay, nextWeekDay };
}

export function getHourlyTime(time) {
  return `${String(
    new Date(time).getHours().length < 2
      ? "0" + new Date(time).getHours()
      : new Date(time).getHours()
  )}:${String("0" + new Date(time).getMinutes())}`;
}
