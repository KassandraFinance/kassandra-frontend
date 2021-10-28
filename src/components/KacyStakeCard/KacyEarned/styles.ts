import styled from 'styled-components'
import theme from '../../../styles/theme'


export const KacyEarned = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.medium};
    span {
      font-size: ${theme.font.sizes.font14};
      font-weight: ${theme.font.weight.normal};
    }
  }

  h3 {
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.medium};
    margin: 2px 0 !important;
  }

  span {
    font-size: ${theme.font.sizes.font12};
    b {
      color: #c4c4c4;
      font-weight: ${theme.font.weight.normal};
    }
  }
`
