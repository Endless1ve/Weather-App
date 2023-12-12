export function deletePreloader() {
  const preloader = document.querySelector(".preloader");
  if (preloader) {
    preloader.remove();
  }
}
