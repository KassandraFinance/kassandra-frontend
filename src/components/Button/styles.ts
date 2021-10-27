import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from './index'

export type WrapperProps = {
  hasIcon: boolean
} & Pick<
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
    height: 4.4rem;
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    padding: 14px ${theme.spacings.space24};
  `,
  large: (theme: DefaultTheme) => css`
    height: 4.4rem;
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.medium};
    padding: 14px ${theme.spacings.space24};
  `,
  huge: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.font16};
    padding: ${theme.spacings.space24} ${theme.spacings.space48};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.4rem;
      margin-right: ${theme.spacings.space8};

      & + span {
        margin-left: ${theme.spacings.space16};
      }
    }
  `,

  disabledNoEvent: (theme: DefaultTheme) => css`
    cursor: not-allowed;
    filter: grayscale(150%);
    color: ${theme.colors.grayDisabled};
    outline: none;
    &:after {
      background-color: transparent;
    }
    &:before {
      background-color: transparent;
      color: ${theme.colors.grayDisabled};
    }
    &:hover {
      background-color: transparent;
      color: ${theme.colors.grayDisabled};
    }
  `,

  backgroundPrimary: (theme: DefaultTheme) => css`
    background: ${`linear-gradient(93.84deg, ${theme.colors.magenta} 0.12%, ${theme.colors.blue} 100%)`};
    color: ${theme.colors.snow};
    transition-duration: 800ms;
   &:hover{
    background: ${`linear-gradient(93.84deg, ${theme.colors.blue} 0.12%, ${theme.colors.magenta} 100%)`};
   }
  `,

  backgroundSecondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.blue};
    color: ${theme.colors.snow};
    &:hover {
      background: ${theme.colors.darkBlue}
    }
  `,

  backgroundBlack: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    padding: 12.5px;
    border-radius: 9px;
    border: ${`0.1rem solid ${theme.colors.snow}`};
    color: ${theme.colors.snow};
    background-color: transparent;
    transition: all 300ms;
    &:hover {
      color: ${theme.colors.cyan};
      border: ${`0.1rem solid ${theme.colors.cyan}`};
      background-color: transparent;
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({
  theme,
  size,
  fullWidth,
  hasIcon,
  disabledNoEvent,
  backgroundPrimary,
  backgroundSecondary,
  backgroundBlack,
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

    ${!!size && wrapperModifiers[size](theme)};
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${!!hasIcon && wrapperModifiers.withIcon(theme)};
    ${!!backgroundPrimary && wrapperModifiers.backgroundPrimary(theme)};
    ${!!backgroundSecondary && wrapperModifiers.backgroundSecondary(theme)};
    ${!!backgroundBlack && wrapperModifiers.backgroundBlack(theme)};
    ${disabledNoEvent && wrapperModifiers.disabledNoEvent(theme)};
  `}
`
