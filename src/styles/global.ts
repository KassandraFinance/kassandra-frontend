import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'

type GlobalStylesProps = {
  removeBg?: boolean
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  @font-face{
  font-family: 'Rubik';
    font-style: normal;
    font-weight: 300;
    src: local(''),
    url('../fonts/rubik-v14-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
  }
  /* rubik-regular - latin */
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;

    src: local(''),
    url('../fonts/rubik-v14-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
  }
  /* rubik-500 - latin */
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 500;
    src: local(''),
    url('../fonts/rubik-v14-latin-500.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
  }
  /* rubik-600 - latin */
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 600;
    src: local(''),
    url('../fonts/rubik-v14-latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
  }
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 900;
    src: local(''),
    url('../fonts/rubik-v14-latin-900.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
  }
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;



    &::before,
    &::after {
      box-sizing: inherit;
    }
  }


  html, body, #root {
    min-height: 100%;
  }

  ${() => css`
    html {
      font-size: 62.5%;
    }

    body {
      background-color: black;
      font-family: 'Rubik', sans-serif;
      color: #fcfcfc;
    }
  `}
  ul, ol {
    list-style: none;
  }
`
export default GlobalStyles
