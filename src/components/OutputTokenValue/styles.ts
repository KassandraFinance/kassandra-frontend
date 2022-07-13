import styled from 'styled-components'
import theme from '../../styles/theme'

interface IInputProps {
  bestValue?: boolean;
}

// eslint-disable-next-line prettier/prettier
export const Input = styled.input <IInputProps>`
  width: 100%;
  margin: 0.8rem 0;

  color: #fff;
  font-weight: ${theme.font.weight.normal};
  font-family: ${theme.font.family};
  text-align: right;
  ${props =>
    props.bestValue
      ? `
      line-height: ${theme.font.sizes.font14};
      font-size: ${theme.font.sizes.font14};
  `
      : `
      line-height: ${theme.font.sizes.font20};
      font-size: ${theme.font.sizes.font20};
  `}

  background-color: transparent;
  border: none;

  outline: none;

  @media (max-width: 380px) {
    font-size: 2.2rem;
  }

  @media (max-width: 360px) {
    font-size: ${theme.font.sizes.font20};
  }

  &::placeholder {
    color: #fff;
  }

  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`
