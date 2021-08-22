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
  | 'backgroundGray'
>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
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
      filter: saturate(30%);
    }
  `,
  backgroundPrimary: (theme: DefaultTheme) => css`
    background: linear-gradient(264.12deg, #E843C4 -140.16%, #020887 205.21%);
    &::before {
      border-left-color: ${darken(0.2, theme.colors.primary)};
      border-top-color: ${darken(0.2, theme.colors.primary)};
    }
    &:hover {
      background: linear-gradient(180deg, #E843C4 20%, #020887 70%);
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
    }
  `,
  backgroundGray: (theme: DefaultTheme) => css`
    background: ${theme.colors.lightGray};
    &::before {
      border-left-color: ${theme.colors.lightGray};
      border-top-color: ${theme.colors.lightGray};
    }
    &:hover {
      background: linear-gradient(
        180deg,
        ${theme.colors.lightGray} 0%,
        ${theme.colors.lightGray} 50%
      );
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
    backgroundPrimary,
    backgroundSecondary,
    backgroundGray
  }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    border: 0;
    cursor: pointer;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;

    &:hover {
      background: ${minimal
        ? 'none'
        : `linear-gradient(180deg, #e35565 0%, #d958a6 50%)`};
    }

    ${!!size && wrapperModifiers[size](theme)};
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${!!hasIcon && wrapperModifiers.withIcon(theme)};
    ${!!minimal && wrapperModifiers.minimal(theme)};
    ${disabled && wrapperModifiers.disabled()};
    ${!!backgroundPrimary && wrapperModifiers.backgroundPrimary(theme)};
    ${!!backgroundSecondary && wrapperModifiers.backgroundSecondary(theme)};
    ${!!backgroundGray && wrapperModifiers.backgroundGray(theme)};
  `}
`
