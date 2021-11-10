import styled from 'styled-components'
import theme from '../../styles/theme'

export const ChartProduct = styled.div`
  position: relative;
`

export const SelectChart = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
  width: 170px;
`

export const Input = styled.input`
  display: none;

  &[type='radio'] + label {
    color: #fff;
    padding: 2px;
  }

  &[type='radio']:checked + label {
    border-bottom: 1px solid ${theme.colors.cyan};
    font-weight: ${theme.font.weight.medium};
  }
`

export const Label = styled.label`
  color: #fff;
  font-size: ${theme.font.sizes.font14};
  text-align: center;
  text-transform: capitalize;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  height: 20px;
  @media (max-width: 375px) {
    font-size: 13px;
    padding: 10px 18px;
  }
  @media (max-width: 330px) {
    font-size: ${theme.font.sizes.font12};
    padding: 8px 14px;
  }
`
