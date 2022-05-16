import styled from 'styled-components'

import theme from '../../styles/theme'

interface IBackgroundProductsProps {
  boxShadow: boolean;
}

export const Explore = styled.section`
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

export const TitleContainer = styled.div`
  margin-bottom: 4.7rem;
`

export const CardContainer = styled.div`
  display: flex;
  gap: 7.8rem;

  @media (max-width: 960px) {
    gap: 5.4rem;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;
  }
`
