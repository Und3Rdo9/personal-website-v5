import * as React from 'react';
import { createMuiTheme, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { COLOR_YELLOW } from './colors';
import { ThemeProvider } from '@material-ui/styles';
import { StoryDecorator } from '@storybook/react';
import fonts from './fonts';

// @TODO clean up config into seperate files?
export const theme = createMuiTheme({
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
    htmlFontSize: 18,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 400,
    fontWeightBold: 700,
    h1: {
      fontWeight: 700,
      fontSize: '3.38889rem',
      lineHeight: '4.5rem',
      letterSpacing: '0',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.27778rem',
      lineHeight: '3rem',
      letterSpacing: '0',
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.5rem',
      lineHeight: '1.5rem',
      letterSpacing: '0',
    },
    h4: {
      fontWeight: 700,
      fontSize: 22, // @TODO convert to rem
      lineHeight: '1.5rem',
      letterSpacing: '0',
    },
    h5: {
      fontWeight: 700,
      fontSize: 20, // @TODO convert to rem
      lineHeight: '1.5rem',
      letterSpacing: '0',
    },
    h6: {
      fontWeight: 700,
      fontSize: '1rem',
      lineHeight: '1.5rem',
      letterSpacing: '0',
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: '1.5rem',
      letterSpacing: '0',
    },
    subtitle2: {
      // @TODO see if we should use this for something else?
      fontWeight: 400,
      fontSize: '0.88889rem',
      lineHeight: '1.5rem',
      letterSpacing: '0',
    },
    body1: {
      fontWeight: 300,
      fontSize: '1rem',
      lineHeight: '1.5rem',
      letterSpacing: '0',
    },
    body2: {
      fontWeight: 300,
      fontSize: '0.88889rem',
      lineHeight: '1.5rem',
      letterSpacing: '0',
    },
    button: {
      fontWeight: 400, // @TODO add bold variant?
      fontSize: '0.77778rem',
      lineHeight: '1.5rem',
      letterSpacing: '0.02857em',
      textTransform: 'uppercase',
    },
    overline: {
      fontWeight: 400,
      fontSize: '0.88889rem',
      lineHeight: '1.5rem',
      letterSpacing: '0.08333em', // @TODO remove ?
      textTransform: 'uppercase',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [...fonts] as any,
        html: {
          fontSize: '112.5%',
        },
      },
    },
    MuiTypography: {
      gutterBottom: {
        marginBottom: '1.5rem',
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
