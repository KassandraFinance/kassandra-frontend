/* eslint-disable prettier/prettier */
export default {
  border: {
    radius: '0.6rem'
  },
  font: {
    family: "Rubik, -apple-system, Roboto, 'Open Sans', sans-serif",
    weight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      black: 900
    },
    sizes: {
      font12: '1.2rem',
      font14: '1.4rem',
      font16: '1.6rem',
      font18: '1.8rem',
      font20: '2.0rem',
      font24: '2.4rem',
      font32: '3.2rem',
      font36: '3.6rem',
      font40: '4.0rem',
      font48: '4.8rem',
      font56: '5.6rem',
      font112: '11.2rem'
    }
  },
  colors: {
    darkPurple: '#211426',
    magenta: '#E843C4',
    darkBlue: '#11319A',
    blue: '#0C3DDC',
    cyan: '#26DBDB',
    darkGray: '#2E2F42',
    lightGray: '#828282',
    gray: '#8F8F8F',
    grayDisabled: '#bdbdbd',
    amber: '#FFBF00',
    snow: '#FCFCFC',
    red: '#EA3224',
    green: '#5EE56B'
  },
  spacings: {
    space8: '0.8rem',
    space16: '1.6rem',
    space18: '1.8rem',
    space24: '2.4rem',
    space32: '3.2rem',
    space40: '4.0rem',
    space48: '4.8rem',
    space56: '5.6rem'

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
