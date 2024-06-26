const theme = {
  border: {
    radius: '0.6rem'
  },
  font: {
    family: 'var(--default-font-sans)',
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
      font64: '6.4rem',
      font112: '11.2rem'
    },
    text: {
      text6xl: '700 6.4rem/8rem var(--default-font-sans)',
      text5xl: '700 4.8rem/6rem var(--default-font-sans)',
      text4xl: '700 3.6rem/4.5rem var(--default-font-sans)',
      text3xl: '700 3rem/3.8rem var(--default-font-sans)',
      text2xl: '700 2.4rem/3rem var(--default-font-sans)',
      textXl: '700 2rem/2.5rem var(--default-font-sans)',
      textLg300: '300 1.8rem/3.2rem var(--default-font-sans)',
      textLg500: '500 1.8rem/2.2rem var(--default-font-sans)',
      textLg700: '700 1.8rem/2.4rem var(--default-font-sans)',
      textBase300: '300 1.6rem/2.4rem var(--default-font-sans)',
      textBase400: '400 1.6rem/2.4rem var(--default-font-sans)',
      textBase500: '500 1.6rem/2.4rem var(--default-font-sans)',
      textBase700: '700 1.6rem/2rem var(--default-font-sans)',
      textSm300: '300 1.4rem/2.4rem var(--default-font-sans)',
      textSm400: '400 1.4rem/2.4rem var(--default-font-sans)',
      textSm500: '500 1.4rem/1.6rem var(--default-font-sans)',
      textSm700: '700 1.4rem/2.4rem var(--default-font-sans)',
      textXs300: '300 1.2rem/1.6rem var(--default-font-sans)',
      textXs500: '500 1.2rem/1.6rem var(--default-font-sans)',
      textXs700: '700 1.2rem/1.6rem var(--default-font-sans)',
      textXXs300: '300 1rem/1.6rem var(--default-font-sans)',
      textXXs500: '500 1rem/1.2rem var(--default-font-sans)'
    }
  },
  colors: {
    darkPurple: '#211426',
    magenta: '#E843C4',
    darkBlue: '#11319A',
    blue: '#0C3DDC',
    cyan: '#26DBDB',
    darkGray: '#343434',
    gray: '#8F8F8F',
    grayDisabled: '#bdbdbd',
    amber: '#FFBF00',
    snow: '#FCFCFC',
    red: '#EA3224',
    green: '#5EE56B',
    white: '#FFF',
    darkText: '#8c8c8c',
    // Blog Colors
    primary10: '#001833',
    primary20: '#003066',
    primary30: '#004799',
    primary40: '#005FCC',
    primary50: '#0077FF',
    primary60: '#3392FF',
    primary70: '#66ADFF',
    primary80: '#99C9FF',
    primary90: '#CCE4FF',
    primary95: '#E5F1FF',
    primary98: '#F5FAFF',
    neutral10: '#16191D',
    neutral20: '#2C333A',
    neutral30: '#434C56',
    neutral40: '#596673',
    neutral50: '#3C4753',
    neutral60: '#8C99A6',
    neutral70: '#A9B2BC',
    neutral80: '#C5CCD3',
    neutral90: '#E2E5E9',
    neutral95: '#F1F2F4',
    neutral98: '#F9F9FB',
    dark: '#000000',
    dark10: '#101823',
    dark20: '#1F3147',
    dark30: '#2F496A',
    dark40: '#3E628E',
    dark50: '#4E7AB1',
    dark60: '#7195C1',
    dark70: '#7195C1',
    dark80: '#B8CAE0',
    dark90: '#DCE4EF',
    dark95: '#EFF3F8',
    dark98: '#F8FAFC',
    green10: '#252B08',
    green20: '#4B570F',
    green30: '#708217',
    green40: '#96AD1F',
    green50: '#BAD826',
    green60: '#C9E052',
    green70: '#D6E87D',
    green80: '#E4F0A8',
    green90: '#F1F7D4',
    green95: '#F8FBE9',
    green98: '#FCFDF6',
    yellow10: '#332800',
    yellow20: '#665000',
    yellow30: '#997700',
    yellow40: '#CC9F00',
    yellow50: '#FFC700',
    yellow60: '#FFD233',
    yellow70: '#FFDD66',
    yellow80: '#FFE999',
    yellow90: '#FFF4CC',
    yellow95: '#FFF9E5',
    yellow98: '#FFFAF5',
    orange10: '#331800',
    orange20: '#663100',
    orange30: '#994900',
    orange40: '#CC6200',
    orange50: '#FF7A00',
    orange60: '#FF9533',
    orange70: '#FFAF66',
    orange80: '#FFCA99',
    orange90: '#FFE4CC',
    orange95: '#FFF2E5',
    orange98: '#FFFAF5',
    red10: '#2F0504',
    red20: '#5E0A08',
    red30: '#8D0F0C',
    red40: '#BC1410',
    red50: '#EB1914',
    red60: '#EF4743',
    red70: '#F37572',
    red80: '#F7A3A1',
    red90: '#FBD1D0',
    red95: '#FDE8E8',
    red98: '#FEF6F6',
    purple10: '#12042F',
    purple20: '#23095D',
    purple30: '#350D8C',
    purple40: '#4612BA',
    purple50: '#5816E9',
    purple60: '#7945ED',
    purple70: '#9B73F2',
    purple80: '#BCA2F6',
    purple90: '#DED0FB',
    purple95: '#EEE8FD',
    purple98: '#F8F6FE'
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

const size = {
  mobile: '576px',
  tabletSmall: '768px',
  tabletLarge: '992px',
  desktop: '1300px'
} as const

export const breakpoints = {
  mobile: 576,
  tabletSmall: 768,
  tabletLarge: 992,
  desktop: 1300
} as const

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tabletSmall: `(max-width: ${size.tabletSmall})`,
  tabletLarge: `(max-width: ${size.tabletLarge})`,
  desktop: `(max-width: ${size.desktop})`
} as const

export const headerSize = {
  desktop: '10.8rem'
} as const

export default theme

export type ThemeType = typeof theme
