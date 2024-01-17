export function setDark(mainBlock, anotherBlocks) {
  mainBlock.style.backgroundColor = "#152028";
  anotherBlocks.forEach((item) => {
    if (item.length) {
      item.forEach((newItem) => (newItem.style.backgroundColor = "#44515A"));
    } else {
      item.style.backgroundColor = "#44515A";
    }
  });
  localStorage.clear();
}
