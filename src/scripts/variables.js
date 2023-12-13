// --DOM variables--
const main = document.querySelector(".main");
//plug and preloader
const plug = document.querySelector(".plug");
const preloaderBlock = document.querySelector(".plugContent");
const preloader = document.querySelector(".preloader");
//home forecast elements
const status = document.querySelector(".forecastStatus");
const forecastDegrees = document.querySelector(".forecastDegrees");
const place = document.querySelector(".placeText");
const forecastDate = document.querySelector(".forecastDate");
const forecastPicture = document.querySelector(".forecastImage");
const feelsLikeBlock = document.querySelector(".feelsLike");
const windSpeedBlock = document.querySelector(".windSpeed");
const humidityBlock = document.querySelector(".humidity");
const pressureBlock = document.querySelector(".pressure");
//scroll block
const scrollBlocks = document.querySelectorAll(".scroll");
//hourly card container
const hourlyContainer = document.querySelector(".hourlyContent");
//daily card container
const weeklyContainer = document.querySelector(".dailyContent");
//--Cards variables--
//--API key variables--
const API_KEY = "15000a2461a052e3387841ebd0b2d6e3";
//--image variables--
import cloudy from "../vendor/images/cloudy.svg";
import fog from "../vendor/images/fog.svg";
import lightning from "../vendor/images/lightning.svg";
import rainAndSnow from "../vendor/images/rainAndSnow.svg";
import snow from "../vendor/images/snow.svg";
import sun from "../vendor/images/sun.svg";
import rain from "../vendor/images/rain.svg";
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

export {
  plug,
  preloaderBlock,
  preloader,
  main,
  API_KEY,
  weatherPics,
  status,
  forecastDegrees,
  place,
  forecastDate,
  forecastPicture,
  hourlyContainer,
  weeklyContainer,
  feelsLikeBlock,
  humidityBlock,
  windSpeedBlock,
  pressureBlock,
  scrollBlocks,
};
