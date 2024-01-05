export function deleteError() {
  const error = document.querySelector(".error");
  if (error) {
    error.remove();
  }
}
