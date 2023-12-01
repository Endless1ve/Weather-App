const plug = document.querySelector(".plug");
const preloaderBlock = document.querySelector(".plugContent");
const preloader = document.querySelector(".preloader");
const API_KEY = "15000a2461a052e3387841ebd0b2d6e3";
const API_KEY_TWO = "ead21f3ad9a34e47a99120155231511";
const currDate = new Date();
const nextDate = new Date(currDate.getTime() + 24 * 60 * 60 * 1000);
const nextWeekDate = new Date(currDate.getTime() + 7 * 24 * 60 * 60 * 1000);
const currDay = `${currDate.getFullYear()}-${currDate.getMonth() + 1}-${
  String(currDate.getDate()).length < 2
    ? "0" + currDate.getDate()
    : currDate.getDate()
}`;
const nextDay = `${nextDate.getFullYear()}-${nextDate.getMonth() + 1}-${
  String(currDate.getDate()).length < 2
    ? "0" + currDate.getDate()
    : currDate.getDate()
}`;
const nextWeekDay = `${nextWeekDate.getFullYear()}-${
  nextWeekDate.getMonth() + 1
}-${
  String(nextWeekDate.getDate()).length < 2
    ? "0" + nextWeekDate.getDate()
    : nextWeekDate.getDate()
}`;
export {
  plug,
  preloaderBlock,
  preloader,
  API_KEY,
  API_KEY_TWO,
  currDay,
  nextDay,
  nextWeekDay,
};
