import styled from 'styled-components'

export const Hero = styled.section`
  height: calc(100vh - 110px);
  padding: 0 32px;
  display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  max-width: 1520px;
  @media (max-width: 959px) {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 160px);
    margin-bottom: 32px;
  }
  @media (max-width: 600px) {
    height: calc(100vh - 140px);
  }
  @media (max-width: 370px) {
    height: calc(100vh - 160px);
  }
  @media (max-width: 330px) {
    padding: 0 20px;
  }
  h1 {
    font-size: 112px;
    font-weight: 400;
    line-height: 94px;
    @media (max-width: 1200px) {
      font-size: 80px;
      line-height: 70px;
    }
    @media (max-width: 959px) {
      font-size: 70px;
      line-height: 60px;
    }
    @media (max-width: 770px) {
      font-size: 60px;
      margin-bottom: 32px;
    }
    @media (max-width: 600px) {
      font-size: 50px;
    }
    @media (max-width: 420px) {
      font-size: 36px;
      margin-bottom: 0;
    }
  }
  h3 {
    font-size: 24px;
    font-weight: 300;
    margin: 32px 0;
    max-width: 600px;
    @media (max-width: 1200px) {
      font-size: 27px;
    }
    @media (max-width: 959px) {
      text-align: center;
      margin: 0 auto;
      margin: 8px 0 32px;
      font-size: 22px;
    }
    @media (max-width: 770px) {
      font-size: 18px;
      max-width: 500px;
    }
    @media (max-width: 420px) {
      font-size: 20px;
      max-width: 360px;
    }
    @media (min-width: 375px) {
      margin: 8px 0 16px;
    }
  }
  .kassandra {
    max-width: 500px;
    max-height: 700px;

    width: 100%;

    @media (min-width: 1440px) {
      max-width: 100%;
    }
    @media (max-width: 1240px) {
      max-width: 100%;
      min-width: 230px;
    }
    @media (max-width: 959px) {
      max-width: 400px;
    }
    @media (max-width: 600px) {
      max-width: 300px;
    }
  }
`

export const DesktopScreen = styled.div`
  @media (max-width: 959px) {
    display: none;
  }
`

export const MobileScreen = styled.div`
  @media (min-width: 960px) {
    display: none;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 460px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
  @media (max-width: 560px) {
    max-width: 400px;
  }
  @media (max-width: 440px) {
    flex-direction: column;
    height: 110px;
  }

  a {
    background: linear-gradient(264.12deg, #e843c4 -179.71%, #020887 205.21%);
    border: none;
    border-radius: 6px;
    color: #fcfcfc;
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    line-height: 20px;

    height: 52px;
    padding: 16px 32px;
    cursor: pointer;
    @media (max-width: 600px) {
      font-size: 16px;
      line-height: 16px;
      height: 48px;
    }
  }
`

export const WithpaperButton = styled.a`
  background: transparent !important;
  border: 1px solid #26dbdb !important;
  border-radius: 6px;
  color: #fcfcfc !important;
  text-decoration: none;
  font-size: 20px;

  height: 52px;
  padding: 12px 32px;
  cursor: pointer;
  transition-duration: 300ms;
  &:hover {
    background-color: #26dbdb !important;
    color: #211426 !important;
  }
  @media (max-width: 600px) {
    font-size: 16px;
    height: 48px;
  }
`
