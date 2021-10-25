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
    height: 4.8rem;
    font-size: ${theme.font.sizes.font16};
    padding: ${theme.spacings.space16} ${theme.spacings.space32};

  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.font20};
    padding: ${theme.spacings.space16} ${theme.spacings.space32};
    @media (max-width: 600px) {
      font-size: ${theme.font.sizes.font16};
      height: 4.8rem;
    }
  `,
  huge: (theme: DefaultTheme) => css`
    height: 4.4rem;
    font-size: ${theme.font.sizes.font18};
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
    background: ${`linear-gradient(264.12deg, ${theme.colors.magenta} -140.16%, ${theme.colors.darkBlue} 205.21%)`};
    color: ${theme.colors.snow};

    &:after {
      background:${`linear-gradient(264.12deg, ${theme.colors.magenta} -179.71%, ${theme.colors.darkBlue} 205.21%)`};
    }
    &:before {
      background-color: ${theme.colors.darkBlue};
    }
  `,

  backgroundSecondary: (theme: DefaultTheme) => css`

    /* background: ${`linear-gradient(87.48deg, ${theme.colors.amber} -70.27%,  ${theme.colors.magenta} 154.78%)`}; */
    background: ${`linear-gradient(92.08deg, ${theme.colors.magenta} 0%, ${theme.colors.darkBlue} 100%)`};
    color: ${theme.colors.snow};

    &:after {
      
      background: ${`linear-gradient(87.48deg, ${theme.colors.magenta} -70.27%,  ${theme.colors.darkBlue} 154.78%)`};
      /* background: ${`linear-gradient(92.08deg, ${theme.colors.magenta} 0%, ${theme.colors.darkBlue} 100%)`}; */
    }
    &:before {
      /* background-color: ${theme.colors.darkBlue}; */
      /* background: ${`linear-gradient(87.48deg, ${theme.colors.darkBlue} -70.27%,  ${theme.colors.magenta} 154.78%)`}; */

    }
    &:hover {
      &:before {
        width: 100%;
      }
    }
  `,

  backgroundBlack: (theme: DefaultTheme) => css`
    background: transparent;
    border: ${`0.1rem solid ${theme.colors.cyan}`};
    color: ${theme.colors.snow};
    transition: all 300ms;

    &:after {
      background-color: transparent;
    }
    &:before {
      background-color: ${theme.colors.cyan};
    }
    &:hover {
      color: ${theme.colors.darkPurple};
      /* background-color: ${theme.colors.cyan}; */
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
    ${!!hasIcon && wrapperModifiers.withIcon(theme)};
    ${!!backgroundPrimary && wrapperModifiers.backgroundPrimary(theme)};
    ${!!backgroundSecondary && wrapperModifiers.backgroundSecondary(theme)};
    ${!!backgroundBlack && wrapperModifiers.backgroundBlack(theme)};
    ${disabledNoEvent && wrapperModifiers.disabledNoEvent(theme)};
  `}
`
