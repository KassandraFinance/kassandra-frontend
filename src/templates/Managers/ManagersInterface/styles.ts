import styled from 'styled-components'
import theme from '../../../styles/theme'

export const ManagersInterfaceContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-left: 6rem;
  padding-right: 6rem;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 6rem;
  }

  @media (max-width: 500px) {
    padding-right: 2rem;
    padding-left: 2rem;
  }
`

export const DescriptionContainer = styled.div`
  width: 44rem;

  animation: fadeInManagerInterface ease 3s both;
  -webkit-animation: fadeInManagerInterface ease 3s both;
  -moz-animation: fadeInManagerInterface ease 3s both;
  -o-animation: fadeInManagerInterface ease 3s both;
  -ms-animation: fadeInManagerInterface ease 3s both;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  > span {
    color: #26dbdb;
    font-weight: ${theme.font.weight.normal};
    font-size: ${theme.font.sizes.font12};
    letter-spacing: 0.3em;

    @media (max-width: 1000px) {
      font-size: ${theme.font.sizes.font14};
      text-align: center;
    }

    @media (max-width: 500px) {
      text-align: left;
    }
  }

  > h1 {
    margin-top: 1.6rem;

    color: #ffffff;
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.font32};

    @media (max-width: 1000px) {
      text-align: center;
    }

    @media (max-width: 500px) {
      font-size: ${theme.font.sizes.font24};
      text-align: left;
    }
  }

  > p {
    margin-top: 2.4rem;

    color: #ffffff;
    font-weight: ${theme.font.weight.light};
    font-size: ${theme.font.sizes.font16};

    @media (max-width: 1000px) {
      text-align: center;
    }

    @media (max-width: 500px) {
      font-size: ${theme.font.sizes.font14};
      line-height: 2.4rem;
      text-align: left;
    }
  }
`

export const ImageContainer = styled.div`
  animation: fadeInManagerInterface ease 3s both;
  -webkit-animation: fadeInManagerInterface ease 3s both;
  -moz-animation: fadeInManagerInterface ease 3s both;
  -o-animation: fadeInManagerInterface ease 3s both;
  -ms-animation: fadeInManagerInterface ease 3s both;
  animation-delay: 1.4s;

  @keyframes fadeInManagerInterface {
    0% {
      transform: translateX(-8rem);
      opacity: 0;
    }
    70% {
      opacity: 1;
    }
    100% {
      transform: translateX(0);
    }
  }

  @-moz-keyframes fadeInManagerInterface {
    0% {
      transform: translateX(-8rem);
      opacity: 0;
    }
    70% {
      opacity: 1;
    }
    100% {
      transform: translateX(0);
    }
  }

  @-webkit-keyframes fadeInManagerInterface {
    0% {
      transform: translateX(-8rem);
      opacity: 0;
    }
    70% {
      opacity: 1;
    }
    100% {
      transform: translateX(0);
    }
  }

  @-o-keyframes fadeInManagerInterface {
    0% {
      transform: translateX(-8rem);
      opacity: 0;
    }
    70% {
      opacity: 1;
    }
    100% {
      transform: translateX(0);
    }
  }

  @-ms-keyframes fadeInManagerInterface {
    0% {
      transform: translateX(-8rem);
      opacity: 0;
    }
    70% {
      opacity: 1;
    }
    100% {
      transform: translateX(0);
    }
  }
`
