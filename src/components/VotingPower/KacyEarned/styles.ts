import styled from 'styled-components'
import theme from '../../../styles/theme'


export const KacyEarned = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 14px;
    font-weight: ${theme.font.weight.medium};
  }

  h3 {
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.medium};
    margin: 2px 0 !important;
  }

  span {
    font-size: ${theme.font.sizes.font12};
    font-weight: ${theme.font.weight.light};
  }
`
