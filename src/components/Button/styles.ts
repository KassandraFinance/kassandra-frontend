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
  | 'backgroundVote'
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

    padding: 14px ${theme.spacings.space24};
    font-size: ${theme.font.sizes.font16};
  `,
  large: (theme: DefaultTheme) => css`
    height: 4.4rem;

    padding: 14px ${theme.spacings.space24};
    font-size: ${theme.font.sizes.font16};
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
    img {
      width: 1.6rem;
      margin-left: ${theme.spacings.space8};
      order: 1;
      & + span {
        margin-right: ${theme.spacings.space16};
      }
    }
    svg {
      width: 1.6rem;
      order: 0;
      margin-right: ${theme.spacings.space8};
      & + span {
        margin-left: ${theme.spacings.space16};
      }
    }
  `,

  disabledNoEvent: (theme: DefaultTheme) => css`
    background: ${theme.colors.darkGray};
    border: 1px solid ${theme.colors.darkGray};
    color: #8b8b8b;

    cursor: not-allowed;
    filter: grayscale(150%);
    outline: none;
  `,

  backgroundPrimary: (theme: DefaultTheme) => css`
    background: ${`linear-gradient(93.84deg, ${theme.colors.blue} 0%, ${theme.colors.magenta} 50.12%, ${theme.colors.blue} 100%)`};
    background-position-x: 100%;
    background-size: 200%;
    transition: background-position-x 0.5s ease-out;

    &:hover,
    &:focus {
      background-position-x: 0%;
    }

    &:focus {
      outline: 2px solid ${theme.colors.magenta};
      outline-offset: 2px;
    }
  `,

  backgroundSecondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.blue};

    transition: all 300ms;

    &:hover,
    &:focus {
      background: ${theme.colors.darkBlue};
    }

    &:focus {
      outline: 2px solid ${theme.colors.darkBlue};
      outline-offset: 2px;
    }
  `,

  backgroundBlack: (theme: DefaultTheme) => css`
    border: ${`0.1rem solid ${theme.colors.cyan}`};
    background: transparent;

    padding: 12.5px;

    transition: all 300ms ease-in-out;

    &:hover,
    &:focus {
      color: ${theme.colors.darkPurple};
      background: ${theme.colors.cyan};
      svg {
        path {
          fill: ${theme.colors.darkPurple};
        }
      }
    }

    &:focus {
      outline: 2px solid ${theme.colors.cyan};
      outline-offset: 2px;
    }
  `,

  backgroundVote: (
    theme: DefaultTheme,
    { voteState, type }: { voteState: string, type: string }
  ) => {
    switch (voteState) {
      case 'against':
        return css`
          background: #e8372c;
          color: #211426;
          font-weight: 400;
          cursor: not-allowed;
          outline: none;
        `
      case 'favor':
        return css`
          background: #2ce878;
          color: #211426;
          font-weight: 400;
          cursor: not-allowed;
          outline: none;
        `

      case 'vote-open':
        return css`
          background: ${theme.colors.blue};

          transition: all 500ms;
          &:hover,
          &:focus {
            background: ${type === 'For' ? '#2ce878' : '#e8372c'};
            color: #211426;
          }

          &:focus {
            outline: 2px solid ${theme.colors.darkBlue};
            outline-offset: 2px;
          }
        `

      default:
        return css`
          background: ${theme.colors.darkGray};
          border: 1px solid ${theme.colors.darkGray};
          color: #8b8b8b;

          cursor: not-allowed;
          filter: grayscale(150%);
          outline: none;
        `
    }
  }
}

// eslint-disable-next-line prettier/prettier
export const Wrapper =
  styled.button <
  WrapperProps >
  `
  ${({
    theme,
    size,
    fullWidth,
    hasIcon,
    disabledNoEvent,
    backgroundPrimary,
    backgroundSecondary,
    backgroundBlack,
    backgroundVote
  }) => css`
    border: none;
    border-radius: ${theme.border.radius};
    color: ${theme.colors.snow};

    font-weight: ${theme.font.weight.light};
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
    ${backgroundVote?.type !== undefined &&
    wrapperModifiers.backgroundVote(theme, backgroundVote)};
  `}
`
