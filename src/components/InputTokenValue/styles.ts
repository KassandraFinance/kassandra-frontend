import styled from 'styled-components'
import theme from '../../styles/theme'

export const Input = styled.input`
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: ${theme.font.sizes.font24};

  text-align: right;
  width: 100%;
  margin: 8px 0;

  outline: none;

  @media (max-width: 380px) {
    font-size: 22px;
  }
  @media (max-width: 350px) {
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
