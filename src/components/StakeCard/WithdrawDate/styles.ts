import styled from 'styled-components'
import theme from '../../../styles/theme'

export const WithdrawDate = styled.div`
  background: ${theme.colors.darkGray};
  border: none;
  border-radius: ${theme.border.radius};
  color: ${theme.colors.grayDisabled};
  font-size: ${theme.font.sizes.font14};
  font-weight: ${theme.font.weight.light};

  padding: ${theme.spacings.space24} ${theme.spacings.space40};

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 44px;
  margin-bottom: 16px;
  outline: none;
  z-index: 10;
  @media (max-width: 420px) {
    max-width: 100%;
    min-width: 200px;
  }
`
