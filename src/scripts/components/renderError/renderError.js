import { errorClose, root } from "../../variables";
import { deleteError } from "../deleteError/deleteError";
import { renderCardDom } from "../renderCardDom/renderCardDom";

export function renderError() {
  const error = ` 
  <div class="error">
    <img src="${errorClose}" alt="" class="errorClose"/>
    <p class="errorText">Сервер недоступен</p>
    <div class="errorBar">
      <div class="errorProgress"></div>
      </div>
  </div>`;
  renderCardDom(root, error);

  const bar = document.querySelector(".errorProgress");
  const closeButton = document.querySelector(".errorClose");

  let progress = 0;
  const increment = 100 / ((10 * 1000) / 50);

  const interval = setInterval(() => {
    progress += increment;
    bar.style.width = progress + "%";
    if (progress >= 106 || !document.querySelector(".error")) {
      clearInterval(interval);
      if (closeButton) {
        closeButton.removeEventListener("click", deleteError);
      }
      deleteError();
    }
  }, 50);

  closeButton.addEventListener("click", deleteError);
}
