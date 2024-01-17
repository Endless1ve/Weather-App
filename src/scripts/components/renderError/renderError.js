import { errorClose, root } from "../../variables";
import { deleteError } from "../deleteError/deleteError";
import { renderCardDom } from "../renderCardDom/renderCardDom";

export function renderError() {
  const error = ` 
  <div class="error">
    <img src="${errorClose}" alt="" class="errorClose"/>
    <p class="errorText">Сервер недоступен</p>
  </div>`;
  renderCardDom(root, error);
  const closeButton = document.querySelector(".errorClose");
  const interval = setInterval(() => {
    deleteError();
  }, 5000);
  closeButton.addEventListener("click", deleteError);
}
