import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'

type GlobalStylesProps = {
  removeBg?: boolean,
  selectBackground?: boolean
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
  url('../fonts/rubik-v14-latin-900.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
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

  ::-webkit-scrollbar {
    width: 0.4rem;
    height: 0.4rem;
  }

  ::-webkit-scrollbar-track {
    margin-block: 0.3rem;
  }

  body::-webkit-scrollbar {
    width: 1rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 1rem;

    transition: background-color ease-in-out 30000ms;

    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }

  html, body, #root {
    min-height: 100%;
  }

  ${({ selectBackground }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      background-color: #151117;
      font-family: 'Rubik', sans-serif;
      color: #fcfcfc;

      ${selectBackground
        ? `background-image: url('/assets/images/background-products.png');
        background-repeat: repeat-y;
        background-size: cover;
        background-position-x: center;`
        : ''}
    }
  `}
  ul, ol {
    list-style: none;
  }
`
export default GlobalStyles
