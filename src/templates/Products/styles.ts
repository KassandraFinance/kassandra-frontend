import styled from 'styled-components'
import theme from '../../styles/theme'

interface IBackgroundProductsProps {
  boxShadow: boolean;
}

// eslint-disable-next-line prettier/prettier
export const BackgroundProducts = styled.div<IBackgroundProductsProps>`
  background-image: url('/assets/bg-products.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: 50%;

  ${props =>
    props.boxShadow
      ? ''
      : 'box-shadow: inset 0px -20px 20px 0px #151117; padding: 0 0 80px;'};
`

export const Product = styled.section`
  display: grid;
  grid-template-columns: minmax(300px, 584px) 448px;
  gap: 0 108px;

  margin: 0 auto;
  max-width: 1140px;
  max-height: 100%;
  margin-top: ${theme.spacings.space32};

  @media (max-width: 1200px) {
    padding: 0 30px;
  }
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column-reverse;
  }
  @media (max-width: 400px) {
    padding: 0 15px;
  }
`

export const ProductDetails = styled.div`
  margin-bottom: 120px;
`

export const Intro = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  gap: 20px;

  max-width: 440px;
`

export const NameIndex = styled.div`
  p {
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.font12};
    text-transform: uppercase;
  }
`

export const NameAndSymbol = styled.div`
  display: flex;
  align-items: flex-start;

  h1 {
    font-size: ${theme.font.sizes.font24};
    font-weight: ${theme.font.weight.light};
  }

  h3 {
    background-color: rgba(0, 0, 0, 0.19);
    border-radius: 10px;
    font-size: ${theme.font.sizes.font12};
    font-weight: ${theme.font.weight.light};

    margin-left: ${theme.spacings.space16};
    padding: 8px 12px;
  }
`

export const Line = styled.div`
  background-color: rgba(255, 255, 255, 0.1);

  width: 100%;
  height: 1px;
  margin: ${theme.spacings.space24} 0;
`

export const IntroCharts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 22px;

  max-width: 100%;
`

export const IndexData = styled.div`
  span {
    font-size: ${theme.font.sizes.font12};
    text-transform: uppercase;

    display: flex;
    align-items: center;

    img {
      margin-left: 6px;
    }
  }

  h2 {
    font-size: ${theme.font.sizes.font18};
    font-weight: ${theme.font.weight.medium};

    margin-top: ${theme.spacings.space8};
  }
`

export const Tooltip = styled.div`
  margin-top: 2px;
  margin-left: 6px;
  img {
    width: 14px;
  }
`
