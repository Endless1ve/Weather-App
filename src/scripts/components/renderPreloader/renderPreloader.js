import { preloaderBlock, preloader } from "../../variables.js";

export function renderPreloader() {
  preloaderBlock.insertAdjacentHTML("beforeend", preloader);
}

export function deletePreloader() {
  document.querySelector('.preloader').remove();
}
