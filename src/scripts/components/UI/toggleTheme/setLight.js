export function setLight(mainBlock, anotherBlocks) {
  mainBlock.style.backgroundColor = "#d69e36";
  anotherBlocks.forEach((item) => {
    if (item.length) {
      item.forEach((newItem) => (newItem.style.backgroundColor = "#EACA8F"));
    } else {
      item.style.backgroundColor = "#EACA8F";
    }
  });
}
