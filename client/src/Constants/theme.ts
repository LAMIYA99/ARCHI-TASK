import { createTheme } from "@mui/material/styles";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    light: true;
    dark: true;
    banner: true;
    viewAll: true;
  }
}

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          gridColumnGap: "0.5em",
          gridRowGap: "0.5em",
          color: "#fff",
          textAlign: "center",
          backgroundColor: "transparent",
          border: "1px solid #fff",
          borderRadius: "2.5em",
          justifyContent: "center",
          alignItems: "center",
          padding: "1em 1.5em",
          fontSize: "1.125em",
          fontWeight: 500,
          lineHeight: "130%",
          transition: "all 0.2s",
          display: "flex",
          textTransform: "capitalize",
          width: "176px",

          "&:hover": {
            backgroundColor: "#fff",
            color: "#000",
            borderColor: "#fff",
          },
        },
      },

      variants: [
        {
          props: { variant: "light" },
          style: {
            borderColor: "#000",
            color: "#000",
            "&:hover": {
              backgroundColor: "#000",
              color: "#fff",
            },
          },
        },
        {
          props: { variant: "dark" },
          style: {
            borderColor: "#fff",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#fff",
              color: "#000",
            },
          },
        },
        {
          props: { variant: "banner" },
          style: {
            borderColor: "#000",
            width: "256.5px",
            color: "#000",
            "&:hover": {
              backgroundColor: "#C1F377",
              borderColor: "#C1F377",
              color: "#000",
            },
          },
        },
        {
          props: { variant: "viewAll" },
          style: {
            borderColor: "#000",
            width: "256.5px",
            color: "#000",
            "&:hover": {
              backgroundColor: "#C1F377",
              borderColor: "#C1F377",
              color: "#000",
            },
          },
        },
      ],
    },
  },
});

