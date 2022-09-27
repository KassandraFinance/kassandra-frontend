import styled from 'styled-components'

export const InvestorsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-x: hidden;

  background-image: url('/assets/images/bg-investors-1920.png');
  background-image: image-set(
    url('/assets/images/bg-investors-1920.webp') 1x,
    url('/assets/images/bg-investors-1920.png') 1x
  );
  background-repeat: no-repeat;
  background-size: auto;
  background-position: top center;

  @media (max-width: 768px) {
    background-image: url('/assets/images/bg-investors-768.png');
    background-image: image-set(
      url('/assets/images/bg-investors-768.webp') 1x,
      url('/assets/images/bg-investors-768.png') 1x
    );
  }

  @media (max-width: 360px) {
    background-image: url('/assets/images/bg-investors-360.png');
    background-image: image-set(
      url('/assets/images/bg-investors-360.webp') 1x,
      url('/assets/images/bg-investors-360.png') 1x
    );
  }
`
