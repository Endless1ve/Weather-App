import "./index.css";
import { scrollingBlocks } from "./scripts/components/UI/scrollingBlocks/scrollingBlocks";
import { getLocation } from "./scripts/components/getLocation/getLocation";
import { removePlug } from "./scripts/components/removePlug/removePlug";
import { scrollBlocks } from "./scripts/variables";
getLocation();
const scrollBlock = document.querySelectorAll(".scroll");
scrollBlock.forEach((item) => scrollingBlocks(item));
