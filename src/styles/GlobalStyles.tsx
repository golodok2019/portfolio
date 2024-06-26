import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${theme.darkTheme.colors.primaryBg};
    color: ${theme.darkTheme.colors.font};
    line-height: 1.2;
    //Turn on rescale for screens less than 240px
    min-width: 360px;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: none;
  }

  section + section {
    margin-top: 140px;
  }

  p {
    font-size: 16px;
    font-weight: 400;
  }
`