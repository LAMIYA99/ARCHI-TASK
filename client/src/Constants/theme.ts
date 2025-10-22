import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    common: {
      black: "#000000",
      white: "#FFFFFF",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
  },
});
