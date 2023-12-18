import "./index.css";
import { scrollingBlocks } from "./scripts/components/UI/scrollingBlocks/scrollingBlocks";
import { getLocation } from "./scripts/components/getLocation/getLocation";
import { removePlug } from "./scripts/components/removePlug/removePlug";
import { scrollBlocks } from "./scripts/variables";
getLocation();
scrollBlocks.forEach((item) => scrollingBlocks(item));
