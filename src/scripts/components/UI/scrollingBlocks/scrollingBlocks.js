export function scrollingBlocks(block) {
  let isScrolling = false;
  let startX, scrollLeft;

  function startScroll(event) {
    isScrolling = true;
    startX = event.clientX;
    scrollLeft = block.scrollLeft;
    block.addEventListener("mousemove", handleMouseMove);
    block.addEventListener("mouseup", stopScroll);
  }

  function handleMouseMove(event) {
    if (!isScrolling) return;
    const x = event.clientX - startX;
    block.scrollLeft = scrollLeft - x;
  }

  function stopScroll() {
    isScrolling = false;
    block.removeEventListener("mousemove", handleMouseMove);
    block.removeEventListener("mouseup", stopScroll);
  }

  function wheelScroll(event) {
    event.preventDefault();
    block.scrollLeft += event.deltaY;
  }
  block.addEventListener("mousedown", startScroll);
  block.addEventListener("mousewheel", wheelScroll);
}