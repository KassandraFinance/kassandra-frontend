import styled, { css } from 'styled-components'

export const InputText = styled.div`
  ${() => css``}
`

export const Label = styled.label`
  ${({ theme }) => css`
    display: block;

    margin-bottom: 0.8rem;

    color: #c4c4c4;
    font-weight: ${theme.font.weight.normal};
    font-size: ${theme.font.sizes.font12};
    line-height: ${theme.font.sizes.font14};
    text-transform: uppercase;
  `}
`

export const InputContainer = styled.div`
  ${() => css`
    position: relative;
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    height: 4.8rem;
    padding: 1.6rem;
    border: 1px solid rgb(255 255 255 / 0.15);
    border-radius: 8px;

    color: ${theme.colors.grayDisabled};
    font-weight: ${theme.font.weight.light};
    font-style: normal;
    font-size: ${theme.font.sizes.font16};
    font-family: Rubik;
    line-height: 100%;
    letter-spacing: normal;

    background: #1b1d22;
    outline: none;

    transition-timing-function: ease-in-out;
    transition-duration: 300ms;
    transition-property: border;

    &:valid:not([value='']) {
      border: 1px solid ${theme.colors.green};
    }

    &:invalid:not([value='']) {
      border: 1px solid ${theme.colors.red};
    }

    &:read-only {
      background-color: transparent;
    }

    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
      margin: 0;
      appearance: none;
    }
  `}
`

export const PlaceholderWrapper = styled.span`
  ${() => css`
    position: absolute;
    top: 0;
    left: 0;

    display: inline-block;
    padding-left: 2rem;

    height: 4.8rem;
    border: 1px solid rgb(255 255 255 / 0);

    opacity: 1;
    pointer-events: none;

    transition-timing-function: ease-in-out;
    transition-duration: 300ms;
    transition-property: opacity;

    ${Input}:not([value='']) ~ &,
    ${Input}:focus ~ & {
      opacity: 0;
    }
  `}
`

export const Placeholder = styled.span`
  ${({ theme }) => css`
    display: inline-block;

    height: 4.8rem;
    padding: 1.6rem;

    color: ${theme.colors.grayDisabled};
    font-weight: ${theme.font.weight.light};
    font-size: ${theme.font.sizes.font16};
    line-height: 100%;
    letter-spacing: normal;
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    display: none;

    color: ${theme.colors.red};
    font-weight: ${theme.font.weight.light};
    font-size: ${theme.font.sizes.font14};
    line-height: 100%;

    transition-timing-function: ease-in-out;
    transition-duration: 300ms;
    transition-property: opacity;

    ${Input}:invalid:not([value='']) ~ & {
      display: block;
    }
  `}
`
