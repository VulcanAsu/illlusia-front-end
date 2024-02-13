import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: "Bahnschrift";
    src: url("../assets/fonts/Bahnschrift-Font-Family/BAHNSCHRIFT.TTF")
      format("truetype");
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${(props) => props.theme.typography.fontFamily};
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  body{
    width: 100%;
    background-color: ${(props) => props.theme.colors.white};  
    color: ${(props) => props.theme.colors.darkBlue};
  }
  
  a{
    text-decoration: none;
  }

  button{
    background: none;
    border: none;
  }

  nav ul, li{
    list-style: none;
  }

  input{
    border: none;
    outline: none;
    background: none;
  }
`;
