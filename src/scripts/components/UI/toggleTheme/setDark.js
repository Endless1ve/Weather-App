export function setDark(block, color) {
  if (Array.isArray(block)) {
    block.forEach((item) => (item.style.backgroundColor = color));
  } else block.style.backgroundColor = color;
}
