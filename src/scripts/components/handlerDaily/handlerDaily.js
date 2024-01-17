import { toggleTheme } from "../UI/toggleTheme/toggleTheme";
import { renderDailyForecast } from "../renderDailyForecast/renderDailyForecast";
import { renderDetails } from "../renderDetails/renderDetails";
import { renderMain } from "../renderMain/renderMain";
import { renderPlace } from "../renderPlace/renderPlace";

export function handlerDaily(data) {
  renderPlace(data);
  renderDailyForecast(data);
  renderDetails(data);
  renderMain();
  toggleTheme();
}
