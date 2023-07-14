import { ThemingHelper } from '@/types/themingHelper'
import styled, { css } from 'styled-components'

import type { InputRoundness, InputSize, InputVariant } from '.'
import type { ThemeType } from '@/styles/theme'

type InputSizeVariants = ThemingHelper<InputSize, [ThemeType]>
type InputVariants = ThemingHelper<
  InputVariant,
  [ThemeType, boolean | undefined]
>
type InputRoundnessVariants = ThemingHelper<InputRoundness>

const inputSizes: InputSizeVariants = {
  xSmall: theme => css`
    height: 2.4rem;
    padding-inline: 0.8rem;

    font: ${theme.font.text.textXs300};
    letter-spacing: 0.048rem;
  `,
  small: theme => css`
    height: 3.2rem;
    padding-inline: 1.2rem;

    font: ${theme.font.text.textBase300};
    letter-spacing: 0.048rem;
  `,
  medium: theme => css`
    height: 4rem;
    padding-inline: 1.6rem;

    font: ${theme.font.text.textBase300};
    letter-spacing: 0.048rem;
  `,
  large: theme => css`
    height: 4.8rem;
    padding-inline: 1.6rem;

    font: ${theme.font.text.textLg300};
    letter-spacing: 0.048rem;
  `
}

const inputRoundness: InputRoundnessVariants = {
  sharp: css`
    border-radius: 0;
  `,
  small: css`
    border-radius: 6px;
  `,
  medium: css`
    border-radius: 8px;
  `,
  large: css`
    border-radius: 8px;
  `
}

const inputVariants: InputVariants = {
  outlined: (theme, error) => css`
    color: ${theme.colors.snow};

    background-color: transparent;

    ${error
      ? `border: 2px solid ${theme.colors.red50}`
      : `border: 2px solid ${theme.colors.gray}`};

    &:disabled {
      border: 2px solid transparent;

      color: ${theme.colors.neutral50};

      background-color: transparent;

      opacity: 0.4;
    }

    &:focus-visible {
      border: 2px solid ${error ? theme.colors.red : theme.colors.magenta};
    }
  `,
  filled: (theme, error) => css`
    color: ${theme.colors.snow};

    background-color: transparent;

    ${error
      ? `border: 2px solid ${theme.colors.red50}`
      : `border: 2px solid transparent`};

    &:disabled {
      border: 2px solid transparent;

      color: ${theme.colors.neutral50};

      background-color: transparent;

      opacity: 0.4;
    }

    &:focus-visible {
      border: 2px solid ${theme.colors.magenta};
    }
  `,
  underlined: (theme, error) => css`
    padding-inline: 0;
    border: none;
    ${error
      ? `border-bottom: 2px solid ${theme.colors.red50}`
      : `border-bottom: 1px solid ${theme.colors.neutral80}`};

    &:disabled {
      border-bottom: 2px solid ${theme.colors.neutral80};

      color: ${theme.colors.neutral50};

      opacity: 0.4;
    }

    &:focus-visible {
      border-bottom: 2px solid
        ${error ? theme.colors.red50 : theme.colors.primary50};
    }
  `
}

const BaseInput = styled.input`
  ${({ theme }) => css`
    position: relative;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: 100%;

    color: ${theme.colors.neutral30};

    background-color: ${theme.colors.white};

    &::placeholder {
      color: ${theme.colors.gray};
    }

    &:disabled {
      cursor: not-allowed;
    }

    &:focus-visible:not(:disabled) {
      outline: none;
    }
  `}
`

interface IInputProps {
  variantSize: InputSize
  variant: InputVariant
  rounded: InputRoundness
  error?: boolean
}

export const Input = styled(BaseInput)<IInputProps>`
  ${({ theme, variantSize, variant, rounded, error }) => css`
    ${inputRoundness[rounded]}
    ${inputSizes[variantSize](theme)}
    ${inputVariants[variant](theme, error)}
  `}
`
