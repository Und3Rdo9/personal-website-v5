import * as React from 'react';
import { createMuiTheme, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { COLOR_YELLOW } from './colors';
import { ThemeProvider } from '@material-ui/styles';
import { StoryDecorator } from '@storybook/react';
import fonts from './fonts';

// @TODO clean up config into seperate files?
const theme = createMuiTheme({
  shape: {
    borderRadius: 0,
  },
  palette: {
    primary: {
      light: '#FFF59D',
      main: COLOR_YELLOW,
      dark: '#fdd835',
      contrastText: 'black',
    },
    secondary: {
      light: '#8667ff',
      main: '#473aed',
      dark: '#000bb9',
    },
  },
  typography: {
    fontFamily: [
      'Font',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 400,
    fontWeightBold: 700,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [...fonts] as any,
      },
    },
  },
}) as Theme;

const CustomMuiTheme: StoryDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {storyFn()}
  </ThemeProvider>
);

export default CustomMuiTheme;
