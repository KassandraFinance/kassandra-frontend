import styled from 'styled-components'
import theme from '../../styles/theme'

export const Background = styled.div`
  background: url('/assets/latestBackground.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const TeamBackground = styled.div`
  background: url('/assets/about-team-background.svg');
  background-repeat: no-repeat;
  background-position: 50% 100%;

  @media (max-width: 920px) {
    background: none;
  }
`

export const BackgroundSubscribe = styled.div`
  background: #2114261f;
  border: 1px solid #ffffff21;
  border-radius: 10px;
  max-width: 96rem;
  margin: 0 auto 170px;
  padding: 40px 60px 0px 60px;
  @media (max-width: 768px) {
    display: none;
  }
`
export const BackgoundCountDown = styled.div`
  background: url('assets/backgroundCountdown.svg');
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
  padding: 100px 100px;
  @media (max-width: 768px) {
    background: none;
    padding: 0;
  }
`

export const ScrollUpButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  padding: 16px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  background: ${theme.colors.darkPurple};
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    border: 1px solid ${theme.colors.darkPurple};
    background: ${theme.colors.snow};
  }
  @media (max-width: 768px) {
    display: none;
  }
`
//ScrollUpIcon
export const ScrollUpIcon = styled.div`
  height: 100%;
  background: url('assets/backToTop.svg');
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
  margin: auto;
`
