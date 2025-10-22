import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import TanstackProvider from "./Providers/TanstackProvider.tsx";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Constants/theme.ts";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TanstackProvider>

      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </TanstackProvider>
  </StrictMode>
);
