import * as React from "react";
import { createMuiTheme, Theme } from "@material-ui/core/styles";
import { COLOR_YELLOW } from "./colors";
import { ThemeProvider } from "@material-ui/styles";
import { StoryDecorator } from "@storybook/react";

// TODO clean up config into seperate files?
const theme = createMuiTheme({
  shape: {
    borderRadius: 0
  },
  palette: {
    primary: {
      light: "#FFF59D",
      main: COLOR_YELLOW,
      dark: "#fdd835",
      contrastText: "black"
    },
    secondary: {
      light: "#8667ff",
      main: "#473aed",
      dark: "#000bb9"
    }
  }
}) as Theme;

const CustomMuiTheme: StoryDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

export default CustomMuiTheme;
