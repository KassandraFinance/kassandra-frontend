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
    content:"";
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    border-radius: 6px; 
    padding: 3px; 
    background: linear-gradient(0deg, #FFBF00 -0.2%, #E843C4 79.99%);
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }
`

export const InterBackground = styled.div`
  background: linear-gradient(0deg, rgba(255, 191, 0, 0.2) -0.02%, rgba(232, 67, 196, 0.2) 99.99%);
  
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

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  height: 80px;
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

export const APR = styled.p`
  font-size: 24px;
  font-weight: 500;
`

export const Percentage= styled.p`
  font-size: 40px;
  font-weight: 300;
`

export const InfosStaking = styled.div`
  padding: 64px 32px 24px;
  @media (max-width: 420px) {
    padding: 20px;
  }
`

export const KacyStaked = styled.div`
  border-top: 2px solid #E843C4;
  border-bottom: 2px solid #E843C4;
  padding: 16px;
  width: 100%;
  position: absolute;
  left: -0.1px;
  p {
    font-size: 18px;
    font-weight: 400;
    text-align: center;
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
    font-size: 16px;
    line-height: 16px;
    margin-bottom: 10px;
    display: block;
    @media (max-width: 540px) {
      font-size: 13px;
      line-height: 13px;
    }
  }

  span:last-child {
    font-weight: 300;
  }

  img {
    z-index: 11;
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
    top: 382px;
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
  background: linear-gradient(87.48deg, #FFBF00 -70.27%, #E843C4 154.78%);
  border: none;
  border-radius: 6px;
  font-size: 20px;
  font-weight: 400;

  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 320px;
  height: 40px;
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