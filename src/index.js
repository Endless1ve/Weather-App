import "./index.css";
import { scrollingBlocks } from "./scripts/components/UI/scrollingBlocks/scrollingBlocks";
import { getLocation } from "./scripts/components/getLocation/getLocation";
import { renderError } from "./scripts/components/renderError/renderError";
getLocation();
const scrollBlocks = document.querySelectorAll(".scroll");
scrollBlocks.forEach((item) => scrollingBlocks(item));
renderError();
