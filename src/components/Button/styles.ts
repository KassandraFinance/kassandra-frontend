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
  claim: (theme: DefaultTheme) => css`
    height: 5.4rem;
    font-size: ${theme.font.sizes.font16};
    padding: 19px 28px;
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4.4rem;
    font-size: ${theme.font.sizes.font16};
    padding: 14px ${theme.spacings.space24};
  `,
  large: (theme: DefaultTheme) => css`
    height: 4.4rem;
    font-size: ${theme.font.sizes.font16};
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
    img{
      width: 1.6rem;
      margin-left: ${theme.spacings.space8};
      order: 1;
      & + span{
        margin-right: ${theme.spacings.space16};
      }
    }
    svg {
      width: 1.6rem;
      order: 0;
      margin-right: ${theme.spacings.space8};
      & + span{
        margin-left: ${theme.spacings.space16};
      }
    }
  `,

  disabledNoEvent: (theme: DefaultTheme) => css`
    background: #343434;
    border: 1px solid #343434;
    color: #8b8b8b;

    cursor: not-allowed;
    filter: grayscale(150%);
    outline: none;

    &:hover {
      background: #343434;
      color: #8b8b8b;
    }
  `,

  backgroundPrimary: (theme: DefaultTheme) => css`
    background: ${`linear-gradient(93.84deg, ${theme.colors.blue} 0%, ${theme.colors.magenta} 50.12%, ${theme.colors.blue} 100%)`};
    background-position-x: 100%;
    background-size: 200%;
    transition: background-position-x 0.5s ease-out;
    font-weight: ${theme.font.weight.medium};
    &:hover {
      background-position-x: 0%;
    }
  `,

  backgroundSecondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.blue};
    font-weight: ${theme.font.weight.light};

    transition: all 300ms;
    &:hover {
      background: ${theme.colors.darkBlue};
    }
  `,

  backgroundBlack: (theme: DefaultTheme) => css`
    border: ${`0.1rem solid ${theme.colors.cyan}`};
    background: transparent;
    font-weight: ${theme.font.weight.light};

    padding: 12.5px;

    transition: all 300ms ease-in-out;
    &:hover {
      color: ${theme.colors.darkPurple};
      background: ${theme.colors.cyan};
      svg{
        path{
          fill: ${theme.colors.darkPurple};
        }
      }
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
    color: ${theme.colors.snow};

    font-family: ${theme.font.family};
    text-decoration: none;

    display: inline-flex;
    justify-content: center;
    align-items: center;

    position: relative;
    padding: ${theme.spacings.space8};

    overflow: hidden;
    outline: none;
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
