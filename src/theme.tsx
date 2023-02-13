import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#bf49ff" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 45,
        },
      },
    },
  },
  typography: {
    button: {
      fontSize: "2rem",
    },
  },
});

export default theme;