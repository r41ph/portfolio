import { addons } from "@storybook/manager-api";
import r41phTheme from "./r41ph-theme";
import "./storybook-styles.css";

addons.setConfig({
  theme: r41phTheme,
});
