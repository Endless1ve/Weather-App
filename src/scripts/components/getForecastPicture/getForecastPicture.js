import { weatherPics, weatherPicError } from "../../variables";

export function getForecastPicture(id) {
  let hours = new Date().getHours();
  hours = 21;
  let src = "";
  for (let item of weatherPics) {
    if (item.idArr.includes(id)) {
      if ((hours >= 21 || hours <= 4) && "nightPic" in item) {
        src = item.nightPic;
      } else src = item.pic;
      break;
    } else {
      src = weatherPicError;
    }
  }
  return src;
}
