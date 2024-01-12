export function scrollingBlocks(block) {
  let isScrolling = false;
  let startX, scrollLeft;

  function startScroll(event) {
    isScrolling = true;
    startX = event.clientX;
    scrollLeft = block.scrollLeft;
    block.addEventListener("mousemove", handleMouseMove);
    block.addEventListener("mouseup", stopScroll);
    block.addEventListener("mouseleave", stopScroll);
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
    block.removeEventListener("mouseleave", stopScroll);
  }

  function wheelScroll(event) {
    event.preventDefault();
    block.scrollLeft += event.deltaY;
  }
  block.addEventListener("mousedown", startScroll);
  block.addEventListener("mousewheel", wheelScroll);
}

// export function scrollingBlocks(block) {
//   let isScrolling = false;
//   let startX, scrollLeft;
//   block.addEventListener("mouseleave", (event) => {
//     event.stopPropagation();
//     console.log(event);
//   });
// }
