import styled from 'styled-components'
import theme from '../../styles/theme'

import * as ButtonStyles from '../Button/styles'

export const StakeCard = styled.div`
  z-index: 1;
`

interface IBorderGradientProps {
  stakeWithVotingPower: boolean;
}

// eslint-disable-next-line prettier/prettier
export const BorderGradient = styled.div<IBorderGradientProps>`
  background: rgba(31, 31, 31, 0.72);
  border-radius: 6px;

  position: relative;
  width: 295px;
  max-height: 100%;

  z-index: -1;

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
    border-radius: ${theme.border.radius};
    padding: 1px;
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
export const InterBackground = styled.div<IInterBackgroundProps>`
  background: ${props =>
    props.stakeWithVotingPower
      ? 'linear-gradient(95.32deg, rgba(38, 219, 219, 0.23) 0%, rgba(12, 61, 220, 0.23) 100%)'
      : 'linear-gradient(95.32deg, rgba(232, 67, 196, 0.23) 0%, rgba(247, 150, 64, 0.23) 100%)'};
  border-radius: 6px 6px 0 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 90px;
  padding: 20px;
`

export const IntroStaking = styled.div`
  font-size: ${theme.font.sizes.font18};
  text-align: right;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 1;
  max-height: 100%;
  @media (max-width: 540px) {
    font-size: ${theme.font.sizes.font16};
  }
`

export const APR = styled.div`
  display: flex;
  align-items: center;

  h4 {
    color: ${theme.colors.cyan};
    font-size: ${theme.font.sizes.font14} !important;
    line-height: 14px !important;
    font-weight: ${theme.font.weight.normal} !important;
    margin: 0 0 4px 4px;
  }
`

export const TooltipAPR = styled.div`
  padding: 1px;

  position: relative;
  z-index: 99;
`

export const Percentage = styled.p`
  line-height: ${theme.font.sizes.font24};
  font-size: ${theme.font.sizes.font24};
  font-weight: ${theme.font.weight.medium};
`

export const PoolName = styled.div`
  padding: 20px;
`

export const StakeAndEarn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 4px 0;
  z-index: -4;
  p {
    color: #c4c4c4;
    font-size: ${theme.font.sizes.font14};
  }

  a {
    color: #c4c4c4;
    font-size: ${theme.font.sizes.font14};
    text-decoration: none;

    z-index: 2;

    img {
      margin-left: 8px;
    }
  }
`

export const VotingPowerAndWithdrawDelay = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 20px 0;
`
export const InfoPool = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: #c4c4c4;
    font-size: ${theme.font.sizes.font12};
    font-weight: ${theme.font.weight.normal};
    text-transform: uppercase;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 4px;
  }

  p {
    color: #fff;
    font-size: ${theme.font.sizes.font18};
    font-weight: ${theme.font.weight.medium};
  }
  span {
    color: #c4c4c4;
    font-size: ${theme.font.sizes.font14};
    text-transform: uppercase;
  }
`

export const Days = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-right: 4px;
    margin-bottom: 2px;
  }
`

export const Line = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin: 0 20px;
`

export const InfosStaking = styled.div`
  margin: 0 20px;
`

interface IButtonContainerProps {
  stakeWithVotingPower: boolean;
}

// eslint-disable-next-line prettier/prettier
export const ButtonContainer = styled.div<IButtonContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: ${props => (props.stakeWithVotingPower ? '-8px' : '16px')} auto 0;
  width: 100%;
`

export const Claim = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 16px;

  width: 100%;
  height: 100%;
`

export const StakeContainer = styled.div`
  ${ButtonStyles.Wrapper} {
    margin-bottom: 16px;
  }
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 300px;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: ${theme.font.sizes.font18};
    margin-top: 8px;
  }
`

interface IButtonDetailsProps {
  isDetails: boolean;
  isConnect: boolean;
}

// eslint-disable-next-line prettier/prettier
export const ButtonDetails = styled.button<IButtonDetailsProps>`
  background-color: transparent;
  border: none;
  color: ${theme.colors.cyan};
  font-size: ${theme.font.sizes.font14};
  font-family: ${theme.font.family};
  font-weight: ${theme.font.weight.light};

  margin-top: ${props => (props.isConnect ? '0px' : '20px')};
  margin-bottom: 20px;
  outline: none;
  cursor: pointer;
  z-index: 10;

  img {
    width: 11px;
    height: 11px;
    transform: ${props => (props.isDetails ? 'rotate(180deg)' : null)};
    margin-left: 8px;
    transition-duration: 200ms;
  }
`
