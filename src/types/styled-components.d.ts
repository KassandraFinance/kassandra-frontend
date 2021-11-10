/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-interface */
import theme from '../styles/theme'

// inferência de tipos
type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
