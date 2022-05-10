import styled from 'styled-components'
import theme from '../../styles/theme'

export const paddingWrapper = styled.div`
  margin: 0 auto;
  max-width: 1140px;
  max-height: 100%;
  margin-top: ${theme.spacings.space32};

  @media (max-width: 1200px) {
    padding: 0 3rem;
  }

  @media (max-width: 960px) {
    padding: 0 2.4rem;
  }
`
export const paddingLeftWrapper = styled.div`
  margin: 0 auto;
  max-width: 1140px;
  max-height: 100%;
  margin-top: ${theme.spacings.space32};

  @media (max-width: 1200px) {
    padding: 0 0 0 3rem;
  }

  @media (max-width: 960px) {
    padding: 0 0 0 2.4rem;
  }
`
