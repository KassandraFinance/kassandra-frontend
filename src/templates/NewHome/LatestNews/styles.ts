import styled from 'styled-components'
import theme from '../../../styles/theme'

export const LatestNewsContainer = styled.section``

export const NewsCardContainer = styled.div`
  max-width: 124rem;
  margin: 0 auto;
  margin-top: 7.8rem;
  overflow: hidden;

  @media (max-width: 1249px) {
    max-width: 81.6rem;
  }

  .alice-carousel__dots-item {
    width: 1rem;
    height: 1rem;

    background-color: ${theme.colors.snow};
    border-radius: 1rem;

    transition-duration: 300ms;
    transition-timing-function: ease-in-out;
    transition-property: width background-color color;

    &:hover {
      background-color: ${theme.colors.amber};
    }
  }

  .alice-carousel__dots-item.__active {
    width: 2rem;
    height: 1rem;

    background-color: ${theme.colors.amber};
    border-radius: 1rem;

    &:hover {
      background-color: ${theme.colors.snow};
    }
  }
`
