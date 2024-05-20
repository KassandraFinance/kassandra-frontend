import styled from 'styled-components'

export const HomeBackgroundContainer = styled.div`
  width: 100%;

  /* @media (min-width: 991px) {
    background-image: url('./assets/images/backgroundHome/background-home-hero.png'),
      url('./assets/images/backgroundHome/background-home-body.png');
    background-image: image-set(
        url('./assets/images/backgroundHome/background-home-hero.webp')
          type('image/webp'),
        url('./assets/images/backgroundHome/background-home-hero.png')
          type('image/png')
      ),
      image-set(
        url('./assets/images/backgroundHome/background-home-body.webp')
          type('image/webp'),
        url('./assets/images/backgroundHome/background-home-body.png')
          type('image/png')
      );
    background-repeat: no-repeat;
    background-position: top center;
  } */
`

export const SectionContainer = styled.div`
  position: relative;

  max-width: 124rem;
  padding-inline: 2.4rem;
  margin: 0 auto;

  @media (max-width: 576px) {
    padding-inline: 1.6rem;
  }
`

export const CallToActionEndPageContainer = styled.div`
  max-width: 30rem;
  margin: 0 auto;
  margin-top: 26rem;
`
