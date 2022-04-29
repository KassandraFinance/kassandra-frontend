import styled from 'styled-components'

export const Background = styled.div`
  background: url('/assets/latestBackground.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`
export const BackgroundSubscribe = styled.div`
  max-width: 96rem;
  margin: 0 auto 17rem;

  padding-top: 4rem;
  padding-left: 6rem;
  padding-bottom: 0;
  padding-right: 6rem;

  background: #2114261f;
  border: 1px solid #ffffff21;
  border-radius: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`
export const BackgoundCountDown = styled.div`
  padding: 10rem 10rem;

  background: url('/assets/backgroundCountdown.svg');
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;

  @media (max-width: 768px) {
    padding: 0;
    background: none;
  }
`
