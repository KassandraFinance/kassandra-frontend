import styled from 'styled-components'
import theme from '../../styles/theme'
import media from 'styled-media-query'

export const BackgroundProducts = styled.div`
  background-image: url("assets/bg-products.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: 50%;
  `

export const Product = styled.section`
  display: grid;
  grid-template-columns: 584px 448px;
  gap: 108px;
  
  margin: 0 auto;
  max-width: 1140px;
  margin-top: ${theme.spacings.space32};
`

export const ProductDetails = styled.div`
  margin-bottom: 120px;
`

export const Intro = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  gap: 20px;
  
  max-width: 390px;
`

export const NameIndex = styled.div`
  p {
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
  display: grid;
  grid-template-columns: 3fr 4fr 1fr 2fr 1fr;
  gap: 44px;
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

export const ProductsContainer = styled.section`

`
export const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
`


export const ComingSoon = styled.img`
  max-width: 100%;
  @media (max-width: 960px) {
    display: none;
  }
`
export const DataIntro = styled.div`
  max-width: 1520px;
  margin-bottom: 26px;

  img{
    width: 64px;
    margin-right: 21px;
    @media (max-width: 900px) {
      width: 50px;
      margin-right: 17px;
    }
  }
  h1{
    font-size: ${theme.font.sizes.font32};
    font-weight: ${theme.font.weight.normal};
    @media (max-width: 1024px) {
      font-size: 24px;
    }
    @media (max-width: 900px) {
      font-size: 24px;
    }
  }
  span{
    font-size: 24px;
    font-weight: ${theme.font.weight.light};
    @media (max-width: 900px) {
      font-size: 20px;
    }
  }
  @media (max-width: 960px) {
    display: none;
    grid-template-columns: 1fr;
    max-width: 440px;
    margin: auto;
    margin-top: 35px;
    padding: 0 32px;
  }
`
export const IntroValues = styled.div`
  max-width: 80%;
  display: flex;
  margin-top: 33px;
  margin-left: 90px;
  h3 {
    font-size: 24px;
    font-weight: ${theme.font.weight.normal};
  }
  div {
    margin: 12px 0;
    border-bottom: 2px solid ${theme.colors.magenta};
  }
  @media(max-width: 900px) {
    max-width: 100%;
  }
`
export const IntroPrice = styled.section`
  margin-right: 40px;
`
export const IntroTVL = styled.section`

`
export const Text = styled.section`
  max-width: 100%;
  padding-top: 100px;
  max-width: 800px;
  /* text-align: center; */
  /* margin: auto; */
  h2{
    font-size: 28px ;
    font-weight: ${theme.font.weight.normal};
    margin-bottom:24px;
    @media(max-width: 1200px){
      font-size: ${theme.font.sizes.font24};
    }
  }
  span{
    display:inline-block;
    font-size: ${theme.font.sizes.font16} ;
    font-weight: ${theme.font.weight.light};
    margin-bottom:16px;
  }
  ol {
    display:inline-block;
    font-size: ${theme.font.sizes.font16} ;
    font-weight: ${theme.font.weight.light};
    list-style: decimal;
    padding-left:35px;
    margin-bottom: 32px;
    li{
    margin-bottom: 16px;
    }
  }
  img{
    max-width: 100%;
    margin: 0 32px;
    @media(max-width: 1200px){
      max-width: 80%;
    }
  }
`
export const Link = styled.div`
  margin: 32px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: ${theme.colors.cyan};
    border: none;
    text-decoration: none;
    font-size: ${theme.font.sizes.font18};
    cursor: pointer;
    position: relative;
    border: none;
    text-decoration: none;
    font-size: ${theme.font.sizes.font18};
    font-weight: ${theme.font.weight.normal};
    cursor: pointer;
    &:hover {
      &::after {
        content: '';
        max-width: 100%;
        text-align: left;
        position: absolute;
        display: block;
        height: 0.1rem;
        background-color: ${theme.colors.cyan};
        animation: hoverAnimation 0.3s forwards;
      }
      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
    ${media.lessThan('large')`
      font-size: ${theme.font.sizes.font12};
    `}
  }
`
export const DesktopContainer = styled.div`
 max-width: 1520px;
  margin-top: 40px;
  margin-inline: auto;
  padding: 0 ${theme.spacings.space32};

  min-height: 100vh;
  display: grid;
  grid-template-columns: auto 440px;
  gap: 60px;

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column-reverse;
  }
`
