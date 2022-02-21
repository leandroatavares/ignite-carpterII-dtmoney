import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-background: #f0f2f5;
    --color-red: #e52e4d;
    --color-blue: #5429cc;
    --color-blue-light: #6933ff;
    --color-text-title: #363f5f;
    --color-text-body: #969cb3;
    --color-shape: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%; //16px x 0.9375 = 15px;
    }

    @media(max-width: 720px) {
      font-size: 87.5%; //16px x 0.875 = 14px;
    }
  }

  body {
    background-color: var(--color-background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: .6;
    cursor: not-allowed;
  }
`