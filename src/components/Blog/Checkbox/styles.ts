import styled, { css } from 'styled-components'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import type { CheckBoxSize, CheckboxVariant } from '.'
import type { ThemingHelper } from '@/types/themingHelper'
import type { ThemeType } from '@/styles/theme'

type CheckboxSizes = ThemingHelper<CheckBoxSize>
type CheckboxVariants = ThemingHelper<CheckboxVariant, [ThemeType]>

const checkboxSizes: CheckboxSizes = {
  small: css`
    width: 1.6rem;
    height: 1.6rem;
  `,
  medium: css`
    width: 2.4rem;
    height: 2.4rem;
  `
}

const checkboxVariants: CheckboxVariants = {
  primary: theme => css`
    background-color: ${theme.colors.white};

    &[data-state='unchecked']:disabled {
      border-color: ${theme.colors.neutral80};

      background-color: ${theme.colors.white};

      cursor: not-allowed;
    }

    &[data-state='unchecked']:hover:not(:disabled) {
      border-color: ${theme.colors.primary50};

      background-color: ${theme.colors.primary95};
    }

    &[data-state='checked'] {
      border-color: ${theme.colors.primary50};

      background-color: ${theme.colors.primary50};
      outline: none;

      svg {
        opacity: 1;
      }
    }

    &[data-state='unchecked']:focus-visible:not(:disabled) {
      border-color: ${theme.colors.primary50};

      background-color: ${theme.colors.primary95};
      outline: none;
    }

    &[data-state='checked']:disabled {
      border-color: ${theme.colors.neutral80};

      background-color: ${theme.colors.neutral80};

      cursor: not-allowed;
    }
  `,
  secondary: theme => css`
    background-color: ${theme.colors.white};

    &[data-state='unchecked']:disabled {
      border-color: ${theme.colors.neutral80};

      background-color: ${theme.colors.white};

      cursor: not-allowed;
    }

    &[data-state='unchecked']:hover:not(:disabled) {
      border-color: ${theme.colors.neutral30};

      background-color: ${theme.colors.neutral80};
    }

    &[data-state='checked'] {
      border-color: ${theme.colors.neutral30};

      background-color: ${theme.colors.neutral30};
      outline: none;

      svg {
        opacity: 1;
      }
    }

    &[data-state='unchecked']:focus-visible:not(:disabled) {
      border-color: ${theme.colors.neutral30};

      background-color: ${theme.colors.neutral80};
      outline: none;
    }

    &[data-state='checked']:disabled {
      border-color: ${theme.colors.neutral80};

      background-color: ${theme.colors.neutral80};

      cursor: not-allowed;
    }
  `
}

type CheckboxProps = {
  size: CheckBoxSize
  variant: CheckboxVariant
}

export const Checkbox = styled(RadixCheckbox.Root)<CheckboxProps>`
  ${({ theme, size, variant }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    ${checkboxSizes[size]}
    ${checkboxVariants[variant](theme)}
    border: 2px solid ${theme.colors.neutral50};
    border-radius: 4px;

    cursor: pointer;

    transition: ${theme.transition.default};

    svg {
      opacity: 0;
    }
  `}
`

export const CheckboxIndicator = styled(RadixCheckbox.Indicator)`
  ${({ theme }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;

    color: ${theme.colors.white};

    svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  `}
`
