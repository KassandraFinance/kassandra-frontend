import styled from 'styled-components'

export const Background = styled.div`
  background: url('assets/latestBackground.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`
export const BackgroundSubscribe = styled.div`
  background: #2114261F;
  border: 1px solid #FFFFFF21;
  border-radius: 10px;
  max-width: 96rem;
  margin: 0 auto 170px;
  padding: 40px 60px 0px 60px;
  @media(max-width: 768px) {
    display: none;
  }
`
export const BackgoundCountDown = styled.div`
background: url('assets/backgroundCountdown.svg');
background-repeat: no-repeat;
background-size: auto;
background-position: center;
padding: 100px 100px;
@media(max-width: 768px) {
  background: none;
  padding: 0;
}

`
