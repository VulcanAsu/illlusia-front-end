const theme = {
  colors: {
    // MODO CLARO
    primary: "#90abec", // Cor primária do tema
    gray: "#5f6269",
    white: "#f8f8fb", // Branco BG
    baseWhite: "#d5dbe9", // Branco base
    darkBlue: "#404c69", // Azul escuro
    lightGray: "#a5aab5", // Cinza claro

    // MODO ESCURO
    darkModeOrange: "#ff9e2c", // Laranja para modo escuro
    deepBlue: "#0a1533", // Azul profundo para modo escuro

    // Outros estados ou tipos
    success: "#28a745", // Cor para sucesso
    error: "#dc3545", // Cor para erro
    warning: "#ffc107", // Cor para aviso ou alerta
  },
  typography: {
    fontFamily: "Bahnschrift, sans-serif",
    baseFontSize: "1rem",
    heading: {
      fontSize: "1.5rem",
      fontWeight: "600",
    },
    paragraph: {
      fontSize: "1rem",
      lineHeight: "1.5",
    },
  },
  spacing: {
    small: "0.5rem",
    medium: "1rem",
    large: "1.5rem",
  },
  breakpoints: {
    xs: "576px",
    sm: "768px",
    md: "992px",
    lg: "1200px",
  },
  shadows: {
    small: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    medium: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    large: "0px 8px 16px rgba(0, 0, 0, 0.1)",
  },
  transitions: {
    duration: "0.3s",
    easing: "ease-in-out",
  },
  border: {
    borderGray: "1px solid #79797913",
    borderRadiusSmall: "8px",
    borderRadiusLarge: "12px",
    borderRadiusRound: "50%",
  },
};

export default theme;
