export default {
  grid: {
    container: '132rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.6rem'
  },
  font: {
    family:
      "Rubik, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    medium: 500,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.6rem',
      medium: '1.8rem',
      large: '2.4rem',
      xlarge: '4.0rem',
      xxlarge: '5.6rem',
      huge: '11.2rem'
    }
  },
  colors: {
    primary: '#F231A5',
    secondary: '#3CD3C1',
    mainBg: '#2772FF',
    lightBg: '#F2F2F2',
    white: '#FCFCFC',
    black: '#030517',
    lightGray: '#828282',
    gray: '#8F8F8F',
    darkGray: '#2E2F42',
    darkBlue: '#000B71',
    red: '#FF6347',
    blue: '#2772FF'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.15s ease-in-out'
  }
} as const
