import styled from 'styled-components'
import theme from '../../styles/theme'

import * as TextFieldStyles from '../../components/TextField/styles'

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 760px;
  margin: 0 auto 60px;
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    padding: 0 32px;
    margin: 0 auto 32px;
  }
`
export const TextWrapper = styled.div`
  max-width: 260px;
  h1 {
    font-size: ${theme.font.sizes.font40};
    font-weight: ${theme.font.weight.black};
    line-height: 110%;
    margin-bottom: 16px;
  }
  span {
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    line-height: 155%;
  }
  @media (max-width: 768px) {
    text-align: center;
    margin: 0 auto;
    max-width: 100%;
  }
`
export const Input = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  ${TextFieldStyles.Input} {
    background-color: #ffff;
    color: ${theme.colors.darkPurple};
  }
  ${TextFieldStyles.InputWrapper} {
    background-color: #ffff;
    border-color: #ffff;
    border-radius: 12px;
    height: 60px;
    margin: 0;
  }
  ${TextFieldStyles.Icon} {
    cursor: pointer;
  }
  button {
    border: 'none';
  }

  @media (max-width: 960px) {
    margin-top: 1.6rem;
  }
`
