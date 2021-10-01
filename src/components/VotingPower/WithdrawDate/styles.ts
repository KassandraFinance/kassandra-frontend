import styled from 'styled-components'
import theme from '../../../styles/theme'


export const WithdrawDate = styled.div`
  background: #4F4F4F;
  border: none;
  border-radius: ${theme.border.radius};
  color: ${theme.colors.grayDisabled};
  font-size: ${theme.font.sizes.font18};
  font-weight: ${theme.font.weight.normal};

  padding: ${theme.spacings.space24} ${theme.spacings.space40};

  display: flex;
  align-items: center;
  justify-content: center;

  width: 320px;
  height: 44px;
  margin: 8px 0;
  outline: none;
  z-index: 10;
  @media (max-width: 420px) {
    max-width: 100%;
    min-width: 200px;
  }
`
