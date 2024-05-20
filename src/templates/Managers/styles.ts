import styled from 'styled-components'

export const ManagerMainContainer = styled.section`
  background-image: url('/assets/images/Manager-bg-desktop.png');
  background-image: image-set(
    url('/assets/images/Manager-bg-desktop.webp') type('image/webp'),
    url('/assets/images/Manager-bg-desktop.png') type('image/png')
  );
  background-repeat: no-repeat;
  background-size: fixed;
  background-position: 50% 10%;

  @media (max-width: 768px) {
    background-image: url('/assets/images/Manager-bg-tablet.png');
    background-image: image-set(
      url('/assets/images/Manager-bg-tablet.webp') type('image/webp'),
      url('/assets/images/Manager-bg-tablet.png') type('image/png')
    );
  }

  @media (max-width: 360px) {
    background-image: url('/assets/images/Manager-bg-mobile.png');
    background-image: image-set(
      url('/assets/images/Manager-bg-mobile.webp') type('image/webp'),
      url('/assets/images/Manager-bg-mobile.png') type('image/png')
    );
  }
`

export const ManagerContainer = styled.div`
  max-width: 114rem;
  margin: 0 auto;
`

export const ManagerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25rem;
  width: 100%;

  @media (max-width: 600px) {
    gap: 18rem;
  }
`

export const SectionTransparentCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-inline: 2.4rem;

  @media (max-width: 576px) {
    padding-inline: 1.6rem;
  }
`

export const CallToActionEndPageContainer = styled.div`
  max-width: 30rem;
  margin: 0 auto;
  margin-top: 20rem;
  margin-bottom: 20rem;
`
