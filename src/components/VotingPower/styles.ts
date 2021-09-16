import styled from 'styled-components'

export const BorderGradient = styled.div`
  position: relative;
  padding: 4px; 
  z-index: 1;
  max-height: 100%;
  min-width: 360px;
  max-width: 400px;
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
  height: 112px;
  padding: 20px 32px;
  img {
    max-width: 72px;
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
  align-items: flex-end;
  flex: 1;
  max-height: 100%;
  @media (max-width: 540px) {
    font-size: 16px;
  }
`

export const APR = styled.div`
  display: flex;
  align-items: center;

  h4 {
    font-size: 24px !important;
    line-height: 24px !important;
    font-weight: 500 !important;
    margin: 0 0 4px 6px;
  }
`

export const Percentage= styled.p`
  line-height: 40px;
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
  text-align: center;

  display: grid;
  grid-template-columns: 1fr 1fr;


  width: 100%;
  position: absolute;
  left: -0.1px;
  p {
    font-size: 18px;
    font-weight: 400;
    text-align: center;
  }

  span {
    font-size: 18px;
    font-weight: 300;
  }
`

export const VotingPower = styled.div`
  border-top: 2px solid #E843C4;
  border-bottom: 2px solid #E843C4;
  border-right: 1px solid #E843C4;

  padding: 8px 32px;
`

export const WithdrawDelay = styled.div`
  border-top: 2px solid #E843C4;
  border-bottom: 2px solid #E843C4;
  border-left: 1px solid #E843C4;

  padding: 8px 16px;
`

export const Days = styled.div`
  display: flex;
  justify-content: center;

  p {
    margin-right: 8px;
  }
`

export const Info = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 18px;
    line-height: 18px;
    margin: 24px 0;
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
`

export const Stake = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  font-weight: 300;
  p {
    font-size: 18px;
    line-height: 18px;
    margin: 24px 0 4px;
    @media (max-width: 540px) {
      font-size: 16px;
      line-height: 16px;
    }
  }

  span {
    font-size: 13px;
  }
`

export const Claim = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  margin: 16px auto 0;
  width: 100%;
`

interface IButtonProps {
  buttonRequest?: boolean
}

export const Button = styled.button<IButtonProps>`
  background: linear-gradient(87.48deg, #FFBF00 -70.27%, #E843C4 154.78%);
  border: none;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 400;

  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 100%;
  height: 44px;
  cursor: pointer;
  outline: none;
  margin: 8px 0;

  z-index: 10;
  @media (max-width: 420px) {
    max-width: 100%;
    min-width: 200px;
  }

  ${props => props.buttonRequest && {
    background: 'transparent',
    border: '1px solid #26DBDB',
    color: '#fff',
    transitionDuration: '300ms',
  }}
  &:hover {
    background-color: ${props => props.buttonRequest ? '#26DBDB' : null};
    color: ${props => props.buttonRequest ? '#211426' : null};
  }
`

interface IButtonDetailsProps {
  isDetails: boolean
}

export const ButtonDetails = styled.button<IButtonDetailsProps>`
  background-color: transparent;
  border: none;
  color: #26DBDB;
  margin-top: 16px;

  outline: none;  
  cursor: pointer;
  z-index: 10;

  img {
    transform: ${props => props.isDetails ? 'rotate(180deg)' : null};
    margin-left: 8px;
    transition-duration: 200ms;
  }
`

export const StakeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 300px;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 18px;
    margin-top: 8px;
  }
`