import "./index.css";
import { scrollingBlocks } from "./scripts/components/UI/scrollingBlocks/scrollingBlocks";
import { toggleTheme } from "./scripts/components/UI/toggleTheme/toggleTheme";
import { getLocation } from "./scripts/components/getLocation/getLocation";

const scrollBlocks = document.querySelectorAll("#scroll");

getLocation();
scrollBlocks.forEach((item) => scrollingBlocks(item));
