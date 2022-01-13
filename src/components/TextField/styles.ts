import styled, { css, DefaultTheme } from 'styled-components'

import { TextFieldProps } from '.'

type IconPositionProps = Pick<TextFieldProps, 'iconPosition'>

type WrapperProps = Pick<TextFieldProps, 'disabled'> & { error?: boolean }

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: ${theme.colors.darkPurple};
    border-radius: 0.6rem;
    padding: 0 ${theme.spacings.space8};
    border: 0.2rem solid;
    border-color: ${theme.colors.cyan};
    margin-bottom: 2.4rem;
    margin-top: 0.5rem;

    &:focus-within {
      box-shadow: 0 0 0.8rem #402947;
      background: black;
    }
  `}

  @media(max-width: 440px) {
    max-width: 100%;
  }
`

// eslint-disable-next-line prettier/prettier
export const Input = styled.input<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    color: ${theme.colors.snow};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.font18};
    padding: ${theme.spacings.space8} 0;
    background: ${theme.colors.darkPurple};
    border: 0;
    outline: none;
    width: ${iconPosition === 'right' ? `calc(100% - 2.2rem)` : `100%`};
    &:focus-within {
      background: black;
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.font18};
    font-weight: ${theme.font.weight.light};
    color: ${theme.colors.snow};
    cursor: pointer;
    @media(max-width: 520px) {
    font-size: ${theme.font.sizes.font16};
    `}
  }
`

// eslint-disable-next-line prettier/prettier
export const Icon = styled.button<IconPositionProps>`
  ${({ iconPosition }) => css`
    display: flex;
    color: black;
    order: ${iconPosition === 'right' ? 1 : 0};
    background-color: transparent;
    border-color: transparent;

    & > svg {
      width: 2.2rem;
    }
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: red;
    font-size: ${theme.font.sizes.font12};
  `}
`

const wrapperModifiers = {
  error: () => css`
    ${InputWrapper} {
      border-color: red;
    }

    ${Icon},
    ${Label} {
      color: red;
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.gray};

      &::placeholder {
        color: currentColor;
      }
    }
  `
}

export const Wrapper = styled.div <WrapperProps>`
  ${({ theme, error, disabled }) => css`
    ${error && wrapperModifiers.error()}
    ${disabled && wrapperModifiers.disabled(theme)}
    width: 100%
  `}
`
