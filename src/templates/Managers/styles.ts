import styled from 'styled-components'

export const ManagerMainContainer = styled.section`
  background: url('/assets/images/Manager-bg-desktop.webp'),
    url('/assets/images/Manager-bg-desktop.png');
  background-repeat: no-repeat;
  background-size: fixed;
  background-position: 50% 10%;

  @media (max-width: 768px) {
    background: url('/assets/images/Manager-bg-tablet.webp'),
      url('/assets/images/Manager-bg-tablet.png');
  }

  @media (max-width: 360px) {
    background: url('/assets/images/Manager-bg-mobile.webp'),
      url('/assets/images/Manager-bg-mobile.png');
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

export const HeaderContainer = styled.div`
  position: absolute;
  top: 0;

  width: 100%;
`
