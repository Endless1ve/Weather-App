import "./index.css";
<<<<<<< HEAD
import { scroll } from "./scripts/components/UI/scroll/scroll";
=======
import { scrollingBlocks } from "./scripts/components/UI/scrollingBlocks/scrollingBlocks";
>>>>>>> 6af7b8668fd19ddf7b1679a22234e87ae0491fcf
import { getLocation } from "./scripts/components/getLocation/getLocation";
import { removePlug } from "./scripts/components/removePlug/removePlug";
import { scrollBlocks } from "./scripts/variables";
getLocation();
<<<<<<< HEAD
scrollBlocks.forEach((item) => scroll(item));
=======

const scrollBlocks = document.querySelectorAll(".scroll");
scrollBlocks.forEach((item) => scrollingBlocks(item));
>>>>>>> 6af7b8668fd19ddf7b1679a22234e87ae0491fcf
