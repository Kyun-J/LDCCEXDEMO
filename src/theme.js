import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { deepOrange } from "@material-ui/core/colors";

const GlobalTheme = createMuiTheme({
  palette: {
    primary: deepOrange,
    secondary: {
      main: "#ef5350",
    },
  },
  overrides: {
    MuiButton: {
      contained: {
        backgroundColor: "#fafafa",
        '&:hover': {
          '@media (hover: none)': {
            backgroundColor: "#fafafa",
          }
        },
      },
    },
  },
});

export const GlobalThemeProvider = ({ children }) => (
  <ThemeProvider theme={GlobalTheme}>{children}</ThemeProvider>
);
