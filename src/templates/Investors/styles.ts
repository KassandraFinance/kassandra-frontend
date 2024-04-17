import styled from 'styled-components'

export const Investors = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-x: hidden;

  background-image: url('/assets/images/bg-investors-1920.png');
  background-image: image-set(
    url('/assets/images/bg-investors-1920.webp') type('image/webp'),
    url('/assets/images/bg-investors-1920.png') type('image/png')
  );
  background-repeat: no-repeat;
  background-size: auto;
  background-position: top center;

  @media (max-width: 768px) {
    background-image: url('/assets/images/bg-investors-768.png');
    background-image: image-set(
      url('/assets/images/bg-investors-768.webp') type('image/webp'),
      url('/assets/images/bg-investors-768.png') type('image/png')
    );
  }

  @media (max-width: 360px) {
    background-image: url('/assets/images/bg-investors-360.png');
    background-image: image-set(
      url('/assets/images/bg-investors-360.webp') type('image/webp'),
      url('/assets/images/bg-investors-360.png') type('image/png')
    );
  }

  .start-investing {
    width: 19.4rem;
    height: 4.8rem;

    border-radius: 0.4rem;
  }
`

export const CallToActionEndPageContainer = styled.div`
  max-width: 30rem;
  margin: 0 auto;
  margin-bottom: 26rem;
  width: 100%;
`
export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1.6rem;
`
