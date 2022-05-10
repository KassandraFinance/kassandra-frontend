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
