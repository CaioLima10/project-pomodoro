import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/DefaultTheme";
import { GlobalStyle } from "./Global";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
