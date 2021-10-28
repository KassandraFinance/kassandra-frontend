import styled from 'styled-components'
import media from 'styled-media-query'
import theme from '../../styles/theme'

export const BackgroundStakeFarm = styled.div`
  background: url('assets/backgroundStakeFarm.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const StakeFarm = styled.section`
  max-width: 945px;
  margin: 0 auto;
  /* h1 {
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
  } */
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
  grid-template-columns: repeat(3, minmax(280px, 295px));
  justify-content: space-between;
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(280px, 295px));
    padding: 0 30px;
    gap: 30px;
    max-width: 700px;
    margin: 0 auto;
  }
  @media (max-width: 680px) {
    grid-template-columns: repeat(1, minmax(280px, 295px));
    justify-content: center;
  }
`

