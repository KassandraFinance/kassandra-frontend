import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from './index'

export type WrapperProps = Pick<
  ButtonProps,
  | 'size'
  | 'fullWidth'
  | 'backgroundPrimary'
  | 'backgroundSecondary'
  | 'backgroundBlack'
  | 'disabledNoEvent'
>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.font14};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.font16};
    padding: ${theme.spacings.space16} ${theme.spacings.space32};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.font18};
    padding: ${theme.spacings.space16} ${theme.spacings.space32};
  `,
  huge: (theme: DefaultTheme) => css`
    height: 4.4rem;
    font-size: ${theme.font.sizes.font16};
    padding: ${theme.spacings.space24} ${theme.spacings.space48};
  `,
  fullWidth: () => css`
    width: 100%;
  `,

  disabledNoEvent: () => css`
    cursor: not-allowed;
    filter: grayscale(150%);
    color: #bdbdbd;
    outline: none;
    &:after {
      background-color: transparent;
    }
    &:before {
      background-color: transparent;
      color: #bdbdbd;
    }
    &:hover {
      background-color: transparent;
      color: #bdbdbd;
    }
  `,

  backgroundPrimary: (theme: DefaultTheme) => css`
    background: linear-gradient(264.12deg, #e843c4 -140.16%, #020887 205.21%);
    color: ${theme.colors.snow};

    &:after {
      background: linear-gradient(264.12deg, #e843c4 -179.71%, #020887 205.21%);
    }
    &:before {
      background-color: #020899;
    }
  `,

  backgroundSecondary: (theme: DefaultTheme) => css`
    background: ${`linear-gradient(0deg, ${theme.colors.amber} -0.2%, ${theme.colors.magenta} 79.99%)`};

    &:after {
      background: linear-gradient(0deg, #ffbf00 -0.2%, #e843c4 79.99%);
    }
    &:before {
      background-color: #ffbf00;
    }
    &:hover {
      &:before {
        width: 100%;
      }
    }
  `,
  
  backgroundBlack: (theme: DefaultTheme) => css`
    background: transparent;
    border: 0.1rem solid #26dbdb;
    color: ${theme.colors.snow};
    transition: all 300ms;

    &:after {
      background-color: transparent;
    }
    &:before {
      background-color: #26dbdb;
    }
    &:hover {
      color: ${theme.colors.darkPurple};
      background-color: #26dbdb;
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({
    theme,
    size,
    fullWidth,
    disabledNoEvent,
    backgroundPrimary,
    backgroundSecondary,
    backgroundBlack
  }) => css`
    border: none;
    border-radius: ${theme.border.radius};
    font-family: ${theme.font.family};
    text-decoration: none;
    
    display: inline-flex;
    justify-content: center;
    align-items: center;

    position: relative;
    padding: ${theme.spacings.space8};
    
    overflow: hidden;
    cursor: pointer;
    z-index: 1;
    &:after {
      content: '';
      border-radius: ${theme.border.radius};

      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;

      z-index: -2;
    }
    &:before {
      content: '';
      border-radius: ${theme.border.radius};

      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 100%;
      transition: all 300ms ease-in-out;
      z-index: -1;
    }
    &:hover {
      &:before {
        width: 100%;
      }
    }

    ${!!size && wrapperModifiers[size](theme)};
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${!!backgroundPrimary && wrapperModifiers.backgroundPrimary(theme)};
    ${!!backgroundSecondary && wrapperModifiers.backgroundSecondary(theme)};
    ${!!backgroundBlack && wrapperModifiers.backgroundBlack(theme)};
    ${disabledNoEvent && wrapperModifiers.disabledNoEvent()};
  `}
`
