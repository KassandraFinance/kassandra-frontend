import styled from 'styled-components'
import media from 'styled-media-query'
import theme from '../../styles/theme'


export const FarmContainer = styled.section`
  max-width: 1520px;
  margin: 40px auto 64px;
  padding: 0 ${theme.spacings.space32};

  h1 {
    font-size: ${theme.font.sizes.font24};
    font-weight: ${theme.font.weight.normal};

    @media (max-width: 420px) {
      padding: 0 10px;
    }
  }
  h3 {
    font-size: ${theme.font.sizes.font20};
    font-weight: ${theme.font.weight.normal};
    margin: ${theme.spacings.space16} 0 32px;
    @media (max-width: 420px) {
      padding: 0 10px;
    }
  }

  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto ;
  margin-bottom: 50px;
  width: 50%;

  > h1{
    font-size: ${theme.font.sizes.font40};
    font-weight: ${theme.font.weight.medium};
    margin-bottom: ${theme.spacings.space24};
    @media(max-width: 960px) {
      font-size: ${theme.font.sizes.font24};
    }
  }
  > h3 {
    font-size: ${theme.font.sizes.font24};
    font-weight: ${theme.font.weight.light};
    margin-block:  0 ${theme.spacings.space24};
    @media(max-width: 960px) {
      font-size: ${theme.font.sizes.font12};
    }

  }
  @media(max-width: 960px) {
    width: 100%
  }
`

export const Link = styled.div`
  display: flex;
  margin: auto;
  width: 50%;
  justify-content: space-evenly;
  @media(max-width: 960px){
    width: 30%
  }
  @media(max-width: 600px){
    width: 50%
  }
  > a {
    border: none;
    text-decoration: none;
    font-size: ${theme.font.sizes.font18};
    cursor: pointer;
    color: ${theme.colors.snow};
    position: relative;
    border: none;
    text-decoration: none;
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

export const GridStaking = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(360px, 400px));
  gap: 24px;
  justify-content: space-between;

  margin: 0 auto;
  max-width: 1520px;
  @media (max-width: 1160px) {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    height: 100%;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 420px) {
    gap: 32px;
  }
`

