import styled from 'styled-components'
import theme from '../../styles/theme'

export const Background = styled.div`
  background: url('/assets/latestBackground.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const TeamBackground = styled.div`
  background-repeat: no-repeat;
  background-position: 50% 100%;

  @media (max-width: 920px) {
    background: none;
  }
`

export const BackgroundSubscribe = styled.div`
  background: #2114261f;
  border: 0.1rem solid #ffffff21;
  border-radius: 1rem;
  max-width: 96rem;
  margin: 0 auto 17rem;
  padding-top: 4rem;
  padding-right: 6rem;
  padding-bottom: 0;
  padding-left: 6rem;

  @media (max-width: 768px) {
    display: none;
  }
`

export const BackgoundCountDown = styled.div`
  padding: 10rem 10rem;

  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
  background: url('assets/backgroundCountdown.svg');

  @media (max-width: 768px) {
    padding: 0;
    background: none;
  }
`

export const ScrollUpButton = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;

  width: 6rem;
  height: 6rem;
  padding: 1.6rem;
  text-align: center;
  line-height: 6rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  background: ${theme.colors.darkPurple};

  &:hover {
    border: 0.1rem solid ${theme.colors.darkPurple};
    background: ${theme.colors.snow};
  }

  @media (max-width: 768px) {
    display: none;
  }
`

//ScrollUpIcon
export const ScrollUpIcon = styled.div`
  height: 100%;
  margin: auto;

  background: url('assets/icons/back-to-top.svg');
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
`
