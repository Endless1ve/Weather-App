import { homePlaceBlock } from "../../variables";
import { renderCardDom } from "../renderCardDom/renderCardDom";

export function renderPlace(data) {
  const place = `<p class="placeText">${data.name}</p>`;
  renderCardDom(homePlaceBlock, place);
}
