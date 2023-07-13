import { ThemingHelper } from '@/types/themingHelper'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { ButtonSizes, ButtonVariants } from '.'
import theme from '@/styles/theme'

type ButtonVariantsType = ThemingHelper<ButtonVariants, [boolean, boolean]>

type ButtonSizeTypes = ThemingHelper<ButtonSizes, [ButtonVariants]>

type ChevronColorsProps = ThemingHelper<ButtonVariants>

const buttonVariants: ButtonVariantsType = {
  primary: () => css`
    border: 2px solid ${theme.colors.primary50};

    color: ${theme.colors.white};

    background-color: ${theme.colors.primary50};

    &[aria-disabled='false']:hover:not(:disabled) {
      border: 2px solid ${theme.colors.primary70};

      background-color: ${theme.colors.primary70};
    }

    &[aria-disabled='false']:active:not(:disabled) {
      border: 2px solid ${theme.colors.primary30};

      background-color: ${theme.colors.primary30};
    }

    &[aria-disabled='false']:focus-visible:not(:disabled) {
      border: 2px solid ${theme.colors.primary70};

      background-color: ${theme.colors.primary70};
    }
  `,
  secondary: () => css`
    border: 2px solid ${theme.colors.dark10};

    color: ${theme.colors.white};

    background-color: ${theme.colors.dark10};

    &[aria-disabled='false']:hover:not(:disabled),
    &[aria-disabled='false']:active:not(:disabled) {
      border: 2px solid ${theme.colors.primary50};

      background-color: ${theme.colors.primary50};
    }

    &[aria-disabled='false']:focus-visible:not(:disabled) {
      border: 2px solid ${theme.colors.primary40};

      background-color: ${theme.colors.primary40};
    }
  `,
  tertiary: () => css`
    border: 2px solid ${theme.colors.neutral95};

    color: ${theme.colors.neutral30};

    background-color: ${theme.colors.neutral95};

    &[aria-disabled='false']:hover:not(:disabled) {
      border: 2px solid ${theme.colors.neutral95};

      background-color: ${theme.colors.white};
    }

    &[aria-disabled='false']:active:not(:disabled) {
      border: 2px solid ${theme.colors.neutral95};

      background-color: ${theme.colors.neutral80};
    }

    &[aria-disabled='false']:focus-visible:not(:disabled) {
      border: 2px solid ${theme.colors.neutral95};

      background-color: ${theme.colors.white};
    }
  `,
  ghost: (isLink, isBlue) => css`
    border: none;

    color: ${isLink || isBlue ? theme.colors.primary50 : theme.colors.dark10};

    background-color: transparent;

    ${isBlue &&
    css`
      svg {
        path {
          fill: ${theme.colors.primary50} !important;
        }
      }
    `}

    ${!isLink &&
    css`
      &[aria-disabled='false']:not(:disabled) {
        svg {
          path {
            fill: ${theme.colors.dark10};
          }
        }
      }

      &[aria-disabled='false']:hover:not(:disabled) {
        color: ${theme.colors.primary50} !important;

        svg {
          path {
            fill: ${theme.colors.primary50};
          }
        }
      }

      &[aria-disabled='false']:active:not(:disabled) {
        color: ${theme.colors.primary30};

        svg {
          path {
            fill: ${theme.colors.primary30};
          }
        }
      }
    `}

    &[aria-disabled='false']:active:not(:disabled) {
      color: ${theme.colors.primary30};

      svg {
        path {
          fill: ${theme.colors.primary30};
        }
      }
    }

    &:disabled,
    &[aria-disabled='true'] {
      color: ${theme.colors.neutral70};

      background-color: transparent;

      svg {
        path {
          fill: ${theme.colors.neutral70};
        }
      }
    }
  `
}

const buttonSizes: ButtonSizeTypes = {
  small: variant => css`
    height: ${variant !== 'ghost' && '3.2rem'};
    padding-inline: ${variant !== 'ghost' && '2.2rem'};

    font: ${theme.font.text.textXs500};
    letter-spacing: 0.048rem;
  `,
  medium: variant => css`
    height: ${variant !== 'ghost' && '4rem'};
    padding-inline: ${variant !== 'ghost' && '3rem'};

    font: ${theme.font.text.textSm500};
    letter-spacing: 0.048rem;
  `,
  large: variant => css`
    height: ${variant !== 'ghost' && '6.4rem'};
    padding-inline: ${variant !== 'ghost' && ' 3rem'};

    font: ${theme.font.text.textBase500};
    letter-spacing: 0.032rem;
  `
}

const chevronColors: ChevronColorsProps = {
  primary: css`
    path {
      display: block;

      fill: ${theme.colors.white};
    }
  `,
  secondary: css`
    path {
      display: block;

      fill: ${theme.colors.white};
    }
  `,
  tertiary: css`
    path {
      display: block;

      fill: ${theme.colors.neutral30};
    }
  `,
  ghost: css`
    path {
      display: block;

      fill: ${theme.colors.primary50};
    }
  `
}

type BaseStyles = Record<'ghost' | 'default', () => FlattenSimpleInterpolation>

const baseStyles: BaseStyles = {
  default: () => css`
    border: 2px solid ${theme.colors.neutral95};

    color: ${theme.colors.neutral70};

    background-color: ${theme.colors.neutral95};

    cursor: not-allowed;

    svg {
      fill: ${theme.colors.neutral70};

      path {
        fill: ${theme.colors.neutral70};
      }
    }
  `,
  ghost: () => css`
    color: ${theme.colors.neutral70};

    background-color: transparent;

    cursor: not-allowed;

    svg {
      fill: ${theme.colors.neutral70};

      path {
        fill: ${theme.colors.neutral70};
      }
    }
  `
}

interface IButtonWrapperProps {
  variant: ButtonVariants
  size: ButtonSizes
  isLink?: boolean
  isBlue?: boolean
}

export const ButtonWrapper = styled.button<IButtonWrapperProps>`
  ${({ variant, size, isLink, isBlue, theme }) => css`
    display: flex;
    gap: ${size === 'small' ? '0.4rem' : '0.8rem'};
    justify-content: center;
    align-items: center;

    box-sizing: border-box;
    border-radius: 8px;

    font-weight: ${theme.font.weight.medium};
    ${buttonVariants[variant](isLink ?? false, isBlue ?? false)}
    ${buttonSizes[size](variant)}


    cursor: pointer;

    transition: ${theme.transition.default};
    transition-property: color, background-color, border;

    svg {
      /* medium and small are the same size */
      width: ${size === 'large' ? '2.4rem' : '1.6rem'};
      height: ${size === 'large' ? '2.4rem' : '1.6rem'};

      ${chevronColors[variant]};

      transition: ${theme.transition.default};

      path {
        transition: ${theme.transition.default};
      }
    }

    &[aria-disabled='false']:hover:not(:disabled) {
      .chevron {
        transform: ${size === 'small'
          ? 'translateX(0.4rem)'
          : 'translateX(0.8rem)'};
      }
    }

    &:disabled,
    &[aria-disabled='true'] {
      ${baseStyles[variant === 'ghost' ? 'ghost' : 'default']}
      cursor: not-allowed;
      pointer-events: none;
    }
  `};
`
