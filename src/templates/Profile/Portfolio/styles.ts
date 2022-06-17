import styled from 'styled-components'
import theme from '../../../styles/theme'

export const paddingWrapper = styled.div`
  margin: 0 auto;
  max-width: 1140px;
  max-height: 100%;
  margin-top: ${theme.spacings.space32};
`
export const paddingLeftWrapper = styled.div`
  margin: 0 auto;
  margin-top: ${theme.spacings.space32};

  @media (max-width: 960px) {
    margin-right: -3rem;
  }

  @media (max-width: 540px) {
    margin-right: -1.6rem;
  }
`
