import styled from 'styled-components'
import theme from '../../styles/theme'
import media from 'styled-media-query'


export const ProductsContainer = styled.section`
  max-width: 1520px;
  margin-top: 40px;
  margin-inline: auto;
  padding: 0 ${theme.spacings.space32};

  min-height: 100vh;
  display: grid;
  grid-template-columns: auto 440px;
  gap: 60px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`
export const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
`


export const ComingSoon = styled.img`
  max-width: 100%;
  @media (max-width: 900px) {
    display: none;
  }
`
export const Intro = styled.div`
  max-width: 1520px;
  /* position: relative; */
  margin-bottom: 70px;
  /* margin-left: 70px; */

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
  @media (max-width: 900px) {
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
  padding-top: 100px;
  max-width: 800px;
  /* margin: auto; */
  h2{
    font-size: 28px ;
    font-weight: ${theme.font.weight.normal};
    margin-bottom:24px;
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
