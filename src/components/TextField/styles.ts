import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'


import { TextFieldProps } from '.'

type IconPositionProps = Pick<TextFieldProps, 'iconPosition'>

type WrapperProps = Pick<TextFieldProps, 'disabled'> & { error?: boolean }

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: #211426;
    border-radius: 0.6rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: #26DBDB;
    margin-bottom: 2.4rem;
    margin-top: 0.5rem;

    &:focus-within {
      box-shadow: 0 0 0.8rem #402947;
      background: black;
    }
  `}

  @media(max-width: 440px){
    max-width:100%
  }
`

export const Input = styled.input<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    /* padding-${iconPosition}: ${theme.spacings.xsmall}; */
    background: #211426;
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
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.light};
    color: ${theme.colors.white};
    cursor: pointer;
    ${media.lessThan('small')`
    font-size: ${theme.font.sizes.small};
    `}

  `}
`

export const Icon = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    color: ${theme.colors.gray};
    order: ${iconPosition === 'right' ? 1 : 0};

    & > svg {
      width: 2.2rem;
    }
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
  `}
`

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.red};
    }

    ${Icon},
    ${Label} {
      color: ${theme.colors.red};
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

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error, disabled }) => css`
    ${error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
    width: 100%
  `}
`
