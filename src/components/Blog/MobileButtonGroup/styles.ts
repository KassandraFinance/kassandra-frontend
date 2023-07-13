import styled, { css, keyframes } from 'styled-components'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import type { ButtonGroupSize, ButtonGroupVariant } from '.'
import { device, ThemeType } from '@/styles/theme'
import type { ThemingHelper } from '@/types/themingHelper'

type SizeVariants = ThemingHelper<ButtonGroupSize, [ThemeType]>
type ButtonGroupVariants = ThemingHelper<
  ButtonGroupVariant,
  [ThemeType, boolean, boolean]
>

export const sizeVariant: SizeVariants = {
  small: () => css`
    padding: 0.8rem 1.6rem;

    font-size: 1.4rem;
    font-style: normal;
    font-weight: 300;
    line-height: 100%; /* 1.4rem */
    letter-spacing: 0.048rem;
  `,
  medium: theme => css`
    padding: 1rem 2rem;

    font: ${theme.font.text.textSm500};
    letter-spacing: 0.048rem;
  `,
  large: theme => css`
    padding: 1.2rem;

    font: ${theme.font.text.textSm500};
    letter-spacing: 0.048rem;
  `
}

export const buttonGroupVariants: ButtonGroupVariants = {
  primary: (theme, isSelected, svgStroke) => css`
    color: ${theme.colors.white};

    background-color: transparent;

    cursor: pointer;

    transition: ${theme.transition.default};
    transition-property: color, background-color;

    svg {
      width: 1.6rem;
      height: 1.6rem;

      path {
        fill: ${theme.colors.white};
        stroke: ${svgStroke ? theme.colors.neutral30 : 'none'};

        transition: ${theme.transition.default};
        transition-property: fill, stroke;
      }
    }

    &:disabled {
      color: ${theme.colors.neutral50};

      cursor: not-allowed;

      svg {
        path {
          fill: ${theme.colors.neutral50};
          stroke: ${theme.colors.neutral50};
        }
      }
    }

    &:hover:not(:disabled) {
      color: ${theme.colors.white};

      background-color: ${isSelected ? 'transparent' : theme.colors.darkPurple};

      svg {
        path {
          fill: ${theme.colors.white};
          stroke: ${svgStroke ? theme.colors.white : 'none'};
        }
      }
    }

    &:focus-visible:not(:disabled) {
      z-index: 2;

      color: ${theme.colors.white};

      background-color: ${isSelected ? 'transparent' : theme.colors.darkPurple};

      svg {
        path {
          fill: ${theme.colors.white};
          stroke: ${svgStroke ? theme.colors.white : 'none'};
        }
      }
    }

    &:active:not(:disabled) {
      color: ${theme.colors.white};

      background-color: ${isSelected ? 'transparent' : theme.colors.darkPurple};

      svg {
        path {
          fill: ${theme.colors.white};
          stroke: ${svgStroke ? theme.colors.white : 'none'};
        }
      }
    }

    @media ${device.tabletSmall} {
      flex: 1 1 0%;
    }
  `,
  secondary: (theme, isSelected, svgStroke) => css`
    color: ${theme.colors.neutral30};

    background-color: ${isSelected
      ? theme.colors.neutral80
      : theme.colors.white};

    cursor: pointer;

    transition: ${theme.transition.default};
    transition-property: color, background-color;

    svg {
      width: 1.6rem;
      height: 1.6rem;

      path {
        fill: ${theme.colors.neutral30};
        stroke: ${svgStroke ? theme.colors.neutral30 : 'none'};

        transition: ${theme.transition.default};
        transition-property: fill, stroke;
      }
    }

    &:disabled {
      color: ${theme.colors.neutral50};

      cursor: not-allowed;

      svg {
        path {
          fill: ${theme.colors.neutral50};
          stroke: ${theme.colors.neutral50};
        }
      }
    }

    &:hover:not(:disabled) {
      background-color: ${isSelected
        ? theme.colors.neutral80
        : theme.colors.neutral95};
    }

    &:focus-visible:not(:disabled) {
      z-index: 2;

      background-color: ${isSelected
        ? theme.colors.neutral80
        : theme.colors.neutral95};
    }

    &:active:not(:disabled) {
      color: ${theme.colors.neutral30};

      background-color: ${theme.colors.neutral80};

      svg {
        path {
          fill: ${theme.colors.neutral30};
        }
      }
    }

    @media ${device.tabletSmall} {
      flex: 1 1 0%;
    }
  `
}

export const MobileButtonGroupContainer = styled.div`
  width: 100%;
  border-radius: 4px;

  box-shadow: 0 0.5rem 1.5rem rgb(0 61 132 / 0.06);
`

export const DropdownMenuContent = styled(DropdownMenu.Content)`
  ${({ theme }) => css`
    position: relative;
    z-index: 100;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    border-radius: 4px;

    background-color: transparent;

    animation: ${fadeIn} ${theme.transition.default};
    animation-name: ${fadeIn};

    will-change: transform, opacity;

    &[data-state='closed'] {
      animation-name: ${fadeOut};
    }

    > * {
      &:first-child {
        border-bottom: 1px solid ${theme.colors.snow};
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
        border-inline: 1px solid ${theme.colors.snow};
      }

      &:not(:first-child, :last-child) {
        border-bottom: 1px solid ${theme.colors.snow};
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
        border-inline: 1px solid ${theme.colors.snow};
      }

      &:last-child {
        border-bottom: 1px solid ${theme.colors.snow};
        border-bottom-right-radius: 4px;
        border-bottom-left-radius: 4px;
        border-inline: 1px solid ${theme.colors.snow};
      }
    }
  `}
`

export const DropdownMenuItem = styled(DropdownMenu.Item)`
  outline: none;

  user-select: none;
`

interface IMobileButtonGroupItemProps {
  isSelected?: boolean
  asIcon?: boolean
  svgStroke?: boolean
  isDropdownOpen?: boolean
  variant?: ButtonGroupVariant
  size?: ButtonGroupSize
}

export const MobileButtonGroupItem = styled.button<IMobileButtonGroupItemProps>`
  ${({
    theme,
    isSelected = false,
    asIcon,
    svgStroke = false,
    isDropdownOpen,
    variant = 'primary',
    size = 'large'
  }) => css`
    display: flex;
    gap: 0.8rem;
    justify-content: flex-start;
    align-items: center;

    width: 100%;

    /* the highest width possible from the options(idk how to do it dynamically) */
    min-width: 13.3rem;
    ${asIcon
      ? css`
          padding: 1.2rem 2.4rem;
        `
      : sizeVariant[size](theme)};
    ${buttonGroupVariants[variant](theme, isSelected, svgStroke)};
    border: ${isSelected ? `1px solid ${theme.colors.snow}` : 'none'};
    border-bottom: ${isDropdownOpen
      ? 'none'
      : isSelected
      ? `1px solid ${theme.colors.snow}`
      : 'none'};
    border-radius: ${isSelected ? '4px' : '0'};
    border-bottom-right-radius: ${isSelected && isDropdownOpen ? '0' : '4px'};
    border-bottom-left-radius: ${isSelected && isDropdownOpen ? '0' : '4px'};

    cursor: pointer;

    transition: ${theme.transition.default};
    transition-property: color, background-color, border-radius;

    span {
      flex: 1 1 0%;
      text-align: left;
    }

    svg {
      width: 1.6rem;
      height: 1.6rem;

      transition: 500ms ease-in-out;

      path {
        transition: ${theme.transition.default};
        transition-property: fill, stroke;
      }
    }

    &:disabled {
      cursor: not-allowed;
    }
  `}
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`
