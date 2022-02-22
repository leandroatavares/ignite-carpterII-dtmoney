import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-background: #f0f2f5;
    --color-red: #e52e4d;
    --color-blue: #5429cc;
    --color-green: #33cc95;
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

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: .6;
    cursor: not-allowed;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background-color: var(--color-background);

    padding: 3rem;
    position: relative;
    border-radius: .25rem;
  }
  .react-modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`