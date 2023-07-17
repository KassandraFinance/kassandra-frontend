import {
  createGlobalStyle,
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

  :root {
    --default-font-sans: 'Rubik', -apple-system, Roboto, 'Open Sans', sans-serif;
    --header-height: 101px;
    @media (max-width: 576px) {
      --header-height: 91px;
    }
  }

  html, body, #root {
    min-height: 100%;
  }


  html {
    font-size: 62.5%;
  }

  body {
    background-color: #151117;
    font-family: 'Rubik', sans-serif;
    color: #fcfcfc;

    overflow-x: hidden;
  }

  ul, ol {
    list-style: none;
  }
`
export default GlobalStyles
