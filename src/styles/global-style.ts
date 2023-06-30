import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { media } from "./theme";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  :focus {
    outline: none;
    border: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 16px;
    -webkit-text-size-adjust: none;
    font-display: fallback;
  }
  button {
    background: none;
    padding: 0;
    cursor: pointer;
    &:disabled {
      cursor: default;
      fill: #f2f3f4;
    }
  }
  input, button, textarea {
    font-size: 100%;
    border: none;
  }
  img {
    display: block;
  }

  .pc-tablet-only {
    display: block;
    ${media.mobile} {
      display: none;
    }
  }
  .tablet-mobile-only{
    display: none;
    ${media.tablet}{
      display:block;
    }
  }
  .mobile-only {
    display: none;
    ${media.mobile} {
      display: block;
    }
  }
`;
