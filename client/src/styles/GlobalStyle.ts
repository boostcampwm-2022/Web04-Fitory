import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import PretendardRegular from "@public/fonts/Pretendard-Regular.woff2";
import PretendardSemiBold from "@public/fonts/Pretendard-SemiBold.woff2";
import theme from "./Theme";

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'Pretendard';	
    src: local('PretendardRegular'),
    url(${PretendardRegular}) format('woff2');
    font-weight: 400; 		
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: "Pretendard";	
    src: local("PretendardSemiBold"),
    url(${PretendardSemiBold}) format("woff2");
    font-weight: 600; 		
    font-style: normal;
    font-display: swap;
  }

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
    font-family: "Pretendard";	
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
