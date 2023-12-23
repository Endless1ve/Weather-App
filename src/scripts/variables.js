// --API variables--
const OPENWEATHER_API_KEY = OPENWEATHER_API_KEY;
const METEOSTAT_API_KEY = METEOSTAT_API_KEY;
// --DOM variables--
const main = document.querySelector(".main");
//plug and preloader
const plug = document.querySelector(".plug");
const preloaderBlock = document.querySelector(".plugContent");
const preloader = document.querySelector(".preloader");
//home forecast elements
const homeForecastBlock = document.querySelector(".homeForecast");
const homePlaceBlock = document.querySelector(".placeContent");
const feelsLike = document.querySelector(".feelsLike");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".windSpeed");
const pressure = document.querySelector(".pressure");
//hourly card container
const hourlyContainer = document.querySelector(".hourlyContent");
//daily card container
const weeklyContainer = document.querySelector(".dailyContent");
//--image variables--
import cloudy from "../vendor/images/cloudy.svg";
import fog from "../vendor/images/fog.svg";
import lightning from "../vendor/images/lightning.svg";
import rainAndSnow from "../vendor/images/rainAndSnow.svg";
import snow from "../vendor/images/snow.svg";
import sun from "../vendor/images/sun.svg";
import rain from "../vendor/images/rain.svg";
import weatherPicError from "../vendor/images/weather-error.svg";
import errorClose from "../vendor/images/close.svg";
//--Image forecast variables--
const weatherPics = [
  { pic: cloudy, idArr: [3, 4, 801, 802, 803, 804] },
  {
    pic: snow,
    idArr: [14, 15, 16, 21, 22, 600, 601, 602, 611, 612, 613, 620, 621, 622],
  },
  { pic: fog, idArr: [5, 6, 701, 711, 721, 731, 741, 751, 761, 762, 771, 781] },
  { pic: sun, idArr: [800, 1, 2] },
  {
    pic: rain,
    idArr: [
      7, 8, 9, 12, 13, 17, 18, 19, 20, 300, 301, 302, 310, 311, 312, 313, 314,
      321, 500, 501, 502, 503, 504, 511, 520, 521, 522, 531,
    ],
  },
  { pic: rainAndSnow, idArr: [615, 616, 10, 11] },
  {
    pic: lightning,
    idArr: [
      23, 24, 25, 26, 27, 200, 201, 202, 210, 211, 212, 221, 230, 231, 232,
    ],
  },
];
//date arrays
const dayArray = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
const monthArray = [
  "Янв",
  "Фев",
  "Мар",
  "Апр",
  "Май",
  "Июн",
  "Июл",
  "Авг",
  "Сен",
  "Окт",
  "Ноя",
  "Дек",
];

export {
  plug,
  preloaderBlock,
  preloader,
  main,
  weatherPics,
  weatherPicError,
  hourlyContainer,
  weeklyContainer,
  dayArray,
  monthArray,
  homeForecastBlock,
  homePlaceBlock,
  feelsLike,
  humidity,
  windSpeed,
  pressure,
  OPENWEATHER_API_KEY,
  METEOSTAT_API_KEY,
  errorClose,
};
