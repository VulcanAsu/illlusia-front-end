import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import GlobalStyles from "./styles/GlobalStyles";

import React from "react";

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
};
