import { weatherPics, weatherPicError } from "../../variables";

export function getForecastPicture(id) {
  let src = "";
  for (let item of weatherPics) {
    if (item.idArr.includes(id)) {
      src = item.pic;
      break;
    } else {
      src = weatherPicError;
    }
  }
  return src;
}
