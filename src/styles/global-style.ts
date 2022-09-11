import styled, { createGlobalStyle } from "styled-components";
import Sundries from "../assets/fonts/Sundries.otf";

const GlobalStyle = createGlobalStyle`
* {
    padding: 0px;
    margin: 0px;
    font-family: noto-sans, sans-serif;
    outline: none;
    box-sizing: border-box;   
}

// ---- Responsividade ------------
@media (min-width: 1024px) {
    html {
        font-size: 100%;
    }
}
@media (max-width: 1023px) {
    html {
        font-size: 95%;
    }
}
@media (max-width: 991px) {
     html {
        font-size: 90%;
    }
}
@media (max-width: 767px) {
    html {
        font-size: 75%;
    }
}
@media (max-width: 479px) {
    html {
        font-size: 60%;
    }
}
// ----------------------------------

/* suaviza o scroll e remove espaços em branco */
html, body {
    scroll-behavior: smooth;
    height: 100%;
    width: 100%;
    background-color: #acecf7;
}

input, button, textarea {
    border: none;
}

button {
    background: none;
    cursor: pointer;
}

button, input, textarea {
    :disabled {
        cursor: not-allowed;
    }
}

a {
    text-decoration: none;
}

@font-face {
  font-family: 'Sundries';
  src: url(${Sundries}) format("opentype");
}
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default GlobalStyle;
