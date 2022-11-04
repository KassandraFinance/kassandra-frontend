import styled from 'styled-components'

export const ManagerMainContainer = styled.section`
  background-image: url('/assets/images/Manager-bg-desktop.png');
  background-image: image-set(
    url('/assets/images/Manager-bg-desktop.webp') 1x,
    url('/assets/images/Manager-bg-desktop.png') 1x
  );
  background-repeat: no-repeat;
  background-size: fixed;
  background-position: 50% 10%;

  @media (max-width: 768px) {
    background-image: url('/assets/images/Manager-bg-tablet.png');
    background-image: image-set(
      url('/assets/images/Manager-bg-tablet.webp') 1x,
      url('/assets/images/Manager-bg-tablet.png') 1x
    );
  }

  @media (max-width: 360px) {
    background-image: url('/assets/images/Manager-bg-mobile.png');
    background-image: image-set(
      url('/assets/images/Manager-bg-mobile.webp') 1x,
      url('/assets/images/Manager-bg-mobile.png') 1x
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
  gap: 25rem;
  width: 100%;

  @media (max-width: 600px) {
    gap: 18rem;
  }
`
