import styled from 'styled-components'

export const HomeBackgroundContainer = styled.div`
  width: 100%;

  @media (min-width: 991px) {
    background-image: url('./assets/images/backgroundHome/background-home-hero.png'),
      url('./assets/images/backgroundHome/background-home-body.png');
    background-repeat: no-repeat;
    background-position: top center;
  }
`

export const Container = styled.div`
  position: relative;

  max-width: 110.8rem;
  margin: 0 auto;
`

export const WavyOneWrapper = styled.div`
  position: relative;
`

export const ImgWrapper = styled.div`
  position: absolute;

  display: none;

  @media (max-width: 576px) {
    right: 0;
    bottom: -15rem;
    display: block;
  }
`

export const ImgTabletWrapper1 = styled.div`
  position: absolute;

  display: none;

  @media (min-width: 576px) and (max-width: 960px) {
    right: 0;
    bottom: -30rem;
    display: block;
  }
`

export const ImgTabletWrapper2 = styled.div`
  position: absolute;

  display: none;

  @media (min-width: 576px) and (max-width: 960px) {
    left: 0;
    bottom: -10rem;
    display: block;
  }
`

export const ImgTabletWrapper3 = styled.div`
  position: absolute;

  display: none;

  @media (min-width: 576px) and (max-width: 960px) {
    left: 0;
    bottom: -30rem;
    display: block;
  }
`
