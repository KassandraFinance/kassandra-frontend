import styled from 'styled-components'

export const Hero = styled.div`
  height: 100vh;
  max-width: 102rem;
  position: relative;
  /* height: 74.4rem; */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  h1 {
    /* margin-top: 1.6rem; */

    font-size: 4.8rem;
    line-height: 5.3rem;
    font-weight: 900;

    animation: fadeInHeroInvestors ease 3s both;
    -webkit-animation: fadeInHeroInvestors ease 3s both;
    -moz-animation: fadeInHeroInvestors ease 3s both;
    -o-animation: fadeInHeroInvestors ease 3s both;
    -ms-animation: fadeInHeroInvestors ease 3s both;
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

    animation: fadeInHeroInvestors ease 3s both;
    -webkit-animation: fadeInHeroInvestors ease 3s both;
    -moz-animation: fadeInHeroInvestors ease 3s both;
    -o-animation: fadeInHeroInvestors ease 3s both;
    -ms-animation: fadeInHeroInvestors ease 3s both;
  }

  @media (max-width: 992px) {
    padding: 0 2.4rem;

    h1 {
      font-size: 4.8rem;
      line-height: 5.28rem;
      font-weight: 900;
    }

    span {
      font-size: 1.4rem;
      line-height: 1.6rem;
      font-weight: 300;
    }
  }

  @media (max-width: 576px) {
    /* height: 48.4rem; */
    width: 32.3rem;

    background-size: 160%;
    background-position: center 130%;

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

  @media (max-width: 400px) {
    a {
      display: none;
    }
  }

  @keyframes fadeInHeroInvestors {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeInHeroInvestors {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeInHeroInvestors {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fadeInHeroInvestors {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes fadeInHeroInvestors {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export const BackgroundImage = styled.div`
  position: absolute;
  z-index: -1;

  width: 100%;
  height: calc(100vh - 10rem);
  bottom: 0;
  background: url('/assets/images/hero-investor.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;

  animation: fadeInHeroInvestorsImg ease 2s;
  -webkit-animation: fadeInHeroInvestorsImg ease 2s;
  -moz-animation: fadeInHeroInvestorsImg ease 2s;
  -o-animation: fadeInHeroInvestorsImg ease 2s;
  -ms-animation: fadeInHeroInvestorsImg ease 2s;

  @keyframes fadeInHeroInvestorsImg {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeInHeroInvestorsImg {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeInHeroInvestorsImg {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fadeInHeroInvestorsImg {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes fadeInHeroInvestorsImg {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  /* margin-top: 20.6rem; */
  opacity: 0;
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
    /* margin-top: 13rem; */
  }

  @media (max-width: 820px) {
    /* margin-top: 18rem; */
  }
  animation: fadeInHeroInvestors ease 3s both;
  -webkit-animation: fadeInHeroInvestors ease 3s both;
  -moz-animation: fadeInHeroInvestors ease 3s both;
  -o-animation: fadeInHeroInvestors ease 3s both;
  -ms-animation: fadeInHeroInvestors ease 3s both;
`

export const Description = styled.div`
  max-width: 57.9rem;

  margin-top: 2.4rem;
  margin-bottom: 2.4rem;

  animation: fadeInHeroInvestors ease 3s both;
  -webkit-animation: fadeInHeroInvestors ease 3s both;
  -moz-animation: fadeInHeroInvestors ease 3s both;
  -o-animation: fadeInHeroInvestors ease 3s both;
  -ms-animation: fadeInHeroInvestors ease 3s both;
`

export const ScroolContainer = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 50%;
  transform: translateX(50%);
`
