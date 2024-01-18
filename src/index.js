import "./index.css";
import { scrollingBlocks } from "./scripts/components/UI/scrollingBlocks/scrollingBlocks";
import { plugTheme } from "./scripts/components/UI/toggleTheme/plugTheme";
import { getLocation } from "./scripts/components/getLocation/getLocation";
plugTheme();
getLocation();
const scrollBlocks = document.querySelectorAll("#scroll");
scrollBlocks.forEach((item) => scrollingBlocks(item));
