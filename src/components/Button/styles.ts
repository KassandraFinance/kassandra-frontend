import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'

import { ButtonProps } from '.'

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
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.space8};
      }
    }
  `,
  disabledNoEvent: () => css`
    &:disabled{
      cursor: not-allowed;
      pointer-events: none;
      filter: grayscale(150%);
      color: #bdbdbd;
    }
  `,

  backgroundPrimary: (theme: DefaultTheme) => css`
    background: linear-gradient(264.12deg, #e843c4 -140.16%, #020887 205.21%);
    transition: all 0.15s ease-in-out;
    backface-visibility: hidden;
    &::before {
    }
    &:hover {
      background: #020887;
      transition-delay: ${theme.transition.default};
    }
  `,
  backgroundBlack: (theme: DefaultTheme) => css`
    background: rgba(0, 0, 0, 0);
    border: 0.1rem solid ${theme.colors.cyan};
    transition: all 0.15s ease-in-out;
    &::before {
      border-left-color: ${theme.colors.cyan};
      border-top-color: ${theme.colors.cyan};
    }
    &:hover {
      color: black;
      background: ${theme.colors.cyan};
    }
  `
}

// eslint-disable-next-line prettier/prettier
export const Wrapper = styled.button<WrapperProps >`
  ${({
    theme,
    size,
    fullWidth,
    disabled,
    disabledNoEvent,
    backgroundPrimary,
    backgroundBlack
  }) => css`
    display: inline-flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.snow};
    font-family: ${theme.font.family};
    border: 0;
    cursor: pointer;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.space8};
    text-decoration: none;

    ${!!size && wrapperModifiers[size](theme)};
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${disabledNoEvent && wrapperModifiers.disabledNoEvent()};
    ${!!backgroundPrimary && wrapperModifiers.backgroundPrimary(theme)};
    ${!!backgroundBlack && wrapperModifiers.backgroundBlack(theme)};
  `}
`
