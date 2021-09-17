import styled from 'styled-components'

export const BorderGradient = styled.div`
  position: relative;
  padding: 4px;
  z-index: 1;
  height: 100%;
  min-width: 360px;
  max-width: 440px;
  @media (max-width: 800px) {
    margin: 0 auto;
    max-width: 400px;
  }
  @media (max-width: 420px) {
    max-width: 100%;
    min-width: 270px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 6px;
    padding: 4px;
    background: linear-gradient(0deg, #26dbdb -0.02%, #e843c4 99.99%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }
`

export const InterBackground = styled.div`
  background: linear-gradient(
    0deg,
    rgba(38, 219, 219, 0.2) -0.02%,
    rgba(232, 67, 196, 0.2) 99.99%
  );

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 152px;
  padding: 24px 32px;
  img {
    max-width: 96px;
    @media (max-width: 540px) {
      max-width: 84px;
    }
    @media (max-width: 420px) {
      max-width: 78px;
    }
  }
  @media (max-width: 420px) {
    padding: 20px;
  }
`

export const IntroStaking = styled.div`
  font-size: 18px;
  text-align: right;
  @media (max-width: 540px) {
    font-size: 16px;
  }
  p {
    margin-bottom: 8px;
    line-height: 18px;
    &:nth-child(2) {
      margin-bottom: 16px;
    }
    &:nth-child(2n) {
      font-weight: 300;
    }
  }
`

export const InfosStaking = styled.div`
  padding: 24px 32px;
  @media (max-width: 420px) {
    padding: 20px;
  }
`

export const Info = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 18px;
    line-height: 18px;
    margin-bottom: 24px;
    @media (max-width: 540px) {
      font-size: 16px;
      line-height: 16px;
    }
  }

  p:last-child {
    font-weight: 300;
  }

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 8px;
    display: block;
    @media (max-width: 540px) {
      font-size: 13px;
      line-height: 13px;
    }
  }

  span:last-child {
    font-weight: 300;
  }
  .total-staking {
    margin: 16px 0;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;
  width: 100%;
  .img-info {
    position: absolute;
    top: 318px;
    left: 80px;
    z-index: 10;
    cursor: pointer;
    @media (max-width: 540px) {
      top: 365px;
      left: 75px;
    }
    @media (max-width: 420px) {
      top: 360px;
      left: 65px;
    }
  }
`

export const ButtonWallet = styled.button`
  background: linear-gradient(87.48deg, #e843c4 -47.54%, #26dbdb 154.78%);
  border: none;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 400;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 320px;
  height: 44px;
  cursor: pointer;
  outline: none;
  z-index: 10;
  @media (max-width: 420px) {
    max-width: 100%;
    min-width: 200px;
  }
`

export const ButtonDetails = styled.button`
  background-color: transparent;
  border: none;
  color: turquoise;
  margin-top: 16px;

  outline: none;
  cursor: pointer;
  z-index: 10;
`
