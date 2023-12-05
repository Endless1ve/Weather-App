import { weatherPics } from "../../variables";

export function getForecastPicture(id) {
  let src = "";
  weatherPics.forEach((item) => {
    if (item.idArr.includes(id)) {
      src = item.pic;
    }
  });
  return src;
}
