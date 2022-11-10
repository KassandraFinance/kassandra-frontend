import styled from 'styled-components'
import theme from '../../../styles/theme'

export const AllocationsInexpensiveContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 6rem;
  padding-right: 6rem;

  @media (max-width: 500px) {
    padding-right: 2rem;
    padding-left: 2rem;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    gap: 6rem;
  }
`

export const DescriptionContainer = styled.div`
  width: 44rem;

  animation: fadeInAllocations ease 3s both;
  -webkit-animation: fadeInAllocations ease 3s both;
  -moz-animation: fadeInAllocations ease 3s both;
  -o-animation: fadeInAllocations ease 3s both;
  -ms-animation: fadeInAllocations ease 3s both;

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
    width: 100%;

    @media (max-width: 1000px) {
      font-size: ${theme.font.sizes.font14};
      text-align: center;
    }

    @media (max-width: 500px) {
      text-align: left;
    }
  }

  > h3 {
    margin-top: 1.6rem;

    @media (max-width: 1000px) {
      text-align: center;
    }
    @media (max-width: 500px) {
      text-align: left;
    }
  }

  > p {
    margin-top: 2.4rem;

    @media (max-width: 1000px) {
      text-align: center;
    }
    @media (max-width: 500px) {
      text-align: left;
    }
  }
`

export const ImageContainer = styled.div`
  animation: fadeInAllocations ease 3s both;
  -webkit-animation: fadeInAllocations ease 3s both;
  -moz-animation: fadeInAllocations ease 3s both;
  -o-animation: fadeInAllocations ease 3s both;
  -ms-animation: fadeInAllocations ease 3s both;
  animation-delay: 1.4s;

  @keyframes fadeInAllocations {
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

  @-moz-keyframes fadeInAllocations {
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

  @-webkit-keyframes fadeInAllocations {
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

  @-o-keyframes fadeInAllocations {
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

  @-ms-keyframes fadeInAllocations {
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
