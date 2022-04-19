import styled from 'styled-components'
import theme from '../../styles/theme'

import * as ButtonStyles from '../Button/styles'

export const StakeCard = styled.div`
  position: relative;

  z-index: 1;
`

interface IBorderGradientProps {
  stakeWithVotingPower: boolean;
}

// eslint-disable-next-line prettier/prettier
export const BorderGradient =
  styled.div <
  IBorderGradientProps >
  `
  position: relative;

  width: 29.5rem;
  max-height: 100%;

  background: rgba(31, 31, 31, 0.72);
  border-radius: 0.6rem;

  @media (max-width: 420px) {
    max-width: 100%;
    min-width: 27rem;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    padding: 0.1rem;

    border-radius: ${theme.border.radius};
    background: ${props =>
      props.stakeWithVotingPower
        ? `linear-gradient(-45deg, ${theme.colors.blue} 0%, ${theme.colors.cyan} 100%)`
        : 'linear-gradient(-45deg, #E843C4 0%, #F79640 100%)'};

    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }
`

interface IInterBackgroundProps {
  stakeWithVotingPower: boolean;
}

// eslint-disable-next-line prettier/prettier
export const InterBackground =
  styled.div <
  IInterBackgroundProps >
  `
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 9rem;
  padding: 2rem;

  background: ${props =>
    props.stakeWithVotingPower
      ? 'linear-gradient(95.32deg, rgba(38, 219, 219, 0.23) 0%, rgba(12, 61, 220, 0.23) 100%)'
      : 'linear-gradient(95.32deg, rgba(232, 67, 196, 0.23) 0%, rgba(247, 150, 64, 0.23) 100%)'};

  border-top-left-radius: 0.6rem;
  border-top-right-radius: 0.6rem;
`

export const IntroStaking = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 1;

  max-height: 100%;

  font-size: ${theme.font.sizes.font18};
  text-align: right;

  @media (max-width: 540px) {
    font-size: ${theme.font.sizes.font16};
  }
`

export const APR = styled.div`
  display: flex;
  align-items: center;

  h4 {
    margin: 0 0 0.4rem 0.4rem;

    color: ${theme.colors.cyan};
    font-size: ${theme.font.sizes.font14} !important;
    line-height: 1.4rem !important;
    font-weight: ${theme.font.weight.normal} !important;
  }
`

export const TooltipAPR = styled.div`
  position: relative;

  padding: 0.1rem;

  z-index: 99;
`

export const Percentage = styled.p`
  line-height: ${theme.font.sizes.font24};
  font-size: ${theme.font.sizes.font24};
  font-weight: ${theme.font.weight.medium};
`

export const PoolName = styled.div`
  padding: 2rem;
`

export const StakeAndEarn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0.4rem 0;

  z-index: -4;

  p {
    color: #bdbdbd;
    font-size: ${theme.font.sizes.font14};
  }

  a {
    color: #bdbdbd;
    font-size: ${theme.font.sizes.font14};
    text-decoration: none;

    z-index: 2;

    img {
      margin-left: 0.8rem;
    }
  }
`

export const VotingPowerAndWithdrawDelay = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 2rem 0;
`
export const InfoPool = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0.4rem;

    color: #bdbdbd;
    font-size: ${theme.font.sizes.font12};
    font-weight: ${theme.font.weight.normal};
    text-transform: uppercase;
  }

  p {
    color: #fff;
    font-size: ${theme.font.sizes.font18};
    font-weight: ${theme.font.weight.medium};
  }

  span {
    color: #bdbdbd;
    font-size: ${theme.font.sizes.font14};
    text-transform: uppercase;
  }
`

export const Days = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-right: 0.4rem;
    margin-bottom: 0.2rem;
  }
`

export const Line = styled.div`
  margin: 0 2rem;

  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.1);
`

export const InfosStaking = styled.div`
  margin: 0 2rem;
`

interface IButtonContainerProps {
  stakeWithVotingPower: boolean;
}

// eslint-disable-next-line prettier/prettier
export const ButtonContainer =
  styled.div <
  IButtonContainerProps >
  `
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 1.6rem auto 0;
  width: 100%;
`

export const Claim = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 1.6rem;
`

export const StakeContainer = styled.div`
  ${ButtonStyles.Wrapper} {
    margin-bottom: 1.6rem;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-height: 30rem;

  p {
    margin-top: 0.8rem;

    font-size: ${theme.font.sizes.font18};
  }
`

interface IButtonDetailsProps {
  isDetails: boolean;
  isConnect: boolean;
}

// eslint-disable-next-line prettier/prettier
export const ButtonDetails =
  styled.button <
  IButtonDetailsProps >
  `
  margin-top: ${props => (props.isConnect ? '0px' : '2rem')};
  margin-bottom: 2rem;

  color: ${theme.colors.cyan};
  font-size: ${theme.font.sizes.font14};
  font-family: ${theme.font.family};
  font-weight: ${theme.font.weight.light};


  background-color: transparent;
  border: none;

  outline: none;
  cursor: pointer;
  z-index: 10;

  img {
    width: 1.1rem;
    height: 1.1rem;
    transform: ${props => (props.isDetails ? 'rotate(180deg)' : null)};
    margin-left: 0.8rem;

    transition-duration: 200ms;
  }
`
