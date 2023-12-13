export function scroll(block) {
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
  block.addEventListener("mousedown", startScroll);
  block.addEventListener("mousewheel", (e) => {
    e.preventDefault();
    block.scrollLeft += e.deltaY;
  });
}
