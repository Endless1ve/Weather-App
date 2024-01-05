import "./index.css";
import { getDaysApi } from "./scripts/components/API/dateApi/dateApi";
import { scrollingBlocks } from "./scripts/components/UI/scrollingBlocks/scrollingBlocks";
import { getLocation } from "./scripts/components/getLocation/getLocation";
getLocation();
const scrollBlocks = document.querySelectorAll(".scroll");
scrollBlocks.forEach((item) => scrollingBlocks(item));
