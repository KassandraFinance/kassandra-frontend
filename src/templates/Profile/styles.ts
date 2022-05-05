import styled from 'styled-components'
import theme from '../../styles/theme'

interface IBackgroundProductsProps {
  boxShadow: boolean;
}

// prettier-ignore
export const BackgroundProfile = styled.div<IBackgroundProductsProps>`
  background-image: url('/assets/bg-products.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: 50%;

  ${props =>
    props.boxShadow
      ? ''
      : 'box-shadow: inset 0px -20px 20px 0px #151117; padding: 0 0 80px;'};
`

export const Profile = styled.section`
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
