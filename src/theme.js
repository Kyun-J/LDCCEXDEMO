import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const GlobalTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#ae9b73",
      contrastText: "#ffffff"
    },
    secondary: {
      main: "#e70012",
    },
  },
  overrides: {
    MuiButton: {
      contained: {
        backgroundColor: "#6a6869",
        color: "#ffffff",
        '&:hover': {
          '@media (hover: none)': {
            backgroundColor: "#6a6869",
          }
        },
      },
    },
  },
});

export const GlobalThemeProvider = ({ children }) => (
  <ThemeProvider theme={GlobalTheme}>{children}</ThemeProvider>
);
