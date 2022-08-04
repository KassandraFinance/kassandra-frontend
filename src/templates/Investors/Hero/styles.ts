import styled from 'styled-components'

export const Hero = styled.div`
  max-width: 1020px;
  height: 744px;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  background: url('/assets/images/hero-investor.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;

  h1 {
    margin-top: 1.6rem;

    font-size: 4.8rem;
    line-height: 5.3rem;
    font-weight: 900;
  }

  span {
    color: #ffffff;
    font-size: 1.6rem;
    line-height: 2.4rem;
  }

  .start-investing {
    width: 19.4rem;
    height: 4.8rem;

    border-radius: 0.4rem;
  }

  @media (max-width: 690px) {
    h1 {
      font-size: 2.4rem;
      line-height: 3.2rem;
      font-weight: 700;
    }

    span {
      font-size: 1.4rem;
      line-height: 1.6rem;
      font-weight: 300;
    }
  }

  @media (max-width: 580px) {
    height: 48.4rem;
    width: 32.3rem;

    background-size: 160%;
    background-position: center 130%;
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20.6rem;

  span {
    color: #ffbf00;
    letter-spacing: 0.4em;
  }

  hr {
    width: 6.4rem;
    height: 0.1rem;

    margin-left: 1.6rem;
    margin-right: 1.9rem;
    background-color: #ffbf00;
    border: none;
  }

  @media (max-width: 580px) {
    margin-top: 13rem;
  }

  @media (max-width: 820px) {
    margin-top: 18rem;
  }
`

export const Description = styled.div`
  max-width: 579px;

  margin-top: 2.4rem;
  margin-bottom: 2.4rem;
`

export const ScrollContainer = styled.div`
  margin-top: 15rem;

  @media (max-width: 680px) {
    display: none;
  }
`
