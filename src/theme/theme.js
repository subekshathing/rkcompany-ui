// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700
  },
  palette: {
    primary: {
      light: "#E9F5ED",
      main: "#63B27F",
      dark: "#217442"
    },
    secondary: {
      light: "#f0f0f0",
      main: "#ffffff",
      dark: "#535353"
    },
    info: {
      main: "#F79410",
      dark: "#F7941D"
    },
    success: {
      main: "#227466"
    },
    background: {
      default: "#fff"
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 950,
      lg: 1200,
      xl: 1536,
      xlplus: 1600
    }
  }
});

export default theme;
