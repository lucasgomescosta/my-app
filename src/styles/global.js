import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle` 

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }
  body {
    background: #0D2636;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
    font-size: 14px;
  }


  body, input, button {
    color: #2222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button{
    cursor: pointer;
  }
`;

export default GlobalStyle