import { errorClose } from "../../variables";

export function renderError() {
  const error = ` 
  <div class="error">
    <img src="${errorClose}" alt="" class="errorClose"/>
    <p class="errorText">Сервер недоступен</p>
    <div class="errorBar">
      <div class="errorProgress"></div>
      </div>
  </div>`;
  document.querySelector(".root").insertAdjacentHTML("beforeend", error);
}
