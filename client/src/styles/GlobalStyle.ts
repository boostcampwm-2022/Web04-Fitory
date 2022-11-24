import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "./Theme";

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    width: 100vw;
    height: 100vh;
    font-size: 80%;
  }

  body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    background-color: ${theme.COLORS.ASH_WHITE}
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
