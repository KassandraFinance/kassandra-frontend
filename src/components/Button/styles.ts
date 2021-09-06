import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'

import { ButtonProps } from '.'

export type WrapperProps = {
  hasIcon: boolean
} & Pick<
  ButtonProps,
  | 'size'
  | 'fullWidth'
  | 'minimal'
  | 'backgroundPrimary'
  | 'backgroundSecondary'
  | 'backgroundBlack'
  | 'disabledNoEvent'
>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};

  `,
  huge: (theme: DefaultTheme) => css`
    height:4.4rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.primary};

    &:hover {
      color: ${darken(0.1, theme.colors.primary)};
    }
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: grayscale(150%);
    }
  `,
  disabledNoEvent: () => css`
      pointer-events: none;
      filter: grayscale(150%);
  `,
  backgroundPrimary: (theme: DefaultTheme) => css`
    background: linear-gradient(264.12deg, #E843C4 -140.16%, #020887 205.21%);
    -webkit-transition: ease-out 0.4s;
    -moz-transition: ease-out 0.4s;
    transition: all ease-out 0.4s;
    backface-visibility: hidden;

    &::before {
    }
    &:hover{
      box-shadow: inset 500px 0 0 0 #020887;
      opacity: 1;
      transition: opacity 1s;
  }
`,
  backgroundSecondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.secondary};
    &::before {
      border-left-color: ${darken(0.2, theme.colors.secondary)};
      border-top-color: ${darken(0.2, theme.colors.secondary)};
    }
    &:hover {
      background: linear-gradient(180deg, #3cd3c1 0%, #5faed0 50%);
      transition-delay: ${theme.transition.default};
    }
  `,
  backgroundBlack: (theme: DefaultTheme) => css`
    background: rgba(0,0,0,0.0);
    border: 0.1rem solid #26DBDB;
    transition: all .15s ease-in-out;
    &::before {
      border-left-color: #26DBDB;
      border-top-color: #26DBDB;
    }
    &:hover {
      color:black;
      background: #26DBDB;
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({
    theme,
    size,
    fullWidth,
    hasIcon,
    minimal,
    disabled,
    disabledNoEvent,
    backgroundPrimary,
    backgroundSecondary,
    backgroundBlack
  }) => css`
    display: inline-flex;
    overflow: hidden;

    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    border: 0;
    cursor: pointer;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;

    /* &:hover {
      background: ${disabled
        ? 'none'
        : `linear-gradient(180deg, #e35565 0%, #d958a6 50%)`};
    } */

    ${!!size && wrapperModifiers[size](theme)};
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${!!hasIcon && wrapperModifiers.withIcon(theme)};
    ${!!minimal && wrapperModifiers.minimal(theme)};
    ${disabled && wrapperModifiers.disabled()};
    ${disabledNoEvent && wrapperModifiers.disabledNoEvent()};
    ${!!backgroundPrimary && wrapperModifiers.backgroundPrimary(theme)};
    ${!!backgroundSecondary && wrapperModifiers.backgroundSecondary(theme)};
    ${!!backgroundBlack && wrapperModifiers.backgroundBlack(theme)};
  `}
`
